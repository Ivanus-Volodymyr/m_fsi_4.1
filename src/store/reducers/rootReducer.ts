import {combineReducers} from "redux";

import {counterReducer} from "./counterReducer";
import {checkServerReducer} from "./checkServerReducer";

export const rootReducer = combineReducers({
    counter: counterReducer,
    checkServer: checkServerReducer,
})

export type RootState = ReturnType<typeof rootReducer>
