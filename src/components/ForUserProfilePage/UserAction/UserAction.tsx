import React, {ReactNode} from 'react';

import css from './UserAction.module.css';
import {UserCompany} from "../../../types";



interface Props {
    company: UserCompany | null,
    children: ReactNode;
}

const UserAction: React.FC<Props> = ({company, children}) => {
    return (
        <div className={css.action_container}>
            <div className={css.action}>
                <img src={company?.company_avatar ? company?.company_avatar : 'company_avatar'} alt="company_avatar"/>
                <div>Company ID: {company?.company_id}</div>
                <div>Action ID: {company?.action_id} </div>
                <div>Company Name: {company?.company_name}</div>
                <div>Is visible: {company?.is_visible}</div>
                <div>Action: {company?.action}</div>
            </div>
            {children}
        </div>
    );
};

export {UserAction};
