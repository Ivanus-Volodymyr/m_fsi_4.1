import React from 'react';

import {Navigate, Outlet} from "react-router-dom";
import {IProfile} from "../../../types";

type RouteProps = {
    user: IProfile | null;
    redirectPath: string
};

const ToUnauthorizedUsers: React.FC<RouteProps> = ({user, redirectPath = '/about'}) => {
    if (user) {
        return <Navigate to={redirectPath} replace/>;
    }
    return <Outlet/>;
};

export {ToUnauthorizedUsers};
