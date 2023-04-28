import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import {useAuth0} from "@auth0/auth0-react";

import css from './Header.module.css';
import {Button} from "../UI";
import {Auth0Logout} from "../../ForAuthentication";

const Header = () => {
    const navigate = useNavigate();

    const {
        isAuthenticated,
        isLoading,
        user,
        getAccessTokenSilently
    } = useAuth0();

    useEffect(() => {
        getAccessTokenSilently().then(token => console.log(token)).then(val => console.log(user))
    }, [isAuthenticated, isLoading])


    return (
        <div className={css.header_container}>
            <div>NAVBAR</div>
            {
                isAuthenticated ?
                    <Auth0Logout/> :
                    <Button onClick={() => navigate('/auth')}>LOGIN</Button>
            }
        </div>
    );
};

export {Header};
