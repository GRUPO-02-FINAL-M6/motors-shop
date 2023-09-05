import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { api, apiFipe } from "../services/api";
import { toast } from "react-toastify";
import axios, { AxiosResponse } from "axios";
import { UserContext, iUser } from "./userProvider";


interface iAdsProviderProps {
  children: React.ReactNode;
}

interface iAdsContext {
  ads: iAds[];
  setFilterString: React.Dispatch<React.SetStateAction<string>>;
  filterString: string;
  setAds: React.Dispatch<React.SetStateAction<iAds[]>>;
  filterAds: (filter: string) => Promise<void>;
  createAds: (payload: any) => Promise<void>;
  goToNextPage: () => Promise<void>;
  goToPreviousPage: () => Promise<void>;
  nextPage: string | null;
  previousPage: string | null;
  currentPage: number;
  totalPages: number | null;
  getAdvertiserProfile: (id: number) => Promise<void>;
  adsUser: iAds[];
  setAdsUser: Dispatch<SetStateAction<never[]>>;
  editAds: ( payload: iAdsUpdate, id:number) => Promise<void>;
  deleteAds: (id: number) => Promise<void>;
  modalIsOpen: boolean;
  setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  adsVisualization: iAds[] | null,
  setAdsVisualization:React.Dispatch<React.SetStateAction<iAds[] | null>>
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
  user: { id: number; name: string };
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

export interface iAdsUpdate {
  name?: string;
  brand?: string;
  color?: string;
  description?: string;
  year?: number;
  km?: number;
  images?: string[];
  fuel?: string;
  price?: number;
  priceFipe?: number;
}

export interface iAdvertiserProfile {
  user: iUser;
  ads: iAds[];
}

export const AdsContext = createContext({} as iAdsContext);

export const AdsProvider = ({ children }: iAdsProviderProps) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [ads, setAds] = useState<iAds[]>([]);

  const [currentPage, setCurrentPage] = useState<number>(1);

  const [nextPage, setNextPage] = useState<string | null>(null);

  const [previousPage, setPreviousPage] = useState<string | null>(null);

  const [totalPages, setTotalPages] = useState<number | null>(null);

  const [advertiser, setAdvertiser] = useState<iAdvertiserProfile | null>(null);

  const [filterString, setFilterString] = useState("");

  const token = localStorage.getItem("token");

  const [adsUser, setAdsUser] = useState([]);
  const [adsVisualization, setAdsVisualization] = useState<iAds[]|null>([])

  useEffect(() => {
    getAds();
  }, []);

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

  const goToNextPage = async () => {
    if (nextPage) {
      try {
        const response = await api.get(`${nextPage}&${filterString}`);
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
        const response = await api.get(`${previousPage}&${filterString}`);
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
      const response = await api.get(`/advertisement?` + filter);
      console.log(response);
      setAds(response.data.ads);
      setNextPage(response.data.nextPage);
      setPreviousPage(response.data.previousPage);
      setCurrentPage(1);
      setTotalPages(response.data.maxPages);
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
      return response.data.value;
    } catch (error) {
      toast.error("Veículo não encontrado na tabela FIPE");
    }
  };

  const createAds = async (payload: any) => {
    try {
      const newAds = await api.post("/advertisement", payload, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setAdsUser([...adsUser, newAds.data]);
      setModalIsOpen(false);
    } catch (error: any) {
      console.log(error.response.data.message);
      toast.error("error.response.data.message");
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

  const editAds = async (payload: any, id:number) => {
    try {
      console.log(id)
      console.log(payload)

      
      const response = await api.patch(`/advertisement/${id}`, {...payload, id:id}, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log(response,"aqui está editando")
    } catch (error: any) {
      toast(error.response.data.message);
    }
  };

  const deleteAds = async (adsId) => {
    const id = adsId.id;
    try {
      await api.delete(`/advertisement/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
    } catch (error: any) {
      toast(error.response.data.message);
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
        setFilterString,
        filterString,
        adsUser,
        setAdsUser,
        editAds,
        deleteAds,
        modalIsOpen,
        setModalIsOpen,
        adsVisualization, 
        setAdsVisualization
      }}
    >
      {children}
    </AdsContext.Provider>
  );
};
