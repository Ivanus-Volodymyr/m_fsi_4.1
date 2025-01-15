import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";

import css from './UsersList.module.css';

import {useAppSelector} from "../../../hooks/useAppSelector";
import {fetchUsers} from "../../../store/action-creators";
import {User} from "../User/User";
import {Pagination} from "../../GeneralComponnents";
import {IPagination} from "../../../types";

const UsersList: React.FC = () => {
    const {users, pagination, loading} = useAppSelector(state => state.users);
    const dispatch = useDispatch();

    const [page, setPage] = useState<number>(1);

    useEffect(() => {
        if (!users.length) {
            dispatch(fetchUsers(page));
        }
    }, []);


    useEffect(() => {
        dispatch(fetchUsers(page));
    }, [page])


    return (
        <div className={css.users_container}>
            {loading ? <h1>Loading.......</h1> :
                <div>
                    {users.length > 0 && users.map(user => <User key={user.user_id} user={user}/>)}
                    <Pagination
                        currentPage={page}
                        pagination={pagination as IPagination}
                        setPage={setPage}
                    />
                </div>
            }
        </div>
    );
};

export {UsersList};
