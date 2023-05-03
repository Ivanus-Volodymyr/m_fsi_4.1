import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";

import css from './UsersList.module.css';

import {useAppSelector} from "../../../hooks/useAppSelector";
import {fetchUsers} from "../../../store/action-creators";
import {User} from "../User/User";

const UsersList = () => {
    const {users} = useAppSelector(state => state.users);
    const dispatch = useDispatch();


    useEffect(() => {
        if (!users.length) {
            dispatch(fetchUsers());
        }
    }, [])


    return (
        <div className={css.users_container}>
            {users.length > 0 && users.map(user => <User key={user.user_id} user={user}/>)}
        </div>
    );
};

export {UsersList};
