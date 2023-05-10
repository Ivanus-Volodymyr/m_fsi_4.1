import {axiosService} from "./axiosService";

import {urls} from "../api/urls";

import {
    CreateOneCompanyResponse,
    DeleteCompanyResponse,
    GetAllCompaniesResponse,
    GetOneCompanyResponse,
    ICompanyDataToCreate,
    ICompanyDetails,
    UpdateCompanyResponse
} from "../types";

export const companiesService = {
    //get
    getAll: (page: number = 1) => axiosService.get<GetAllCompaniesResponse>(urls.companies, {
        params: {
            page_size: 10,
            page
        }
    }),
    getCompanyById: (companyId: number) => axiosService.get<GetOneCompanyResponse>(urls.company + `${companyId}`),

    //create
    createCompany: (companyData: ICompanyDataToCreate) => axiosService.post<CreateOneCompanyResponse>(urls.company, companyData),


    //update
    updateGeneralInfo: (
        companyData: Partial<ICompanyDetails>,
        companyId: number
    ) => axiosService.put<UpdateCompanyResponse>(urls.company + `${companyId}/update_info`, companyData),

    updateIsVisible: (
        isVisible: Partial<ICompanyDetails>,
        companyId: number,
    ) => axiosService.put<UpdateCompanyResponse>(urls.company + `${companyId}/update_visible`, isVisible),

    updateAvatar: (
        formaData: FormData,
        companyId: number,
    ) => axiosService.put<UpdateCompanyResponse>(urls.company + `${companyId}/update_avatar`, formaData),


    //delete
    deleteCompany: (companyId: number) => axiosService.delete<DeleteCompanyResponse>(urls.company + `${companyId}`),
}
