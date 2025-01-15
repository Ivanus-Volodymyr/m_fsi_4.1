export interface IState {
    value: number;
    error: null | string;
}

export interface CounterAction {
    type: CounterActionTypes;
    payload: number;
}


export enum CounterActionTypes {
    PLUS = 'plus',
    MINUS = 'minus'
}
