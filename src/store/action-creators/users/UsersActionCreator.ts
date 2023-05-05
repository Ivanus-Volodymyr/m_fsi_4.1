import {Dispatch} from "redux";

import {
    FormUpdateGeneralInfoValues,
    FormUpdatePasswordValues,
    UserAction,
    UserActionTypes,
    UserState
} from "../../../types";
import {usersService} from "../../../services";

export const fetchUsers = (page: number) => {
    return async (dispatch: Dispatch<UserAction>): Promise<void> => {
        try {
            dispatch({type: UserActionTypes.FETCH_USERS})
            const {data} = await usersService.getUsers(page);
            dispatch({
                type: UserActionTypes.FETCH_USERS_SUCCESS,
                payload: {users: data.result.users, pagination: data.result.pagination}
            })
        } catch (e: any) {
            dispatch({
                type: UserActionTypes.FETCH_USERS_ERROR,
                payload: e.response.data.detail
            })
        }
    }
}


export const fetchOneUser = (userId: number) => {
    return async (dispatch: Dispatch<UserAction>): Promise<void> => {
        try {
            dispatch({type: UserActionTypes.FETCH_ONE_USER});
            const {data} = await usersService.getUserById(userId);
            dispatch({type: UserActionTypes.FETCH_ONE_USER_SUCCESS, payload: data.result})
        } catch (e: any) {
            dispatch({
                type: UserActionTypes.FETCH_ONE_USER_ERROR,
                payload: e.response.data.detail
            })
        }
    }
}


export const updateUserGeneralInfo = (userId: number, userData: FormUpdateGeneralInfoValues) => {
    return async (dispatch: Dispatch<UserAction>, getState: UserState): Promise<void> => {
        try {
            dispatch({type: UserActionTypes.UPDATE_ONE_USER_GENERAL});
            const {data} = await usersService.userUpdateInfo(userId, userData);
            if (data.status_code === 200) {
                dispatch({type: UserActionTypes.UPDATE_ONE_USER_GENERAL_SUCCESS, payload: true})
            }
            getState.isUserUpdated = false;
        } catch (e: any) {
            dispatch({
                type: UserActionTypes.UPDATE_ONE_USER_GENERAL_ERROR,
                payload: e.response.data.detail,
            })
        }
    }
}


export const updateUserPassword = (userId: number, userData: FormUpdatePasswordValues) => {
    return async (dispatch: Dispatch<UserAction>, getState: UserState): Promise<void> => {
        try {
            dispatch({type: UserActionTypes.UPDATE_ONE_USER_PASSWORD});
            const {data} = await usersService.userUpdatePassword(userId, userData);
            if (data.status_code === 200) {
                dispatch({type: UserActionTypes.UPDATE_ONE_USER_PASSWORD_SUCCESS, payload: true})
            }
            getState.isUserUpdated = false;
        } catch (e: any) {
            dispatch({
                type: UserActionTypes.UPDATE_ONE_USER_PASSWORD_ERROR,
                payload: e.response.data.detail,
            })
        }
    }
}


export const updateUserAvatar = (userId: number, file: FormData) => {
    return async (dispatch: Dispatch<UserAction>, getState: UserState): Promise<void> => {
        try {
            dispatch({type: UserActionTypes.UPDATE_ONE_USER_AVATAR});
            const {data} = await usersService.updateUserAvatar(userId, file);
            if (data.status_code === 200) {
                dispatch({type: UserActionTypes.UPDATE_ONE_USER_AVATAR_SUCCESS, payload: true})
            }
            getState.isUserUpdated = false;
        } catch (e: any) {
            dispatch({
                type: UserActionTypes.UPDATE_ONE_USER_AVATAR_ERROR,
                payload: e.response.data.detail,
            })
        }
    }
}


export const deleteUser = (userId: number) => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({type: UserActionTypes.DELETE_ONE_USER});
            const {data} = await usersService.deleteUser(userId);
            if (data.status_code === 204) {
                dispatch({type: UserActionTypes.DELETE_ONE_USER_SUCCESS})
            }
        } catch (e: any) {
            dispatch({
                type: UserActionTypes.DELETE_ONE_USER_ERROR,
                payload: e.response.data.detail,
            })
        }
    }
}
