import {Dispatch} from "redux";

import {Action, ActionType} from "../../../types";
import {actionService} from "../../../services";

export const createRequestFromUserToCompany = (companyId: number) => {
    return async (dispatch: Dispatch<ActionType>): Promise<void> => {
        try {
            dispatch({type: Action.FETCH_ACTION});
            const {data} = await actionService.createFromUserToCompany(companyId);
            dispatch({type: Action.FETCH_ACTION_SUCCES, payload: data.result.action_id});
        } catch (e: any) {
            dispatch({
                type: Action.FETCH_ACTION_ERROR,
                payload: e.response.data.detail,
            })
        }
    }
}
