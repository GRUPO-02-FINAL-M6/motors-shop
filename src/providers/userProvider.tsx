import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode"


interface iUserProviderProps {
    children: React.ReactNode
}


interface iUserContext {
    user: iUser | null
    setUser: React.Dispatch<React.SetStateAction<iUser | null>>
    login: (payload: iLogin) => Promise<void>
    registerUser: (payload: iRegisterUser) => Promise<void>
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
interface iRegisterUser {
    name: string;
    email: string;
    cpf: string;
    telephone: string;
    birthday: string;
    description: string;
    cep: string;
    state: string;
    city: string;
    road: string;
    number: string;
    complement: string;
    password: string;
    
  }

export const UserContext = createContext({} as iUserContext)

export const UserProvider = ({ children }: iUserProviderProps) => {

    const [user, setUser] = useState<iUser | null>(null)
    const token: string | null = localStorage.getItem("token")
    const navigate = useNavigate();

    useEffect(() => {
    }, []);

    const login = async (payload: iLogin) => {
        try {
            const response = await api.post("/users/login", payload)
            localStorage.setItem("token", response.data.token)
            api.defaults.headers.common.Authorization = `Bearer ${token}`;
            navigate("/dashboard")
            await getUser()
        } catch (error: any) {
            toast.error(error.response.data.message)
        }
    }
    
    const getUser = async () => {
        try {
            const decodedToken: any = jwt_decode(token!)
            const userId = Number(decodedToken.sub)
            const response = await api.get(`/users/${userId}`)
            setUser(response.data)
        } catch (error: any) {
            toast.error(error.response.data.message)
        }
    }
    
    
    const registerUser = async (payload:any) => {
        try {
            const response = await api.post(`/users`,payload)
            navigate("/login")
        } catch (error: any) {
            toast.error(error.response.data.message)
        }
    }


    
    
    return (
        <UserContext.Provider value={{ login, user, setUser, registerUser }}>
            {children}
        </UserContext.Provider>
    );
};
