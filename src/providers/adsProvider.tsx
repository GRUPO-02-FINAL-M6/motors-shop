import React, { createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { toast } from "react-toastify";
import axios from "axios";

interface iAdsProviderProps {
    children: React.ReactNode
}

interface iAdsContext {
    ads: iAds[]
    setAds:React.Dispatch<React.SetStateAction<iAds[]>>
    filterAds: (filter: string) => Promise<void>
}

export interface iAds {
    id: number
    name: string
    brand: string
    description: string
    year: number
    km: number
    images: string[]
    fuel: string
    createdAt: string
    value: number
    user: {name: string}

}

export const AdsContext = createContext({} as iAdsContext)

export const AdsProvider = ({ children }: iAdsProviderProps) => {
    const [ads, setAds] = useState<iAds[]>([]);

    useEffect(() => {
        getAds();
    }, []);

    const getAds = async () => {
        try {
            const response = await api.get("/advertisement");
            setAds(response.data);
        } catch (error) {
            if(axios.isAxiosError(error)){
                toast.error(error.response?.data)
            };
        }
    };
    
    const filterAds = async (filter:string) => {
  
            try {
                const response = await api.get(`/advertisement?name=`);
                setAds(response.data);
            } catch (error) {
                if(axios.isAxiosError(error)){
                    toast.error(error.response?.data)
                };
            }
        };
    




    return (
        <AdsContext.Provider value={{ ads, setAds,filterAds }}>
            {children}
        </AdsContext.Provider>
    );
};
