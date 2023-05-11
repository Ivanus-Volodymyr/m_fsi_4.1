import {GeneralResponse} from "../response/responseTypes";
import {IProfile} from "../profile/profileTypes";

interface CompanyUsers extends IProfile {
    action_id: number,
    action: string;
}


export interface ICompanyDataResponse extends GeneralResponse {
    result: {
        users: CompanyUsers[],
    },
}

export interface ICompanyDataInitialState {
    members: CompanyUsers[] | [],
    invites: CompanyUsers[] | [],
    requests: CompanyUsers[] | [],
    loading: boolean,
    error: string | null,
}


export enum CompanyDataAction {
    //members
    FETCH_MEMBERS = 'FETCH_MEMBERS',
    FETCH_MEMBERS_SECCESS = 'FETCH_MEMBERS_SECCESS',
    FETCH_MEMBERS_ERROR = 'FETCH_MEMBERS_ERROR',

    //invites
    FETCH_INVITES = 'FETCH_INVITES',
    FETCH_INVITES_SECCESS = 'FETCH_INVITES_SECCESS',
    FETCH_INVITES_ERROR = 'FETCH_INVITES_ERROR',

    //requests
    FETCH_REQUESTS = 'FETCH_REQUESTS',
    FETCH_REQUESTS_SUCCESS = 'FETCH_REQUESTS_SUCCESS',
    FETCH_REQUESTS_ERROR = 'FETCH_REQUESTS_ERROR',
}

interface FetchMembers {
    type: CompanyDataAction.FETCH_MEMBERS,
}

interface FetchMembersSuccess {
    type: CompanyDataAction.FETCH_MEMBERS_SECCESS,
    payload: CompanyUsers[],
}

interface FetchMembersError {
    type: CompanyDataAction.FETCH_MEMBERS_ERROR,
    payload: string,
}

interface FetchInvites {
    type: CompanyDataAction.FETCH_INVITES,
}

interface FetchInvitesSuccess {
    type: CompanyDataAction.FETCH_INVITES_SECCESS,
    payload: CompanyUsers[],
}

interface FetchInvitesError {
    type: CompanyDataAction.FETCH_INVITES_ERROR,
    payload: string,
}

interface FetchRequests {
    type: CompanyDataAction.FETCH_REQUESTS,
}

interface FetchRequestsSuccess {
    type: CompanyDataAction.FETCH_REQUESTS_SUCCESS,
    payload: CompanyUsers[],
}

interface FetchRequestsError {
    type: CompanyDataAction.FETCH_REQUESTS_ERROR,
    payload: string,
}

export type CompaniesDataType =
    | FetchMembers
    | FetchMembersSuccess
    | FetchMembersError
    | FetchInvites
    | FetchInvitesSuccess
    | FetchInvitesError
    | FetchRequests
    | FetchRequestsSuccess
    | FetchRequestsError
