import {Navigate, Outlet,} from 'react-router-dom';
import React from "react";


type RouteProps = {
    token: string | null
    redirectPath: string
};

const ProtectedRoute: React.FC<RouteProps> = ({token, redirectPath = '/auth'}) => {
    if (!token) {
        return <Navigate to={redirectPath} replace/>;
    }
    return <Outlet/>;
};

export {ProtectedRoute};
