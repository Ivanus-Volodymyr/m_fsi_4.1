import {axiosService} from "./axiosService";

import {urls} from "../api/urls";

import {GetAllCompaniesResponse} from "../types";

export const companiesService = {
    //get
    getAll: (page: number = 1) => axiosService.get<GetAllCompaniesResponse>(urls.companies, {
        params: {
            page_size: 10,
            page
        }
    }),
}
