import {GeneralResponse} from "../response/responseTypes";

export interface IActionResponse extends GeneralResponse {
    result: {
        action_id: number,
    }
}

export interface IActionLeaveCompanyDeclineActionResponse extends GeneralResponse {
    result: string,
}

export interface IActionInitialState {
    isLeavedAction: string | null,
    isDeclinedAction: string | null,
    detail: string | null,
    loading: boolean,
    error: string | null,
    actionId: number | null,
}


export enum Action {
    FETCH_ACTION = 'FETCH_ACTION',
    FETCH_ACTION_SUCCES = 'FETCH_ACTION_SUCCES',
    FETCH_ACTION_ERROR = 'FETCH_ACTION_ERROR',

    LEAVE_ACTION = 'LEAVE_ACTION',
    LEAVE_ACTION_SUCCES = 'LEAVE_ACTION_SUCCES',
    LEAVE_ACTION_ERROR = 'LEAVE_ACTION_ERROR',

    DECLINE_ACTION = 'DECLINE_ACTION',
    DECLINE_ACTION_SUCCESS = 'DECLINE_ACTION_SUCCESS',
    DECLINE_ACTION_ERROR = 'DECLINE_ACTION_ERROR',

    CLEAR_ACTION = 'CLEAR_ACTION',
}

interface FetchAction {
    type: Action.FETCH_ACTION,
}

interface FetchActionSuccess {
    type: Action.FETCH_ACTION_SUCCES,
    payload: {
        actionId: number
        detail: string,
    },
}

interface FetchActionError {
    type: Action.FETCH_ACTION_ERROR,
    payload: string,
}

interface LeaveAction {
    type: Action.LEAVE_ACTION
}

interface LeaveActionSuccess {
    type: Action.LEAVE_ACTION_SUCCES,
    payload: string,
}

interface LeaveActionError {
    type: Action.LEAVE_ACTION_ERROR,
    payload: string,
}


interface DeclineAction {
    type: Action.DECLINE_ACTION,
}

interface DeclineActionSuccess {
    type: Action.DECLINE_ACTION_SUCCESS,
    payload: string,
}

interface DeclineActionError {
    type: Action.DECLINE_ACTION_ERROR,
    payload: string,
}

interface ClearAction {
    type: Action.CLEAR_ACTION,
}


export type ActionType =
    | FetchAction
    | FetchActionSuccess
    | FetchActionError
    | LeaveAction
    | LeaveActionSuccess
    | LeaveActionError
    | DeclineAction
    | DeclineActionSuccess
    | DeclineActionError
    | ClearAction
