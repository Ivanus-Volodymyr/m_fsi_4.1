import {Dispatch} from "redux";

import {CompaniesDataType, CompanyDataAction} from "../../../types";
import {companyDataService} from "../../../services";


export const fetchMembers = (companyId: number) => {
    return async (dispatch: Dispatch<CompaniesDataType>): Promise<void> => {
        try {
            dispatch({type: CompanyDataAction.FETCH_MEMBERS});
            const {data} = await companyDataService.membersList(companyId);
            dispatch({type: CompanyDataAction.FETCH_MEMBERS_SECCESS, payload: data.result.users})
        } catch (e: any) {
            dispatch({
                type: CompanyDataAction.FETCH_MEMBERS_ERROR,
                payload: e.response.data.detail,
            })
        }
    }
}

export const fetchInvites = (companyId: number) => {
    return async (dispatch: Dispatch<CompaniesDataType>): Promise<void> => {
        try {
            dispatch({type: CompanyDataAction.FETCH_INVITES});
            const {data} = await companyDataService.invitesList(companyId);
            dispatch({type: CompanyDataAction.FETCH_INVITES_SECCESS, payload: data.result.users})
        } catch (e: any) {
            dispatch({
                type: CompanyDataAction.FETCH_INVITES_ERROR,
                payload: e.response.data.detail,
            })
        }
    }
}


export const fetchRequests = (companyId: number) => {
    return async (dispatch: Dispatch<CompaniesDataType>): Promise<void> => {
        try {
            dispatch({type: CompanyDataAction.FETCH_REQUESTS});
            const {data} = await companyDataService.requestList(companyId);
            dispatch({type: CompanyDataAction.FETCH_REQUESTS_SUCCESS, payload: data.result.users});
        } catch (e: any) {
            dispatch({
                type: CompanyDataAction.FETCH_REQUESTS_ERROR,
                payload: e.response.data.detail,
            })
        }
    }
}
