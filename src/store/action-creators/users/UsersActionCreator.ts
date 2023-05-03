import {Dispatch} from "redux";

import {UserAction, UserActionTypes} from "../../../types";
import {usersService} from "../../../services";

export const fetchUsers = () => {
    return async (dispatch: Dispatch<UserAction>): Promise<void> => {
        try {
            dispatch({type: UserActionTypes.FETCH_USERS})
            const {data} = await usersService.getUsers();
            console.log(data);
            dispatch({type: UserActionTypes.FETCH_USERS_SUCCESS, payload: data.result.users})
        } catch (e: any) {
            dispatch({
                type: UserActionTypes.FETCH_USERS_ERROR,
                payload: e.response.data.detail
            })
        }
    }
}
