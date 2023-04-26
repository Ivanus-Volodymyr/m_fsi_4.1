export interface IState {
    value: number;
    error: null | string;
}

export interface ICounterAction {
    type: string;
    payload: number;
}


export enum CounterActionTypes {
    PLUS = 'plus',
    MINUS = 'minus'
}
