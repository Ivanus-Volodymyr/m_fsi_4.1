import React, {useEffect} from 'react';
import {NavLink, useParams} from "react-router-dom";

import css from './CompanyProfileHeader.module.css';
import {useDispatch} from "react-redux";
import {fetchMembers} from "../../../store/action-creators";
import useUserRole from "../../../hooks/useUserRole";
import {useAppSelector} from "../../../hooks/useAppSelector";

const CompanyProfileHeader: React.FC = () => {
    const {oneCompany} = useAppSelector(state => state.companies);
    const {user} = useAppSelector(state => state.profile);
    const {members} = useAppSelector(state => state.companyData);


    const dispatch = useDispatch();
    const {id} = useParams();

    useEffect(() => {
        dispatch(fetchMembers(Number(id)));
    }, [user?.user_id]);


    const {isOwner, isAdmin} = useUserRole(user, members);


    return (
        <nav className={css.navbar}>
            <NavLink to={`/company-profile/${oneCompany?.company_id}/`}
                     className={({isActive}) => isActive ? `${css.active}` : ''}>
                Company Profile
            </NavLink>

            {
                (isAdmin || isOwner) &&
                <>
                    <NavLink to={`/company-profile/${oneCompany?.company_id}/members-list/`}
                             className={({isActive}) => isActive ? `${css.active}` : ''}>
                        Company Members
                    </NavLink>


                    {isOwner &&
                        <>
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

                </>
            }

        </nav>
    );
};

export {CompanyProfileHeader};
