import {CounterActionTypes, ICounterAction, IState} from "../../types/counter/counter";

const initialState: IState = {
    value: 1,
    error: null,
}

export const counterReducer = (state = initialState, action: ICounterAction): IState => {
    switch (action.type) {
        case CounterActionTypes.PLUS:
            return {...state, value: state.value + action.payload}
        case CounterActionTypes.MINUS:
            return {...state, value: state.value - action.payload}
        default:
            return state;
    }
};


export const counterPlusAction = (payload : number) => ({type: CounterActionTypes.PLUS, payload})
export const counterMinusAction = (payload : number) => ({type: CounterActionTypes.MINUS, payload})
