import React, { createContext, useEffect, useState } from "react";
import { api, apiFipe } from "../services/api";
import { toast } from "react-toastify";
import axios, { AxiosResponse } from "axios";

interface iAdsProviderProps {
  children: React.ReactNode;
}

interface iAdsContext {
  ads: iAds[];
  createAds: (payload: iAdsRequest) => Promise<AxiosResponse<any, any> | undefined>
}

export interface iAds {
  id: number;
  name: string;
  brand: string;
  description: string;
  year: number;
  km: number;
  color: string;
  images: string[];
  fuel: string;
  createdAt: string;
  user: { name: string };
  price: number;
  priceFip: number;
  modelCar: string;
}

export interface iAdsRequest {
  name: string;
  brand: string;
  description: string;
  year: number;
  km: number;
  color: string;
  images: string[];
  fuel: string;
  createdAt: string;
  user: { name: string };
  price: number;
  priceFip: number;
  modelCar: string;
}

export const AdsContext = createContext({} as iAdsContext);

export const AdsProvider = ({ children }: iAdsProviderProps) => {
  const [ads, setAds] = useState<iAds[]>([]);
  const token = localStorage.getItem("token")

  useEffect(() => {
    getAds();
  }, []);

  const getFipeValue = async (brand: string, name: string, year: number, fuel: number) => {
    try {
      const response = await apiFipe.get(
        `/cars/unique?brand=${brand}&name=${name}&year=${year}&fuel=${fuel}`
      );
      console.log(response.data.value)
      return response.data.value
    } catch (error) {
        toast.error('Veículo não encontrado na tabela FIPE')
    }
  };

  const createAds = async(payload: iAdsRequest) => {
    try {
        payload.priceFip = await getFipeValue(payload.brand, payload.name, payload.year, 3)
        const response = await api.post("/advertisement", payload, {
            headers: {Authorization: `Bearer ${token}`}
        })
        return response
    } catch (error: any) {
        toast.error(error.response.data.message)
    }
  }

  const getAds = async () => {
    try {
      const response = await api.get("/advertisement");
      setAds(response.data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data);
      }
    }
  };

  return <AdsContext.Provider value={{ ads, createAds }}>{children}</AdsContext.Provider>;
};
