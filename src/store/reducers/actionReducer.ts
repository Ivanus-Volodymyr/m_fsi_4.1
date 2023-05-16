import {Action, ActionType, IActionInitialState} from "../../types";

const ActionInitialState: IActionInitialState = {
    actionId: null,
    isLeavedAction: null,
    isDeclinedAction: null,
    detail: null,
    loading: false,
    error: null
};


export const actionReducer = (state: IActionInitialState = ActionInitialState, action: ActionType): IActionInitialState => {
    switch (action.type) {
        case Action.FETCH_ACTION:
            return {...state, loading: true, error: null, actionId: null, detail: null}
        case Action.FETCH_ACTION_SUCCES:
            return {
                ...state,
                loading: false,
                error: null,
                actionId: action.payload.actionId,
                detail: action.payload.detail
            }

        case Action.FETCH_ACTION_ERROR:
            return {...state, loading: false, error: action.payload, actionId: null, detail: null}

        case Action.LEAVE_ACTION:
            return {...state, loading: true, error: null, isLeavedAction: null}
        case Action.LEAVE_ACTION_SUCCES:
            return {...state, loading: false, error: null, isLeavedAction: action.payload}
        case Action.LEAVE_ACTION_ERROR:
            return {...state, loading: false, error: action.payload, isLeavedAction: null}


        case Action.DECLINE_ACTION:
            return {...state, loading: true, error: null, isDeclinedAction: null}
        case Action.DECLINE_ACTION_SUCCESS:
            return {...state, loading: false, error: null, isDeclinedAction: action.payload}
        case Action.DECLINE_ACTION_ERROR:
            return {...state, loading: false, error: action.payload, isDeclinedAction: null}

        case Action.CLEAR_ACTION:
            return {
                actionId: null,
                isLeavedAction: null,
                isDeclinedAction: null,
                loading: false,
                error: null,
                detail: null,
            }

        default :
            return state;
    }
}


export const clearActionReducer = () => ({type: Action.CLEAR_ACTION});
