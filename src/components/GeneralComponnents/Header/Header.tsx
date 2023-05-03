import React from 'react';
import {NavLink, useNavigate} from "react-router-dom";

import css from './Header.module.css';

import {useAppSelector} from "../../../hooks/useAppSelector";
import {Logout} from "../../ForAuthentication";
import {Button} from "../UI";

const Header: React.FC = () => {
    const {isAuth, user} = useAppSelector(state => state.profile);

    const navigate = useNavigate();

    return (
        <div className={css.header_container}>
            <div>
                <nav className={css.navbar}>
                    <NavLink to={'/'} className={({isActive}) => isActive ? `${css.active}` : ''}>
                        Main
                    </NavLink>
                    <NavLink to={'/about'} className={({isActive}) => isActive ? `${css.active}` : ''}>
                        About
                    </NavLink>
                    {isAuth &&
                        <>
                            <NavLink to={'/companies-list'}
                                     className={({isActive}) => isActive ? `${css.active}` : ''}>
                                Companies
                            </NavLink>
                            <NavLink to={'/users-list'}
                                     className={({isActive}) => isActive ? `${css.active}` : ''}>
                                Users
                            </NavLink>
                            <NavLink to={`/user-profile/${user?.user_id}`}
                                     className={({isActive}) => isActive ? `${css.active}` : ''}>
                                Profile
                            </NavLink>
                        </>
                    }
                </nav>
            </div>

            {isAuth ?
                <div>
                    {user?.user_email}
                    <Logout/>
                </div> :
                <Button onClick={() => navigate('/auth')}>LOGIN</Button>
            }
        </div>
    );
};

export {Header};
