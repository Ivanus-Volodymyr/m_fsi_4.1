import React from 'react';
import {NavLink} from "react-router-dom";

import css from './CompanyProfileHeader.module.css';
import {useAppSelector} from "../../../hooks/useAppSelector";

const CompanyProfileHeader: React.FC = () => {
    const {oneCompany} = useAppSelector(state => state.companies);
    const {user} = useAppSelector(state => state.profile);

    return (
        <nav className={css.navbar}>
            <NavLink to={`/company-profile/${oneCompany?.company_id}/`}
                     className={({isActive}) => isActive ? `${css.active}` : ''}>
                Company Profile
            </NavLink>

            {
                user?.user_id === oneCompany?.company_owner.user_id &&
                <>
                    <NavLink to={`/company-profile/${oneCompany?.company_id}/members-list/`}
                             className={({isActive}) => isActive ? `${css.active}` : ''}>
                        Company Members
                    </NavLink>

                    <NavLink to={`/company-profile/${oneCompany?.company_id}/requests-list/`}
                             className={({isActive}) => isActive ? `${css.active}` : ''}>
                        Company Requests
                    </NavLink>

                    <NavLink to={`/company-profile/${oneCompany?.company_id}/invites-list/`}
                             className={({isActive}) => isActive ? `${css.active}` : ''}>
                        Company Invites
                    </NavLink>

                    <NavLink to={`/company-profile/${oneCompany?.company_id}/invite-user/`}
                             className={({isActive}) => isActive ? `${css.active}` : ''}>
                        Invite users
                    </NavLink>

                    <NavLink to={`/company-profile/${oneCompany?.company_id}/blocked-list/`}
                             className={({isActive}) => isActive ? `${css.active}` : ''}>
                        Blocked users
                    </NavLink>

                </>
            }

        </nav>
    );
};

export {CompanyProfileHeader};
