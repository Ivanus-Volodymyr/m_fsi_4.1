import React, {useEffect} from 'react';

import css from './UserProfile.module.css';
import {useParams} from "react-router-dom";
import {useAppSelector} from "../../hooks/useAppSelector";
import {useDispatch} from "react-redux";
import {fetchOneUser} from "../../store/action-creators";

const UserProfile = () => {
    const {oneUser, loading} = useAppSelector(state => state.users);
    const {id} = useParams();
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(fetchOneUser(Number(id)));
    }, [id]);


    return (
        <div className={css.user_profile_container}>
            {loading ? <h1>Loading...</h1> :
                <div>
                    <h1>{oneUser?.user_id}</h1>
                    <h1>{oneUser?.user_email}</h1>
                </div>
            }
        </div>
    );
};

export {UserProfile};
