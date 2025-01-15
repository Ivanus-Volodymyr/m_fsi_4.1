export interface ICheckServerResponse {
    status_code: number,
    detail: string;
    result: string;
}

export interface IInitialState {
    data: ICheckServerResponse,
    loading: boolean;
    error: string | null;
}

export enum CheckServerEnum {
    SUCSESS = 'SUCSESS',
    ERROR = 'ERROR',
}

export interface CheckServerAction {
    type: CheckServerEnum,
    payload: ICheckServerResponse
}
