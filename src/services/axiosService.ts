import axios, {AxiosInstance} from "axios";

import API from "../api/urls";

export const axiosService: AxiosInstance = axios.create({
    baseURL: API,
    withCredentials: false,
})
