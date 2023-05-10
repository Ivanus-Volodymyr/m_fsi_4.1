import React, {useEffect} from 'react';
import {useAuth0} from "@auth0/auth0-react";
import {useDispatch} from "react-redux";

import {Button} from "../../../GeneralComponnents";
import {canGetProfile} from "../../../../store/reducers";

const Auth0Login: React.FC = () => {
    const dispatch = useDispatch();

    const {
        isAuthenticated,
        loginWithPopup,
        getAccessTokenSilently
    } = useAuth0();


    const getTokenIfAuth0Login = async () => {
        const token = await getAccessTokenSilently();
        if (token) {
            await localStorage.setItem('access_token', token);
            dispatch(canGetProfile());
        }
    }

    useEffect(() => {
        getTokenIfAuth0Login()
    }, [isAuthenticated]);


    return (
        <div>
            {!isAuthenticated && (
                <Button onClick={() => loginWithPopup()}>Auth0 Sing In</Button>
            )}
        </div>
    );
};

export {Auth0Login};
