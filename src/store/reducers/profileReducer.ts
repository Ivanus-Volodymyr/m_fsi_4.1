import {ProfileAction, ProfileActionTypes, ProfileState} from "../../types";

const InitialSate: ProfileState = {
    user: null,
    isAuth: false,
    loading: false,
    error: null,
    canIGetProfile: false,
}

export const profileReducer = (state = InitialSate, action: ProfileAction): ProfileState => {
    switch (action.type) {
        case ProfileActionTypes.LOGOUT:
            return {...state, isAuth: false, user: null, loading: false, error: null, canIGetProfile: !state.canIGetProfile}

        case ProfileActionTypes.FETCH_PROFILE:
            return {...state, loading: true}
        case ProfileActionTypes.FETCH_PROFILE_SUCCESS:
            return {...state, isAuth: true, error: null, canIGetProfile: false, loading: false, user: action.payload}
        case ProfileActionTypes.FETCH_PROFILE_ERROR:
            return {...state, isAuth: false, user: null, loading: false, error: action.payload}

        case ProfileActionTypes.CAN_I_GET_PROFILE:
            return {...state, canIGetProfile: !state.canIGetProfile}
        default:
            return state;
    }
}


export const logoutActionCreator = () => ({type: ProfileActionTypes.LOGOUT});

export const canGetProfile = () => ({type: ProfileActionTypes.CAN_I_GET_PROFILE});


