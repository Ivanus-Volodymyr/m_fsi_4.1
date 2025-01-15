import {Dispatch} from "redux";

import {Action, ActionType} from "../../../types";
import {actionService} from "../../../services";

export const createRequestFromUserToCompany = (companyId: number) => {
    return async (dispatch: Dispatch<ActionType>): Promise<void> => {
        try {
            dispatch({type: Action.CLEAR_ACTION});
            dispatch({type: Action.FETCH_ACTION});
            const {data} = await actionService.createFromUserToCompany(companyId);
            dispatch({
                type: Action.FETCH_ACTION_SUCCES, payload: {
                    actionId: data.result.action_id,
                    detail: data.detail,
                }
            });
        } catch (e: any) {
            dispatch({
                type: Action.FETCH_ACTION_ERROR,
                payload: e.response.data.detail,
            })
        }
    }
}
export const createRequestFromCompanyToUser = (companyId: number, userId: number) => {
    return async (dispatch: Dispatch<ActionType>): Promise<void> => {
        try {
            dispatch({type: Action.FETCH_ACTION});
            const {data} = await actionService.createFromCompanyToUser(companyId, userId);
            dispatch({
                type: Action.FETCH_ACTION_SUCCES, payload: {
                    actionId: data.result.action_id,
                    detail: data.detail,
                }
            });
        } catch (e: any) {
            dispatch({
                type: Action.FETCH_ACTION_ERROR,
                payload: e.response.data.detail,
            })
        }
    }
}


export const acceptRequest = (actionId: number) => {
    return async (dispatch: Dispatch<ActionType>): Promise<void> => {
        try {
            dispatch({type: Action.FETCH_ACTION});
            const {data} = await actionService.acceptRequest(actionId);
            dispatch({
                type: Action.FETCH_ACTION_SUCCES, payload: {
                    actionId: data.result.action_id,
                    detail: data.detail,
                }
            });
        } catch (e: any) {
            dispatch({
                type: Action.FETCH_ACTION_ERROR,
                payload: e.response.data.detail,
            })
        }
    }
}

export const acceptInvite = (actionId: number) => {
    return async (dispatch: Dispatch<ActionType>): Promise<void> => {
        try {
            dispatch({type: Action.FETCH_ACTION});
            const {data} = await actionService.acceptInvite(actionId);
            dispatch({
                type: Action.FETCH_ACTION_SUCCES, payload: {
                    actionId: data.result.action_id,
                    detail: data.detail,
                }
            });
            dispatch({type: Action.CLEAR_ACTION});
        } catch (e: any) {
            dispatch({
                type: Action.FETCH_ACTION_ERROR,
                payload: e.response.data.detail,
            })
        }
    }
}

export const declineAction = (actionId: number) => {
    return async (dispatch: Dispatch<ActionType>): Promise<void> => {
        try {
            dispatch({type: Action.DECLINE_ACTION});
            const {data} = await actionService.declineAction(actionId);
            dispatch({type: Action.DECLINE_ACTION_SUCCESS, payload: data.detail});
        } catch (e: any) {
            dispatch({
                type: Action.DECLINE_ACTION_ERROR,
                payload: e.response.data.detail,
            })
        }
    }
}

export const addToAdminList = (actionId: number) => {
    return async (dispatch: Dispatch<ActionType>): Promise<void> => {
        try {
            dispatch({type: Action.FETCH_ACTION});
            const {data} = await actionService.addToAdmin(actionId);
            dispatch({
                type: Action.FETCH_ACTION_SUCCES, payload: {
                    actionId: data.result.action_id,
                    detail: data.detail
                }
            })
        } catch (e: any) {
            dispatch({
                type: Action.FETCH_ACTION_ERROR,
                payload: e.response.data.detail,
            })
        }
    }
}

export const removeFromAdmin = (actionId: number) => {
    return async (dispatch: Dispatch<ActionType>): Promise<void> => {
        try {
            dispatch({type: Action.FETCH_ACTION});
            const {data} = await actionService.removeFromAdmin(actionId);
            dispatch({
                type: Action.FETCH_ACTION_SUCCES, payload: {
                    actionId: data.result.action_id,
                    detail: data.detail
                }
            })
        } catch (e: any) {
            dispatch({
                type: Action.DECLINE_ACTION_ERROR,
                payload: e.response.data.detail,
            })
        }
    }
}


export const leaveCompany = (actionId: number) => {
    return async (dispatch: Dispatch<ActionType>): Promise<void> => {
        try {
            dispatch({type: Action.LEAVE_ACTION});
            const {data} = await actionService.leaveCompany(actionId);
            dispatch({type: Action.LEAVE_ACTION_SUCCES, payload: data.detail})
        } catch (e: any) {
            dispatch({
                type: Action.LEAVE_ACTION_ERROR,
                payload: e.response.data.detail,
            })
        }
    }
}


export const addUserToBlock = (actionId: number) => {
    return async (dispatch: Dispatch<ActionType>): Promise<void> => {
        try {
            dispatch({type: Action.FETCH_ACTION});
            const {data} = await actionService.addToBlock(actionId);
            dispatch({
                type: Action.FETCH_ACTION_SUCCES, payload: {
                    actionId: data.result.action_id,
                    detail: data.detail
                }
            })
        } catch (e: any) {
            dispatch({
                type: Action.FETCH_ACTION_ERROR,
                payload: e.response.data.detail,
            })
        }
    }
}

export const removeUserFromBlock = (actionId: number) => {
    return async (dispatch: Dispatch<ActionType>): Promise<void> => {
        try {
            dispatch({type: Action.FETCH_ACTION});
            const {data} = await actionService.removeFromBlock(actionId);
            dispatch({
                type: Action.FETCH_ACTION_SUCCES, payload: {
                    actionId: data.result.action_id,
                    detail: data.detail
                }
            })
        } catch (e: any) {
            dispatch({
                type: Action.FETCH_ACTION_ERROR,
                payload: e.response.data.detail,
            })
        }
    }
}
