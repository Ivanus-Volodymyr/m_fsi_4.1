import React from 'react';
import {useAuth0} from "@auth0/auth0-react";

import {Button} from "../../../GeneralComponnents";

const Auth0Login = () => {
    const {
        isAuthenticated,
        loginWithRedirect,
    } = useAuth0();


    return (
        <div>
            {!isAuthenticated && (
                <Button onClick={() => loginWithRedirect()}>Auth0 Sing In</Button>
            )}
        </div>
    );
};

export {Auth0Login};
