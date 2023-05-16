import {ICompany} from "../companies/companiesTypes";
import {GeneralResponse} from "../response/responseTypes";

export interface UserCompany extends ICompany {
    action_id?: number,
    action?: string;
}

export interface UserDataResponse extends GeneralResponse {
    result: {
        companies: UserCompany[],
    }
}

export interface UserDataInitialState {
    companies: UserCompany[] | [];
    invites: UserCompany[] | [];
    requests: UserCompany[] | [];
    loading: boolean;
    error: string | null;
}

export enum UserDataAction {
    //companies
    FETCH_COMPANIES = 'FETCH_COMPANIES',
    FETCH_COMPANIES_SUCCESS = 'FETCH_COMPANIES_SUCCESS',
    FETCH_COMPANIES_ERROR = 'FETCH_COMPANIES_ERROR',

    //invites
    FETCH_INVITES = 'FETCH_INVITES',
    FETCH_INVITES_SECCESS = 'FETCH_INVITES_SECCESS',
    FETCH_INVITES_ERROR = 'FETCH_INVITES_ERROR',

    //requests
    FETCH_REQUESTS = 'FETCH_REQUESTS',
    FETCH_REQUESTS_SUCCESS = 'FETCH_REQUESTS_SUCCESS',
    FETCH_REQUESTS_ERROR = 'FETCH_REQUESTS_ERROR',
}

interface FetchCompanies {
    type: UserDataAction.FETCH_COMPANIES,
}

interface FetchCompaniesSuccess {
    type: UserDataAction.FETCH_COMPANIES_SUCCESS,
    payload: UserCompany[],
}

interface FetchCompaniesError {
    type: UserDataAction.FETCH_COMPANIES_ERROR,
    payload: string,
}

interface FetchInvites {
    type: UserDataAction.FETCH_INVITES,
}

interface FetchInvitesSuccess {
    type: UserDataAction.FETCH_INVITES_SECCESS,
    payload: UserCompany[],
}

interface FetchInvitesError {
    type: UserDataAction.FETCH_INVITES_ERROR,
    payload: string,
}

interface FetchRequests {
    type: UserDataAction.FETCH_REQUESTS,
}

interface FetchRequestsSuccess {
    type: UserDataAction.FETCH_REQUESTS_SUCCESS,
    payload: UserCompany[],
}

interface FetchRequestsError {
    type: UserDataAction.FETCH_REQUESTS_ERROR,
    payload: string,
}


export type UserDataType =
    FetchCompanies
    | FetchCompaniesSuccess
    | FetchCompaniesError
    | FetchInvites
    | FetchInvitesSuccess
    | FetchInvitesError
    | FetchRequests
    | FetchRequestsSuccess
    | FetchRequestsError
