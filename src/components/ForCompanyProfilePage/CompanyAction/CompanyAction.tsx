import React, {ReactNode} from 'react';
import {CompanyUsers} from "../../../types";


import css from './CompanyAction.module.css';

interface Props {
    user: CompanyUsers | null,
    children: ReactNode;
}

const CompanyAction: React.FC<Props> = ({user, children}) => {
    return (
        <div className={css.company_request_container}>
            <div className={css.user_info}>
                <img src={user?.user_avatar ? user.user_avatar : 'No image available'} alt="user_avatar"/>
                <div>User ID: {user?.user_id}</div>
                <div>Action ID: {user?.action_id}</div>
                <div>User Email: {user?.user_email}</div>
                <div>User Name: {user?.user_firstname}</div>
                <div>Action: {user?.action}</div>
            </div>
            {children}
        </div>
    );
};

export {CompanyAction};
