import React from 'react';
import {useAuth0} from "@auth0/auth0-react";

import {Button} from "../../../GeneralComponnents";

const Auth0Logout = () => {
    const {isAuthenticated, logout} = useAuth0();


    return (
        <div>
            {isAuthenticated && (
                <Button onClick={() => logout()}>Sing Out</Button>
            )}
        </div>
    );
};

export {Auth0Logout};
