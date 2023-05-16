import React from 'react';

import css from './UserProfileHeader.module.css';

import {useAppSelector} from "../../../hooks/useAppSelector";
import {NavLink} from "react-router-dom";

const UserProfileHeader: React.FC = () => {
    const {oneUser} = useAppSelector(state => state.users);
    const {user} = useAppSelector(state => state.profile);


    return (
        <nav className={css.navbar}>
            <NavLink to={`/user-profile/${oneUser?.user_id}/`}
                     className={({isActive}) => isActive ? `${css.active}` : ''}>
                User Profile
            </NavLink>

            {user?.user_id === oneUser?.user_id &&
                <>
                    <NavLink to={`/user-profile/${oneUser?.user_id}/companies-list/`}
                             className={({isActive}) => isActive ? `${css.active}` : ''}>
                        User Companies
                    </NavLink>
                    <NavLink to={`/user-profile/${oneUser?.user_id}/requests-list/`}
                             className={({isActive}) => isActive ? `${css.active}` : ''}>
                        User Requests
                    </NavLink>
                    <NavLink to={`/user-profile/${oneUser?.user_id}/invites-list/`}
                             className={({isActive}) => isActive ? `${css.active}` : ''}>
                        User Invites
                    </NavLink>

                </>
            }
        </nav>
    );
};

export {UserProfileHeader};
