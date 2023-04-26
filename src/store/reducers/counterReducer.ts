import {CounterAction, CounterActionTypes, IState} from "../../types/counter/counter";

const initialState: IState = {
    value: 1,
    error: null,
};

export const counterReducer = (state = initialState, action: CounterActionTypes): IState => {
    switch (action.type) {
        case CounterAction.PLUS:
            return {...state, value: state.value + action.payload}
        case CounterAction.MINUS:
            return {...state, value: state.value - action.payload}
        default:
            return state;
    }
};


export const counterPlusAction = (payload: number) => ({type: CounterAction.PLUS, payload})
export const counterMinusAction = (payload: number) => ({type: CounterAction.MINUS, payload})
