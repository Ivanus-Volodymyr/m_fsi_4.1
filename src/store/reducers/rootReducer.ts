import {combineReducers} from "redux";

import {counterReducer} from "./counterReducer";
import {checkServerReducer} from "./checkServerReducer";
import {userReducer} from "./usersReducer";

export const rootReducer = combineReducers({
    counter: counterReducer,
    checkServer: checkServerReducer,
    user: userReducer,
})

export type RootState = ReturnType<typeof rootReducer>
