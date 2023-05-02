import {ProfileAction, ProfileActionTypes, ProfileState} from "../../types";

const InitialSate: ProfileState = {
    user: null,
    loading: false,
    error: null,
}

export const profileReducer = (state = InitialSate, action: ProfileAction): ProfileState => {
    switch (action.type) {
        case ProfileActionTypes.LOGOUT:
            return {user: null, loading: false, error: null}
        case ProfileActionTypes.FETCH_PROFILE:
            return {...state, loading: true}
        case ProfileActionTypes.FETCH_PROFILE_SUCCESS:
            return {...state, loading: false, user: action.payload}
        case ProfileActionTypes.FETCH_PROFILE_ERROR:
            return {...state, loading: false, error: action.payload}
        default:
            return state;
    }
}

export const logoutActionCreator = () => ({type: ProfileActionTypes.LOGOUT})


