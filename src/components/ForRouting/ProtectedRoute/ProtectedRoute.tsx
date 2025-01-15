import {Navigate, Outlet,} from 'react-router-dom';
import React from "react";
import {IProfile} from "../../../types";


type RouteProps = {
    user: IProfile | null
    redirectPath: string
};

const ProtectedRoute: React.FC<RouteProps> = ({user, redirectPath = '/auth'}) => {
    if (!user) {
        return <Navigate to={redirectPath} replace/>;
    }
    return <Outlet/>;
};

export {ProtectedRoute};
