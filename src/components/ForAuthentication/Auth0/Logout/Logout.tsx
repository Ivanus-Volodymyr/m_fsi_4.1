import React from 'react';
import {useAuth0} from "@auth0/auth0-react";
import {useDispatch} from "react-redux";

import {Button} from "../../../GeneralComponnents";
import {logoutActionCreator} from "../../../../store/reducers";

const Logout: React.FC = () => {
    const {isAuthenticated, logout} = useAuth0();
    const dispatch = useDispatch();

    const authLogout = async () => {
        localStorage.removeItem('access_token');
        dispatch(logoutActionCreator())
        if (isAuthenticated) {
            logout();
        }
    }

    return (
        <Button onClick={() => authLogout()}>Sing Out</Button>
    );
};

export {Logout};
