import {combineReducers} from "redux";

import {counterReducer} from "./counterReducer";
import {checkServerReducer} from "./checkServerReducer";
import {usersReducer} from "./usersReducer";
import {profileReducer} from "./profileReducer";
import {loginReducer, registrationReducer} from "./authReducer";
import {companiesReducer} from "./companiesReducer";
import {companyDataReducer} from "./companyDataReducer";
import {actionReducer} from "./actionReducer";

export const rootReducer = combineReducers({
    counter: counterReducer,
    checkServer: checkServerReducer,
    users: usersReducer,
    profile: profileReducer,
    registration: registrationReducer,
    login: loginReducer,
    companies: companiesReducer,
    companyData: companyDataReducer,
    action: actionReducer,
})

export type RootState = ReturnType<typeof rootReducer>
