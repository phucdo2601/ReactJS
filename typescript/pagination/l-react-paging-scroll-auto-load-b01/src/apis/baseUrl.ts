import axios from "axios"

const API_BASE_URL = `https://localhost:7048/`;

export const basicApiUrl = () => {
    const instance = axios.create({
        baseURL: API_BASE_URL + `api/`,
        timeout: 10000,
    });

    return instance;
}