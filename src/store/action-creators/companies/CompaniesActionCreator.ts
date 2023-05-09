import {Dispatch} from "redux";

import {CompaniesAction, CompaniesType} from "../../../types";
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
