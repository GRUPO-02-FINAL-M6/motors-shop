import React, { createContext, useEffect, useState } from "react";
import { api, apiFipe } from "../services/api";
import { toast } from "react-toastify";
import axios, { AxiosResponse } from "axios";
import { iUser } from "./userProvider";

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
  currentPage: number;
  totalPages: number | null;
  getAdvertiserProfile: (id: number) => Promise<void>;
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
  priceFip: number;
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

export interface iAdvertiserProfile {
  user: iUser;
  ads: iAds[];
}

export const AdsContext = createContext({} as iAdsContext);

export const AdsProvider = ({ children }: iAdsProviderProps) => {
  const [ads, setAds] = useState<iAds[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [nextPage, setNextPage] = useState<string | null>(null);
  const [previousPage, setPreviousPage] = useState<string | null>(null);
  const [totalPages, setTotalPages] = useState<number | null>(null);
  const [advertiser, setAdvertiser] = useState<iAdvertiserProfile | null>(null);
  const token = localStorage.getItem("token");

  const getAds = async () => {
    try {
      const response = await api.get("/advertisement");
      setAds(response.data.ads);
      setNextPage(response.data.nextPage);
      setPreviousPage(response.data.previousPage);
      setTotalPages(response.data.maxPages);
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  };
  useEffect(() => {
    getAds();
  }, []);

  const goToNextPage = async () => {
    if (nextPage) {
      try {
        const response = await api.get(`${nextPage}`);
        setAds(response.data.ads);
        setNextPage(response.data.nextPage);
        setPreviousPage(response.data.previousPage);
        setCurrentPage(currentPage + 1);
        setTotalPages(response.data.maxPages);
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
        setPreviousPage(response.data.previousPage);
        setCurrentPage(currentPage - 1);
        setTotalPages(response.data.maxPages);
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

  const getAdvertiserProfile = async (id: number) => {
    try {
      const response = await api.get(`/user/${id}`);
      setAdvertiser(response.data);
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
        currentPage,
        totalPages,
        getAdvertiserProfile,
      }}
    >
      {children}
    </AdsContext.Provider>
  );
};
