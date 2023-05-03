import React from 'react';
import {useAuth0} from "@auth0/auth0-react";
import {useDispatch} from "react-redux";

import {Button} from "../../../GeneralComponnents";
import {logoutActionCreator} from "../../../../store/reducers";

const Logout = () => {
    const {isAuthenticated, logout} = useAuth0();
    const dispatch = useDispatch();

    const authLogout = async () => {
        dispatch(logoutActionCreator())
        if (isAuthenticated) {
            logout();
        }
        localStorage.removeItem('access_token');
    }

    return (
        <Button onClick={() => authLogout()}>Sing Out</Button>
    );
};

export {Logout};
