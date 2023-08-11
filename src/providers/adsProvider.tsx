import React, { createContext, useEffect, useState } from "react";
import { api, apiFipe } from "../services/api";
import { toast } from "react-toastify";
import axios, { AxiosResponse } from "axios";

interface iAdsProviderProps {
  children: React.ReactNode;
}

interface iAdsContext {
  ads: iAds[];
  setAds: React.Dispatch<React.SetStateAction<iAds[]>>;
  filterAds: (filter: string) => Promise<void>;
}

export interface iAds {
  id: number;
  name: string;
  brand: string;
  description: string;
  year: number;
  km: number;
  images: string[];
  fuel: string;
  createdAt: string;
  value: number;
  user: { name: string };
}

export interface iAdsRequest {
  name: string;
  brand: string;
  color: string;
  description: string;
  year: number;
  km: number;
  images: string[];
  fuel: string;
  price: number;
  priceFipe: number;
}

export const AdsContext = createContext({} as iAdsContext);

export const AdsProvider = ({ children }: iAdsProviderProps) => {
  const [ads, setAds] = useState<iAds[]>([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    getAds();
  }, []);

  const getAds = async () => {
    try {
      const response = await api.get("/advertisement");
      setAds(response.data);
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  };

  const filterAds = async (filter: string) => {
    try {
      const response = await api.get(`/advertisement?name=`);
      setAds(response.data);
    } catch (error: any) {
      toast.error(error.response?.data.message);
    }
  };

  const getFipeValue = async (
    brand: string,
    name: string,
    year: number,
    fuel: number
  ) => {
    try {
      const response = await apiFipe.get(
        `/cars/unique?brand=${brand}&name=${name}&year=${year}&fuel=${fuel}`
      );
      console.log(response.data.value);
      return response.data.value;
    } catch (error) {
      toast.error("Veículo não encontrado na tabela FIPE");
    }
  };

  const createAds = async (payload: iAdsRequest) => {
    try {
      payload.priceFipe = await getFipeValue(
        payload.brand,
        payload.name,
        payload.year,
        3
      );
      const response = await api.post("/advertisement", payload, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response;
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <AdsContext.Provider value={{ ads, setAds, filterAds }}>
      {children}
    </AdsContext.Provider>
  );
};
