import {UserDataAction, UserDataInitialState, UserDataType} from "../../types";

const userDataInitialState: UserDataInitialState = {
    companies: [],
    invites: [],
    requests: [],
    loading: false,
    error: null,
}

export const userDataReducer = (state: UserDataInitialState = userDataInitialState, action: UserDataType): UserDataInitialState => {
    switch (action.type) {
        case UserDataAction.FETCH_COMPANIES:
            return {...state, loading: true, error: null, companies: []}
        case UserDataAction.FETCH_COMPANIES_SUCCESS:
            return {...state, loading: false, error: null, companies: action.payload}
        case UserDataAction.FETCH_COMPANIES_ERROR:
            return {...state, loading: false, error: action.payload, companies: []}

        case UserDataAction.FETCH_INVITES:
            return {...state, loading: true, error: null, invites: []}
        case UserDataAction.FETCH_INVITES_SECCESS:
            return {...state, loading: false, error: null, invites: action.payload}
        case UserDataAction.FETCH_INVITES_ERROR:
            return {...state, loading: false, error: action.payload, invites: []}

        case UserDataAction.FETCH_REQUESTS:
            return {...state, loading: true, error: null, requests: []}
        case UserDataAction.FETCH_REQUESTS_SUCCESS:
            return {...state, loading: false, error: null, requests: action.payload}
        case UserDataAction.FETCH_REQUESTS_ERROR:
            return {...state, loading: false, error: action.payload, requests: []}

        default :
            return state;

    }
}
