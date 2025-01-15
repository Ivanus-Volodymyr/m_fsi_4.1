import React from 'react';

import css from './UsersListPage.module.css';

import {UsersList} from "../../components";

const UsersListPage = () => {
    return (
        <div className={css.users_list_container}>
            <UsersList/>
        </div>
    );
};

export {UsersListPage};
