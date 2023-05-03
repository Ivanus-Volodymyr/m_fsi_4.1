import {combineReducers} from "redux";

import {counterReducer} from "./counterReducer";
import {checkServerReducer} from "./checkServerReducer";
import {userReducer} from "./usersReducer";
import {profileReducer} from "./profileReducer";
import {loginReducer, registrationReducer} from "./authReducer";

export const rootReducer = combineReducers({
    counter: counterReducer,
    checkServer: checkServerReducer,
    user: userReducer,
    profile: profileReducer,
    registration: registrationReducer,
    login: loginReducer,
})

export type RootState = ReturnType<typeof rootReducer>
