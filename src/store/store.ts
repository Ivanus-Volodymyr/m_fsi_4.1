import {applyMiddleware, createStore} from "redux";

import thunk, {ThunkMiddleware} from 'redux-thunk'

import {rootReducer} from "./reducers";

export const store = createStore(
    rootReducer,
    applyMiddleware(thunk as ThunkMiddleware)
);
