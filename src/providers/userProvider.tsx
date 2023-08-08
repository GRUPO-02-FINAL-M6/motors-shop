import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";


interface iUserProviderProps {
    children: React.ReactNode
}

interface iUserContext {
    user: iUser | null
    login: (payload: iLogin) => Promise<void>
}

export interface iUser {
    id: number
    name: string
    email: string
    contact: string
    createdAt: string
    deletedAt: string
}

interface iLogin {
    email: string
    password: string
}

export const UserContext = createContext({} as iUserContext)

export const UserProvider = ({ children }: iUserProviderProps) => {

    const [user, setUser] = useState<iUser | null>(null)
    const token: string | null = localStorage.getItem("token")
    const userId: number = Number(token!.sub)

    useEffect(() => {
    }, []);

    const login = async (payload: iLogin) => {
        try {
            const response = await api.post("/users/login", payload)
            localStorage.setItem("token", response.data.token)
            getUser()
        } catch (error) {
            if(axios.isAxiosError(error)){
                toast.error(error.response?.data)
            };
        }
    }
    const getUser = async () => {
        try {
            const response = await api.get(`/users/${userId}`)
            setUser(response.data)
        } catch (error) {
            if(axios.isAxiosError(error)){
                toast.error(error.response?.data)
            };
        }
    }
    
    return (
        <UserContext.Provider value={{ login, user }}>
            {children}
        </UserContext.Provider>
    );
};
