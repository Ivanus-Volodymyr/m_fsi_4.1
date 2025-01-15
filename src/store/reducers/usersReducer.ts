import {UserAction, UserActionTypes, UserState} from "../../types";

const initialState: UserState = {
    users: [],
    pagination: null,
    loading: false,
    error: null,
    oneUser: null,
    oneUserLoading: false,
    isUserUpdated: false,
    oneUserError: null,
    isUserDeleted: false,
}

export const usersReducer = (state = initialState, action: UserAction): UserState => {
    switch (action.type) {
        case UserActionTypes.FETCH_USERS:
            return {...state, oneUserLoading: false, oneUser: null, loading: true, error: null, users: []}
        case UserActionTypes.FETCH_USERS_SUCCESS:
            return {
                ...state, loading: false, users: action.payload.users, pagination: action.payload.pagination
            }
        case UserActionTypes.FETCH_USERS_ERROR:
            return {...state, oneUserLoading: false, oneUser: null, loading: false, error: action.payload, users: []}

        case UserActionTypes.FETCH_ONE_USER:
            return {...state, loading: true, oneUser: null, oneUserError: null}
        case UserActionTypes.FETCH_ONE_USER_SUCCESS:
            return {...state, loading: false, oneUser: action.payload, oneUserError: null}
        case UserActionTypes.FETCH_ONE_USER_ERROR:
            return {...state, loading: false, oneUser: null, oneUserError: action.payload}

        case UserActionTypes.UPDATE_ONE_USER_GENERAL:
            return {...state, oneUserLoading: true, isUserUpdated: false, oneUserError: null}
        case UserActionTypes.UPDATE_ONE_USER_GENERAL_SUCCESS:
            return {...state, oneUserLoading: false, isUserUpdated: true, oneUserError: null}
        case UserActionTypes.UPDATE_ONE_USER_GENERAL_ERROR:
            return {...state, oneUserLoading: false, isUserUpdated: false, oneUserError: action.payload}

        case UserActionTypes.UPDATE_ONE_USER_PASSWORD:
            return {...state, oneUserLoading: true, isUserUpdated: false, oneUserError: null}
        case UserActionTypes.UPDATE_ONE_USER_PASSWORD_SUCCESS:
            return {...state, oneUserLoading: false, isUserUpdated: true, oneUserError: null}
        case UserActionTypes.UPDATE_ONE_USER_PASSWORD_ERROR:
            return {...state, oneUserLoading: false, isUserUpdated: false, oneUserError: action.payload}

        case UserActionTypes.UPDATE_ONE_USER_AVATAR:
            return {...state, oneUserLoading: true, isUserUpdated: false, oneUserError: null}
        case UserActionTypes.UPDATE_ONE_USER_AVATAR_SUCCESS:
            return {...state, oneUserLoading: false, isUserUpdated: true, oneUserError: null}
        case UserActionTypes.UPDATE_ONE_USER_AVATAR_ERROR:
            return {...state, oneUserLoading: false, isUserUpdated: false, oneUserError: action.payload}

        case UserActionTypes.DELETE_ONE_USER:
            return {...state, oneUserLoading: true, isUserUpdated: false}
        case UserActionTypes.DELETE_ONE_USER_SUCCESS:
            return {...state, oneUserLoading: false, isUserUpdated: false, oneUser: null, isUserDeleted: true}
        case UserActionTypes.DELETE_ONE_USER_ERROR:
            return {...state, oneUserLoading: false, isUserUpdated: false, oneUserError: action.payload}

        case UserActionTypes.CLEAR_UPDATED:
            return {...state, isUserUpdated: false}

        default:
            return state
    }
}

export const clearUpdated = () => ({type: UserActionTypes.CLEAR_UPDATED})

