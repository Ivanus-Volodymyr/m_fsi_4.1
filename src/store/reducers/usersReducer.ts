import {UserAction, UserActionTypes, UserState} from "../../types";

const initialState: UserState = {
    users: [],
    loading: false,
    error: null,
    oneUser: null,
}

export const usersReducer = (state = initialState, action: UserAction): UserState => {
    switch (action.type) {
        case UserActionTypes.FETCH_USERS:
            return {oneUser: null, loading: true, error: null, users: []}
        case UserActionTypes.FETCH_USERS_SUCCESS:
            return {oneUser: null, loading: false, error: null, users: action.payload}
        case UserActionTypes.FETCH_USERS_ERROR:
            return {oneUser: null, loading: false, error: action.payload, users: []}

        case UserActionTypes.FETCH_ONE_USER:
            return {...state, loading: true, oneUser: null}
        case UserActionTypes.FETCH_ONE_USER_SUCCESS:
            return {...state, loading: false, oneUser: action.payload}
        case UserActionTypes.FETCH_ONE_USER_ERROR:
            return {...state, loading: false, oneUser: null, error: action.payload}

        default:
            return state
    }
}
