import React from 'react';

import {Navigate, Outlet} from "react-router-dom";

type RouteProps = {
    token: string | null;
    redirectPath: string
};

const ToUnauthorizedUsers: React.FC<RouteProps> = ({token, redirectPath = '/about'}) => {
    if (token) {
        return <Navigate to={redirectPath} replace/>;
    }
    return <Outlet/>;
};

export {ToUnauthorizedUsers};
