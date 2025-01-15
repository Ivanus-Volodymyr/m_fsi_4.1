import React from 'react';
import {useNavigate} from "react-router-dom";

import css from './User.module.css';
import {IProfile} from "../../../types";


type UserProps = {
    user: IProfile;
}
const User: React.FC<UserProps> = ({user}: UserProps) => {
    const navigate = useNavigate();
    return (
        <div className={css.user} onClick={() => navigate(`/user-profile/${user.user_id}`)}>
            <div>
                <div>User ID: {user.user_id}</div>
                <div>First Name: {user.user_firstname}</div>
                <div>Last Name: {user.user_lastname}</div>
                <div>User Email: {user.user_email}</div>
            </div>
        </div>
    );
};

export {User};
