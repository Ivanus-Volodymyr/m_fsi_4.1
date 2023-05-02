import {Dispatch} from "redux";

import {ProfileAction, ProfileActionTypes} from "../../../types";
import {profileService} from "../../../services";

export const fetchProfile = () => {
    return async (dispatch: Dispatch<ProfileAction>): Promise<void> => {
        try {
            dispatch({type: ProfileActionTypes.FETCH_PROFILE})
            const {data} = await profileService.getProfile();
            dispatch({type: ProfileActionTypes.FETCH_PROFILE_SUCCESS, payload: data.result});
        } catch (e: any) {
            dispatch({type: ProfileActionTypes.FETCH_PROFILE_ERROR, payload: e.response.data.detail})
        }
    }
}
