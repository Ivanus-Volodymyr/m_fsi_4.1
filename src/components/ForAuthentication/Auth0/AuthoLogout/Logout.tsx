import React from 'react';
import {useAuth0} from "@auth0/auth0-react";
import {useDispatch} from "react-redux";

import {Button} from "../../../GeneralComponnents";
import {logoutActionCreator} from "../../../../store/reducers";
import {useAppSelector} from "../../../../hooks/useAppSelector";

const Logout = () => {
    const {user} = useAppSelector(state => state.profile);
    const {isAuthenticated, logout} = useAuth0();
    const dispatch = useDispatch();

    const auth0Logout = async () => {
        await localStorage.removeItem('access_token');
        dispatch(logoutActionCreator())
        if (isAuthenticated) {
            logout();
        }
    }

    return (
        <div>
            {(isAuthenticated || user) && (
                <Button onClick={() => auth0Logout()}>Sing Out</Button>
            )}
        </div>
    );
};

export {Logout};
