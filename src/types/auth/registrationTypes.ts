export interface RegistrationValues {
    user_firstname: string;
    user_lastname: string;
    user_email: string;
    user_password: string;
    user_password_repeat: string;
}

export interface IRegistrationResponse {
    status_code: number;
    detail: string;
    result: {
        user_id: number;
    };
}

export interface RegistrationState {
    user_id: null | number;
    loading: boolean;
    error: null | string;
}

export enum RegistrationActionTypes {
    FETCH_REGISTRATION = 'FETCH_REGISTRATION',
    FETCH_REGISTRATION_SUCCESS = 'FETCH_REGISTRATION_SUCCESS',
    FETCH_REGISTRATION_ERROR = 'FETCH_REGISTRATION_ERROR',
}

interface FetchRegistrationAction {
    type: RegistrationActionTypes.FETCH_REGISTRATION
}

interface FetchRegistrationSuccessAction {
    type: RegistrationActionTypes.FETCH_REGISTRATION_SUCCESS
    payload: number
}

interface FetchRegistrationErrorAction {
    type: RegistrationActionTypes.FETCH_REGISTRATION_ERROR
    payload: string;
}

export type RegistrationAction =
    FetchRegistrationAction
    | FetchRegistrationSuccessAction
    | FetchRegistrationErrorAction;
