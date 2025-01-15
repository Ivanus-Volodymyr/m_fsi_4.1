export interface IGetProfileResponse {
    status_code: number;
    detail: string;
    result: IProfile;
}

export interface IProfile {
    user_id: number;
    user_email: string;
    user_firstname: string;
    user_lastname: string;
    user_avatar: null | string;
    user_status: null | string;
    user_city: null | string;
    user_phone: null | string | number;
    user_links: null | string[];
    is_superuser: boolean;
}


export interface ProfileState {
    user: null | IProfile;
    isAuth: boolean;
    loading: boolean;
    error: null | string;
    canIGetProfile: boolean;
}

export enum ProfileActionTypes {
    LOGOUT = 'LOGOUT',

    CAN_I_GET_PROFILE = 'CAN_I_GET_PROFILE',

    FETCH_PROFILE = 'FETCH_PROFILE',
    FETCH_PROFILE_SUCCESS = 'FETCH_PROFILE_SUCCESS',
    FETCH_PROFILE_ERROR = 'FETCH_PROFILE_ERROR',
}

interface Logout {
    type: ProfileActionTypes.LOGOUT,
}

interface CanIGetProfile {
    type: ProfileActionTypes.CAN_I_GET_PROFILE,
}

interface FetchProfileAction {
    type: ProfileActionTypes.FETCH_PROFILE
}

interface FetchProfileSuccessAction {
    type: ProfileActionTypes.FETCH_PROFILE_SUCCESS
    payload: IProfile
}

interface FetchProfileErrorAction {
    type: ProfileActionTypes.FETCH_PROFILE_ERROR
    payload: string;
}

export type ProfileAction =
    Logout
    | FetchProfileAction
    | FetchProfileSuccessAction
    | FetchProfileErrorAction
    | CanIGetProfile
