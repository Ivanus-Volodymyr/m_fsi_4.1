import {IPagination} from "../users/usersTypes";
import {GeneralResponse} from "../response/responseTypes";
import {IProfile} from "../profile/profileTypes";

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
    company_links: string[] | null;
    company_owner: Partial<IProfile>;
}

export interface GetAllCompaniesResponse extends GeneralResponse {
    result: {
        companies: ICompany[];
        pagination: IPagination;
    }
}

export interface GetOneCompanyResponse extends GeneralResponse {
    result: ICompanyDetails;
}

export interface CreateOneCompanyResponse extends GeneralResponse {
    result: {
        company_id: number;
    }
}

export type UpdateCompanyResponse = CreateOneCompanyResponse;

export interface DeleteCompanyResponse extends GeneralResponse {
    result: null
}

export interface ICompaniesInitialState {
    companies: ICompany[] | [],
    pagination: IPagination | null,
    loading: boolean,
    error: string | null,
    oneCompany: ICompanyDetails | null
    oneCompanyLoading: boolean,
    oneCompanyError: null | string,
    oneCompanyId: null | number,
    isUpdatedCompany: boolean,
    isDeletedCompany: boolean
}

export enum CompaniesAction {
    CLEAR_ONE_COMPANY_STATE = 'CLEAR_ONE_COMPANY_STATE',

    FETCH_COMPANIES = 'FETCH_COMPANIES',
    FETCH_COMPANIES_SUCCESS = 'FETCH_COMPANIES_SUCCESS',
    FETCH_COMPANIES_ERROR = 'FETCH_COMPANIES_ERROR',

    FETCH_ONE_COMPANY = 'FETCH_ONE_COMPANY',
    FETCH_ONE_COMPANY_SUCCESS = 'FETCH_ONE_COMPANY_SUCCESS',
    FETCH_ONE_COMPANY_ERROR = 'FETCH_ONE_COMPANY_ERROR',

    CREATE_COMPANY = 'CREATE_COMPANY',
    CREATE_COMPANY_SECCESS = 'CREATE_COMPANY_SECCESS',
    CREATE_COMPANY_ERROR = 'CREATE_COMPANY_ERROR',

    UPDATE_COMPANY = 'UPDATE_COMPANY',
    UPDATE_COMPANY_SUCCESS = 'UPDATE_COMPANY_SUCCESS',
    UPDATE_COMPANY_ERROR = 'UPDATE_COMPANY_ERROR',

    DELETE_COMPANY = 'DELETE_COMPANY',
    DELETE_COMPANY_SUCCESS = 'DELETE_COMPANY_SUCCESS',
    DELETE_COMPANY_ERROR = 'DELETE_COMPANY_ERROR',
}


interface ClearOneCompanyState {
    type: CompaniesAction.CLEAR_ONE_COMPANY_STATE,
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


interface CreateCompany {
    type: CompaniesAction.CREATE_COMPANY,
}

interface CreateOneCompanySuccess {
    type: CompaniesAction.CREATE_COMPANY_SECCESS,
    payload: number,
}

interface CreateCompanyError {
    type: CompaniesAction.CREATE_COMPANY_ERROR,
    payload: string,
}

interface UpdateCompany {
    type: CompaniesAction.UPDATE_COMPANY
}

interface UpdateCompanySuccess {
    type: CompaniesAction.UPDATE_COMPANY_SUCCESS,
    payload: number,
}

interface UpdateCompanyError {
    type: CompaniesAction.UPDATE_COMPANY_ERROR,
    payload: string,
}


interface DeleteCompany {
    type: CompaniesAction.DELETE_COMPANY,
    payload: boolean;
}

interface DeleteCompanySuccess {
    type: CompaniesAction.DELETE_COMPANY_SUCCESS,
    payload: boolean;
}

interface DeleteCompanyError {
    type: CompaniesAction.DELETE_COMPANY_ERROR,
    payload: string,
}

export type CompaniesType =
    ClearOneCompanyState
    | FetchCompanies
    | FetchCompaniesSuccess
    | FetchCompaniesError
    | FetchOneCompany
    | FetchOneCompanySuccess
    | FetchOneCompanyError
    | CreateCompany
    | CreateOneCompanySuccess
    | CreateCompanyError
    | UpdateCompany
    | UpdateCompanySuccess
    | UpdateCompanyError
    | DeleteCompany
    | DeleteCompanySuccess
    | DeleteCompanyError
