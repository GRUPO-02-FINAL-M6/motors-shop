import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:3001",
    timeout:3000
})

export const apiFipe = axios.create({
    baseURL: "https://kenzie-kars.herokuapp.com",
    timeout: 5000
})