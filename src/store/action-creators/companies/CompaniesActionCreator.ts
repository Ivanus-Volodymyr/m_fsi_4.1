import {Dispatch} from "redux";

import {CompaniesAction, CompaniesType, ICompanyDataToCreate, ICompanyDetails} from "../../../types";
import {companiesService} from "../../../services/companiesService";

export const fetchAllCompanies = (page: number) => {
    return async (dispatch: Dispatch<CompaniesType>): Promise<void> => {
        try {
            dispatch({type: CompaniesAction.FETCH_COMPANIES});
            const {data} = await companiesService.getAll(page);
            dispatch({
                type: CompaniesAction.FETCH_COMPANIES_SUCCESS, payload: {
                    companies: data.result.companies,
                    pagination: data.result.pagination,
                }
            })
        } catch (e: any) {
            dispatch({
                type: CompaniesAction.FETCH_COMPANIES_ERROR,
                payload: e.response.data.detail
            })
        }
    }
}

export const fetchOneCompany = (companyId: number) => {
    return async (dispatch: Dispatch<CompaniesType>): Promise<void> => {
        try {
            dispatch({type: CompaniesAction.FETCH_ONE_COMPANY});
            const {data} = await companiesService.getCompanyById(companyId);
            dispatch({type: CompaniesAction.FETCH_ONE_COMPANY_SUCCESS, payload: data.result})
        } catch (e: any) {
            dispatch({
                type: CompaniesAction.FETCH_ONE_COMPANY_ERROR,
                payload: e.response.data.detail,
            })
        }
    }
}

export const createOneCompany = (companyData: ICompanyDataToCreate) => {
    return async (dispatch: Dispatch<CompaniesType>): Promise<void> => {
        try {
            dispatch({type: CompaniesAction.CREATE_COMPANY});
            const {data} = await companiesService.createCompany(companyData);
            dispatch({type: CompaniesAction.CREATE_COMPANY_SECCESS, payload: data.result.company_id});
        } catch (e: any) {
            dispatch({
                type: CompaniesAction.CREATE_COMPANY_ERROR,
                payload: e.response.data.detail,
            })
        }
    }
}


export const updateGeneralInfo = (dataToUpdate: Partial<ICompanyDetails>, companyId: number) => {
    return async (dispatch: Dispatch<CompaniesType>): Promise<void> => {
        try {
            dispatch({type: CompaniesAction.UPDATE_COMPANY});
            const {data} = await companiesService.updateGeneralInfo(dataToUpdate, companyId);
            if (data.detail === 'ok') {
                dispatch({type: CompaniesAction.UPDATE_COMPANY_SUCCESS, payload: data.result.company_id});
            }
        } catch (e: any) {
            dispatch({
                type: CompaniesAction.UPDATE_COMPANY_ERROR,
                payload: e.response.data.detail,
            })
        }
    }
}

export const updateVisible = (dataToUpdate: Partial<ICompanyDetails>, companyId: number) => {
    return async (dispatch: Dispatch<CompaniesType>): Promise<void> => {
        try {
            dispatch({type: CompaniesAction.UPDATE_COMPANY});
            const {data} = await companiesService.updateIsVisible(dataToUpdate, companyId);
            if (data.detail === 'ok') {
                dispatch({type: CompaniesAction.UPDATE_COMPANY_SUCCESS, payload: data.result.company_id});
            }
        } catch (e: any) {
            dispatch({
                type: CompaniesAction.UPDATE_COMPANY_ERROR,
                payload: e.response.data.detail,
            });
        }
    }
}


export const updateAvatar = (dataToUpdate: FormData, companyId: number) => {
    return async (dispatch: Dispatch<CompaniesType>): Promise<void> => {
        try {
            dispatch({type: CompaniesAction.UPDATE_COMPANY});
            const {data} = await companiesService.updateAvatar(dataToUpdate, companyId);
            if (data.detail === 'ok') {
                dispatch({type: CompaniesAction.UPDATE_COMPANY_SUCCESS, payload: companyId});
            }
        } catch (e: any) {
            dispatch({
                type: CompaniesAction.UPDATE_COMPANY_ERROR,
                payload: e.response.data.detail,
            });
        }
    }
}


export const deleteCompany = (companyId: number) => {
    return async (dispatch: Dispatch<CompaniesType>): Promise<void> => {
        try {
            dispatch({type: CompaniesAction.DELETE_COMPANY, payload: false});
            const {data} = await companiesService.deleteCompany(companyId);
            if (data.detail === 'company was deleted') {
                dispatch({type: CompaniesAction.DELETE_COMPANY_SUCCESS, payload: true})
            }
        } catch (e: any) {
            dispatch({
                type: CompaniesAction.DELETE_COMPANY_ERROR,
                payload: e.response.data.detail,
            })
        }
    }
}
