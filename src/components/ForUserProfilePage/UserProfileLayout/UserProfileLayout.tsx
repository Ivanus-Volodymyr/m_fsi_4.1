import React from 'react';
import {Outlet} from "react-router-dom";

import css from './UserProfileLayout.module.css';

import {UserProfileHeader} from "../UserProfileHeader/UserProfileHeader";

const UserProfileLayout: React.FC = () => {
    return (
        <div className={css.user_layout}>
            <UserProfileHeader/>
            <div className={css.user_layout}>
                <Outlet/>
            </div>
        </div>
    );
};

export {UserProfileLayout};
