import {IPagination} from "../users/usersTypes";

export interface ICompany {
    company_id: number,
    company_name: string,
    company_title: string,
    company_avatar: null | string,
    is_visible: boolean
}


export interface GetAllCompaniesResponse {
    status_code: number
    detail: string;
    result: {
        companies: ICompany[];
        pagination: IPagination;
    }
}

export interface ICompaniesInitialState {
    companies: ICompany[] | [],
    pagination: IPagination | null,
    loading: boolean,
    error: string | null,
}

export enum CompaniesAction {
    FETCH_COMPANIES = 'FETCH_COMPANIES',
    FETCH_COMPANIES_SUCCESS = 'FETCH_COMPANIES_SUCCESS',
    FETCH_COMPANIES_ERROR = 'FETCH_COMPANIES_ERROR',
}


interface FetchCompanies {
    type: CompaniesAction.FETCH_COMPANIES,
}

interface FetchCompaniesSuccess {
    type: CompaniesAction.FETCH_COMPANIES_SUCCESS,
    payload: {
        companies: ICompany[],
        pagination: IPagination,
    }
}

interface FetchCompaniesError {
    type: CompaniesAction.FETCH_COMPANIES_ERROR,
    payload: string,
}


export type CompaniesType =
    FetchCompanies
    | FetchCompaniesSuccess
    | FetchCompaniesError
