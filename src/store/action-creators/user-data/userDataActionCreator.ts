import {Dispatch} from "redux";

import {UserDataAction, UserDataType} from "../../../types";
import {userDataService} from "../../../services";

export const fetchUserCompanies = (userId: number) => {
    return async (dispatch: Dispatch<UserDataType>): Promise<void> => {
        try {
            dispatch({type: UserDataAction.FETCH_COMPANIES});
            const {data} = await userDataService.companiesList(userId);
            dispatch({type: UserDataAction.FETCH_COMPANIES_SUCCESS, payload: data.result.companies});
        } catch (e: any) {
            dispatch({
                type: UserDataAction.FETCH_COMPANIES_ERROR,
                payload: e.response.data.detail,
            })
        }
    }
};


export const fetchUserInvites = (userId: number) => {
    return async (dispatch: Dispatch<UserDataType>): Promise<void> => {
        try {
            dispatch({type: UserDataAction.FETCH_INVITES});
            const {data} = await userDataService.invitesList(userId);
            dispatch({type: UserDataAction.FETCH_INVITES_SECCESS, payload: data.result.companies});
        } catch (e: any) {
            dispatch({
                type: UserDataAction.FETCH_INVITES_ERROR,
                payload: e.response.data.detail,
            })
        }

    }
};


export const fetchUserRequests = (userId: number) => {
    return async (dispatch: Dispatch<UserDataType>): Promise<void> => {
        try {
            dispatch({type: UserDataAction.FETCH_REQUESTS});
            const {data} = await userDataService.requestsList(userId);
            dispatch({type: UserDataAction.FETCH_REQUESTS_SUCCESS, payload: data.result.companies});
        } catch (e: any) {
            dispatch({
                type: UserDataAction.FETCH_REQUESTS_ERROR,
                payload: e.response.data.detail,
            })
        }
    }
}
