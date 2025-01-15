import {CheckServerAction, CheckServerEnum, IInitialState} from "../../types";

const InitialState: IInitialState = {
    data: {
        status_code: 0,
        detail: '',
        result: '',
    },
    loading: false,
    error: null,
}

export const checkServerReducer = (state = InitialState, action: CheckServerAction): IInitialState => {
    switch (action.type) {
        case CheckServerEnum.SUCSESS :
            return {...state, data: action.payload}
        default:
            return state;
    }
};
