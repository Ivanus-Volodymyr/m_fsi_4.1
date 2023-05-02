import {Dispatch} from "redux";

import {ProfileAction, ProfileActionTypes} from "../../../types";
import {profileService} from "../../../services";

export const fetchProfile = () => {
    return async (dispatch: Dispatch<ProfileAction>): Promise<void> => {
        try {
            dispatch({type: ProfileActionTypes.FETCH_PROFILE})
            const access_token = await localStorage.getItem('access_token');
            if (access_token) {
                const {data} = await profileService.getProfile(access_token);
                dispatch({type: ProfileActionTypes.FETCH_PROFILE_SUCCESS, payload: data.result})
            }
        } catch (e: any) {
            dispatch({type: ProfileActionTypes.FETCH_PROFILE_ERROR, payload: e.response.data.detail})
        }
    }
}
