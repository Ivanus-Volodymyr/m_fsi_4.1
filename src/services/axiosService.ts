import axios, {AxiosInstance} from "axios";

import API from "../api/urls";


export const axiosService: AxiosInstance = axios.create({
    baseURL: API,
    withCredentials: false,
});


export const updateHeaderInterceptor = (axiosInstance: AxiosInstance) => {
    axiosInstance.interceptors.request.use((request: any) => {
        const access_token = localStorage.getItem('access_token');
        request.headers = {
            Authorization: `Bearer ${access_token}`,
        };
        return request;
    });
};

updateHeaderInterceptor(axiosService);
