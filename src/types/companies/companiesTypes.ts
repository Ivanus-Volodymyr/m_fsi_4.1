import {IPagination} from "../users/usersTypes";

export interface ICompanyDataToCreate {
    company_name: string;
    is_visible: boolean;
}

export interface ICompany {
    company_id: number,
    company_name: string,
    company_title: string | null,
    company_avatar: null | string,
    is_visible: boolean
}

export interface ICompanyDetails extends ICompany {
    company_description: string | null;
    company_city: string | null;
    company_phone: string | null;
    company_links: string[] | null
}

export interface GetAllCompaniesResponse {
    status_code: number
    detail: string;
    result: {
        companies: ICompany[];
        pagination: IPagination;
    }
}

export interface GetOneCompanyResponse {
    status_code: number
    detail: string;
    result: ICompanyDetails;
}

export interface ICompaniesInitialState {
    companies: ICompany[] | [],
    pagination: IPagination | null,
    loading: boolean,
    error: string | null,
    oneCompany: ICompanyDetails | null
    oneCompanyLoading: boolean,
    oneCompanyError: null | string,
}

export enum CompaniesAction {
    FETCH_COMPANIES = 'FETCH_COMPANIES',
    FETCH_COMPANIES_SUCCESS = 'FETCH_COMPANIES_SUCCESS',
    FETCH_COMPANIES_ERROR = 'FETCH_COMPANIES_ERROR',

    FETCH_ONE_COMPANY = 'FETCH_ONE_COMPANY',
    FETCH_ONE_COMPANY_SUCCESS = 'FETCH_ONE_COMPANY_SUCCESS',
    FETCH_ONE_COMPANY_ERROR = 'FETCH_ONE_COMPANY_ERROR',
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

interface FetchOneCompany {
    type: CompaniesAction.FETCH_ONE_COMPANY,
}

interface FetchOneCompanySuccess {
    type: CompaniesAction.FETCH_ONE_COMPANY_SUCCESS,
    payload: ICompanyDetails,
}

interface FetchOneCompanyError {
    type: CompaniesAction.FETCH_ONE_COMPANY_ERROR,
    payload: string,
}


export type CompaniesType =
    FetchCompanies
    | FetchCompaniesSuccess
    | FetchCompaniesError
    | FetchOneCompany
    | FetchOneCompanySuccess
    | FetchOneCompanyError
