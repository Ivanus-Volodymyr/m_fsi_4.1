export interface LoginState {
    access_token: null | string;
    loading_login: boolean;
    error_login: null | string;
}

export enum LoginActionTypes {
    FETCH_LOGIN = 'FETCH_LOGIN',
    FETCH_LOGIN_SUCCESS = 'FETCH_LOGIN_SUCCESS',
    FETCH_LOGIN_ERROR = 'FETCH_LOGIN_ERROR',
}

interface FetchLoginAction {
    type: LoginActionTypes.FETCH_LOGIN
}

interface FetchLoginSuccessAction {
    type: LoginActionTypes.FETCH_LOGIN_SUCCESS
    payload: number
}

interface FetchLoginErrorAction {
    type: LoginActionTypes.FETCH_LOGIN_ERROR
    payload: string;
}

export type LoginAction =
    FetchLoginAction
    | FetchLoginSuccessAction
    | FetchLoginErrorAction;
