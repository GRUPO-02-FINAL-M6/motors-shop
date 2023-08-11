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
  createAds: (
    payload: iAdsRequest
  ) => Promise<AxiosResponse<any, any> | undefined>;
  goToNextPage: () => Promise<void>;
  goToPreviousPage: () => Promise<void>;
  nextPage: string | null;
  previousPage: string | null;
  currentPage: number
}

export interface iAds {
  id: number;
  name: string;
  brand: string;
  description: string;
  year: number;
  km: number;
  fuel: string;
  price: number;
  color: string;
  priceFipe: number;
  images: string[];
  createdAt: string;
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
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [nextPage, setNextPage] = useState<string | null>(null);
  const [previousPage, setpreviousPage] = useState<string | null>(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    getAds();
  }, []);

  const getAds = async () => {
    try {
      const response = await api.get("/advertisement");
      setAds(response.data.ads);
      setNextPage(response.data.nextPage);
      setpreviousPage(response.data.previousPage);
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  };

  const goToNextPage = async () => {
    if (nextPage) {
      try {
        const response = await api.get(`${nextPage}`);
        setAds(response.data.ads);
        setNextPage(response.data.nextPage);
        setpreviousPage(response.data.previousPage);
        setCurrentPage(currentPage + 1)
      } catch (error: any) {
        toast.error(error.response.data.message);
      }
    }
  };

  const goToPreviousPage = async () => {
    if (previousPage) {
      try {
        const response = await api.get(`${previousPage}`);
        setAds(response.data.ads);
        setNextPage(response.data.nextPage);
        setpreviousPage(response.data.previousPage);
        setCurrentPage(currentPage - 1)
      } catch (error: any) {
        toast.error(error.response.data.message);
      }
    }
  };

  const filterAds = async (filter: string) => {
    try {
      const response = await api.get(`/advertisement?name=`);
      setAds(response.data.ads);
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
      return response.data;
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <AdsContext.Provider
      value={{
        ads,
        setAds,
        filterAds,
        createAds,
        goToNextPage,
        goToPreviousPage,
        nextPage,
        previousPage,
        currentPage
      }}
    >
      {children}
    </AdsContext.Provider>
  );
};
