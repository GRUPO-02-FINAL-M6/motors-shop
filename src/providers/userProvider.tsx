import React, { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";

interface iUserProviderProps {
  children: React.ReactNode;
}

interface iUserContext {
  user: iUser | null;
  setUser: React.Dispatch<React.SetStateAction<iUser | null>>;
  login: (payload: iLogin) => Promise<void>;
  registerUser: (payload: iRegisterUser) => Promise<void>;
  getMyProfile: () => Promise<void>;
  logout: () => Promise<void>;
  loading: boolean;
  modalIsOpen: boolean | null;
  setModalIsOpen: React.Dispatch<React.SetStateAction<true | null>>;
  brandSelected: string | null;
  setBrandSelected: React.Dispatch<React.SetStateAction<string | null>>;
  globalModelSelected: any;
  setglobalModelSelected: any;
}

export interface iUser {
  id: number;
  name: string;
  email: string;
  contact: string;
  createdAt: string;
  deletedAt: string;
}

interface iLogin {
  email: string;
  password: string;
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
  typeCount: string;
}

export const UserContext = createContext({} as iUserContext);

export const UserProvider = ({ children }: iUserProviderProps) => {
  const [user, setUser] = useState<iUser | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const token: string | null = localStorage.getItem("token");
  const navigate = useNavigate();

  const [modalIsOpen, setModalIsOpen] = useState<null | true>(null);
  const [brandSelected, setBrandSelected] = useState<string | null>(null);
  const [globalModelSelected, setglobalModelSelected] = useState<any>(null);

  useEffect(() => {
    if (!token) {
      setLoading(false);
      return;
    }

    setLoading(false);
  }, []);

  const login = async (payload: iLogin) => {
    try {
      const response = await api.post("/users/login", payload);
      localStorage.setItem("token", response.data.token);
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
      navigate("/");
      getMyProfile();
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  };

  const logout = async () => {
    setUser(null);
    localStorage.clear();
    navigate("/");
    toast.info("Sessão encerrada!");
  };

  const getMyProfile = async () => {
    if (token) {
      try {
        const response = await api.get("/users/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(response.data);
      } catch (error: any) {
        setUser(null);
        localStorage.clear();
        toast.error("Sessão expirada, realize o login novamente.");
      }
    }
  };

  const registerUser = async (payload: any) => {
    try {
      await api.post(`/users`, payload);
      navigate("/login");
    } catch (error: any) {
      toast.error(error.response.data.message);
      console.log(error);
    }
  };

  return (
    <UserContext.Provider
      value={{
        login,
        user,
        setUser,
        registerUser,
        logout,
        loading,
        getMyProfile,
        modalIsOpen,
        setModalIsOpen,
        brandSelected,
        setBrandSelected,
        globalModelSelected,
        setglobalModelSelected,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
