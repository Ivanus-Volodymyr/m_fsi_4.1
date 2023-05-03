import {Dispatch} from "redux";

import {RegistrationActionTypes, RegistrationValues} from "../../../types";
import {usersService} from "../../../services";

export const fetchRegistration = (user: RegistrationValues) => {
    return async (dispatch: Dispatch): Promise<void> => {
        try {
            dispatch({type: RegistrationActionTypes.FETCH_REGISTRATION})
            const {data} = await usersService.createUser(user);
            dispatch({type: RegistrationActionTypes.FETCH_REGISTRATION_SUCCESS, payload: data.result.user_id})
        } catch (e: any) {
            dispatch({type: RegistrationActionTypes.FETCH_REGISTRATION_ERROR, payload: e.response.data.detail})
        }
    }
}
