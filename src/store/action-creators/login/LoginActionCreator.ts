import {Dispatch} from "redux";

import {IUserDataToLogin, LoginActionTypes} from "../../../types";
import {usersService} from "../../../services";

export const fetchLogin = (userDataToLogin: IUserDataToLogin) => {
    return async (dispatch: Dispatch) => {
        try {
            dispatch({type: LoginActionTypes.FETCH_LOGIN});
            const {data} = await usersService.login(userDataToLogin);
            const accessToken = data.result.access_token;
            await localStorage.setItem('access_token', accessToken);
            dispatch({type: LoginActionTypes.FETCH_LOGIN_SUCCESS, payload: accessToken});
        } catch (e: any) {
            dispatch({type: LoginActionTypes.FETCH_LOGIN_ERROR, payload: e.response.data.detail});
        }
    }
}
