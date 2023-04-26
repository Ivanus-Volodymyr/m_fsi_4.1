export interface IState {
    value: number;
    error: null | string;
}

export interface CounterActionTypes {
    type: string;
    payload: number;
}


export enum CounterAction {
    PLUS = 'plus',
    MINUS = 'minus'
}
