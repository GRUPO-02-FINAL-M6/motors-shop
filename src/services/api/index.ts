import axios from "axios";

export const api = axios.create({
    baseURL: "https://motors-shop-api-xigc.onrender.com",
    timeout:5000
})

export const apiFipe = axios.create({
    baseURL: "https://kenzie-kars.herokuapp.com",
    timeout: 5000
})