import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import {useAuth0} from "@auth0/auth0-react";
import {useDispatch} from "react-redux";

import css from './Header.module.css';

import {useAppSelector} from "../../../hooks/useAppSelector";
import {fetchProfile} from "../../../store/action-creators";
import {Logout} from "../../ForAuthentication";
import {Button} from "../UI";

const Header: React.FC = () => {
    const {user} = useAppSelector(state => state.profile);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {
        isAuthenticated,
        isLoading,
        getAccessTokenSilently
    } = useAuth0();


    const loadToken = async () => {
        if (isAuthenticated) {
            const token = await getAccessTokenSilently();
            await localStorage.setItem('access_token', token);
            dispatch(fetchProfile())
        }
    }

    useEffect(() => {
        loadToken();
    }, [isAuthenticated, user])



    return (
        <div className={css.header_container}>
            <div>NAVBAR</div>
            <>
                {
                    isLoading ? <div>Loading....</div> :
                        <>
                            {
                                (isAuthenticated || user) ?
                                    <div>
                                        {user?.user_email}
                                        <Logout/>
                                    </div> :
                                    <Button onClick={() => navigate('/auth')}>LOGIN</Button>
                            }
                        </>
                }
            </>
        </div>
    );
};

export {Header};
