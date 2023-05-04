import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";

import css from './UsersList.module.css';

import {useAppSelector} from "../../../hooks/useAppSelector";
import {fetchUsers} from "../../../store/action-creators";
import {User} from "../User/User";
import {Pagination} from "../../GeneralComponnents";

const UsersList: React.FC = () => {
    const {users, pagination} = useAppSelector(state => state.users);
    const dispatch = useDispatch();

    const [page, setPage] = useState<number>(1);

    useEffect(() => {
        if (!users.length) {
            dispatch(fetchUsers(page));
        }
    }, [page])


    return (
        <div className={css.users_container}>
            {users.length > 0 && users.map(user => <User key={user.user_id} user={user}/>)}
            <Pagination
                limit={5}
                page={page}
                totalPages={pagination?.total_page ? pagination?.total_page : 2}
                setPage={setPage}/>
        </div>
    );
};

export {UsersList};
