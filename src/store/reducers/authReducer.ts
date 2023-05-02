import {
    LoginAction,
    LoginActionTypes,
    LoginState,
    RegistrationAction,
    RegistrationActionTypes,
    RegistrationState
} from "../../types";

const RegistrationInitialState: RegistrationState = {
    user_id: null,
    loading: false,
    error: null,
}

const LoginInitialState: LoginState = {
    access_token: null,
    loading_login: false,
    error_login: null,
}

export const registrationReducer = (state = RegistrationInitialState, action: RegistrationAction) => {
    switch (action.type) {
        case RegistrationActionTypes.FETCH_REGISTRATION:
            return {...state, loading: true}
        case RegistrationActionTypes.FETCH_REGISTRATION_SUCCESS:
            return {...state, user_id: action.payload, loading: false}
        case RegistrationActionTypes.FETCH_REGISTRATION_ERROR:
            return {...state, loading: false, error: action.payload}
        default:
            return state;
    }
}


export const loginReducer = (state = LoginInitialState, action: LoginAction) => {
    switch (action.type) {
        case LoginActionTypes.FETCH_LOGIN:
            return {...state, loading_login: true}
        case LoginActionTypes.FETCH_LOGIN_SUCCESS:
            return {...state, loading_login: false, access_token: action.payload}
        case LoginActionTypes.FETCH_LOGIN_ERROR:
            return {...state, loading_login: false, access_token: null, error_login: action.payload}
        default:
            return state
    }

}
