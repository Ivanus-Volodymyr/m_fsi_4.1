import {combineReducers} from "redux";

import {counterReducer} from "./counterReducer";
import {checkServerReducer} from "./checkServerReducer";
import {usersReducer} from "./usersReducer";
import {profileReducer} from "./profileReducer";
import {loginReducer, registrationReducer} from "./authReducer";

export const rootReducer = combineReducers({
    counter: counterReducer,
    checkServer: checkServerReducer,
    users: usersReducer,
    profile: profileReducer,
    registration: registrationReducer,
    login: loginReducer,
})

export type RootState = ReturnType<typeof rootReducer>
