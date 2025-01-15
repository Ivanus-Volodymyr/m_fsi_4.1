import {IProfile} from "../profile/profileTypes";

export interface IFetchUsersResponse {
    status_code: number;
    detail: string;
    result: {
        users: IProfile[];
        pagination: IPagination;
    }
}

export interface IPagination {
    current_page: number
    total_page: number,
    total_results: number,
}

export interface UserState {
    users: IProfile[] | [];
    pagination: IPagination | null;
    loading: boolean;
    error: null | string;
    oneUser: IProfile | null;
    oneUserLoading: boolean;
    isUserUpdated: boolean;
    oneUserError: string | null;
    isUserDeleted: boolean;
}

export enum UserActionTypes {
    FETCH_USERS = 'FETCH_USERS',
    FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
    FETCH_USERS_ERROR = 'FETCH_USERS_FETCH_USERS_ERROR',

    FETCH_ONE_USER = 'FETCH_ONE_USER',
    FETCH_ONE_USER_SUCCESS = 'FETCH_ONE_USER_SUCCESS',
    FETCH_ONE_USER_ERROR = 'FETCH_ONE_USER_ERROR',

    DELETE_ONE_USER = 'DELETE_ONE_USER',
    DELETE_ONE_USER_SUCCESS = 'DELETE_ONE_USER_SUCCESS',
    DELETE_ONE_USER_ERROR = 'DELETE_ONE_USER_ERROR',

    UPDATE_ONE_USER_GENERAL = 'UPDATE_ONE_USER_GENERAL',
    UPDATE_ONE_USER_GENERAL_SUCCESS = 'UPDATE_ONE_USER_GENERAL_SUCCESS',
    UPDATE_ONE_USER_GENERAL_ERROR = 'UPDATE_ONE_USER_GENERAL_ERROR',

    UPDATE_ONE_USER_PASSWORD = 'UPDATE_ONE_USER_PASSWORD',
    UPDATE_ONE_USER_PASSWORD_SUCCESS = 'UPDATE_ONE_USER_PASSWORD_SUCCESS',
    UPDATE_ONE_USER_PASSWORD_ERROR = 'UPDATE_ONE_USER_PASSWORD_ERROR',

    UPDATE_ONE_USER_AVATAR = 'UPDATE_ONE_USER_AVATAR',
    UPDATE_ONE_USER_AVATAR_SUCCESS = 'UPDATE_ONE_USER_AVATAR_SUCCESS',
    UPDATE_ONE_USER_AVATAR_ERROR = 'UPDATE_ONE_USER_AVATAR_ERROR',

    CLEAR_UPDATED = 'CLEAR_UPDATED',
}

interface FetchUsersAction {
    type: UserActionTypes.FETCH_USERS;
}

interface FetchUsersSuccessAction {
    type: UserActionTypes.FETCH_USERS_SUCCESS;
    payload: {
        users: IProfile[],
        pagination: IPagination;
    }
}

interface FetchUsersErrorAction {
    type: UserActionTypes.FETCH_USERS_ERROR;
    payload: string;
}

interface FetchOneUserAction {
    type: UserActionTypes.FETCH_ONE_USER;
}

interface FetchOneUserSuccessAction {
    type: UserActionTypes.FETCH_ONE_USER_SUCCESS;
    payload: IProfile;
}

interface FetchOneUserErrorAction {
    type: UserActionTypes.FETCH_ONE_USER_ERROR;
    payload: string;
}

//delete user
interface DeleteOneUserAction {
    type: UserActionTypes.DELETE_ONE_USER,
}

interface DeleteOneUserActionSuccess {
    type: UserActionTypes.DELETE_ONE_USER_SUCCESS,
}

interface DeleteOneUserActionError {
    type: UserActionTypes.DELETE_ONE_USER_ERROR,
    payload: string;
}

//update user
interface UpdateUserGeneralInfo {
    type: UserActionTypes.UPDATE_ONE_USER_GENERAL
}

interface UpdateUserGeneralInfoSuccess {
    type: UserActionTypes.UPDATE_ONE_USER_GENERAL_SUCCESS
    payload: boolean
}

interface UpdateUserGeneralInfoError {
    type: UserActionTypes.UPDATE_ONE_USER_GENERAL_ERROR
    payload: string,
}

interface UpdateUserPassword {
    type: UserActionTypes.UPDATE_ONE_USER_PASSWORD
}

interface UpdateUserPasswordSuccess {
    type: UserActionTypes.UPDATE_ONE_USER_PASSWORD_SUCCESS
    payload: boolean
}

interface UpdateUserPasswordError {
    type: UserActionTypes.UPDATE_ONE_USER_PASSWORD_ERROR
    payload: string,
}

interface UpdateUserAvatar {
    type: UserActionTypes.UPDATE_ONE_USER_AVATAR
}

interface UpdateUserAvatarSuccess {
    type: UserActionTypes.UPDATE_ONE_USER_AVATAR_SUCCESS
    payload: boolean
}

interface UpdateUserAvatarError {
    type: UserActionTypes.UPDATE_ONE_USER_AVATAR_ERROR
    payload: string,
}

interface ClearUpdated {
    type: UserActionTypes.CLEAR_UPDATED,
}


export type UserAction =
    FetchUsersAction
    | FetchUsersErrorAction
    | FetchUsersSuccessAction
    | FetchOneUserAction
    | FetchOneUserSuccessAction
    | FetchOneUserErrorAction
    | DeleteOneUserAction
    | DeleteOneUserActionSuccess
    | DeleteOneUserActionError
    | UpdateUserGeneralInfo
    | UpdateUserGeneralInfoSuccess
    | UpdateUserGeneralInfoError
    | UpdateUserPassword
    | UpdateUserPasswordSuccess
    | UpdateUserPasswordError
    | UpdateUserAvatar
    | UpdateUserAvatarSuccess
    | UpdateUserAvatarError
    | ClearUpdated
