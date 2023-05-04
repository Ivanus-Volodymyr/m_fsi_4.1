import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";

import css from './UserProfile.module.css';

import {useAppSelector} from "../../hooks/useAppSelector";
import {deleteUser, fetchOneUser} from "../../store/action-creators";
import {Button, Modal, UpdateAvatarForm, UpdateGeneralInfoForm, UpdatePasswordForm} from "../../components";

const UserProfile = () => {
    const {
        oneUser,
        loading,
        isUserUpdated,
        oneUserError,
        oneUserLoading,
        isUserDeleted,
    } = useAppSelector(state => state.users);


    const {id} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [update, setUpdate] = useState<boolean>(false);
    const [status, setStatus] = useState<string>('');
    const [active, setActive] = useState(false);


    useEffect(() => {
        dispatch(fetchOneUser(Number(id)));
    }, [id]);


    useEffect(() => {
        if (isUserUpdated) {
            setStatus(`User ${oneUser?.user_firstname} updated`)
            setTimeout(() => {
                dispatch(fetchOneUser(Number(id)));
                setStatus('');
                setUpdate(false);
            }, 3000);
        }

        if (oneUserError) {
            setStatus(oneUserError);
            setTimeout(() => setStatus(''), 3000);
        }

    }, [isUserUpdated, oneUserLoading, oneUserError]);


    useEffect(() => {
        if (isUserDeleted) {
            setTimeout(() => navigate('/users-list'), 3000);
        }
    }, [isUserDeleted])


    const deleteUserById = () => {
        dispatch(deleteUser(Number(oneUser?.user_id)));
        setActive(false);
    }


    return (
        <div className={css.user_profile_container}>
            {loading ? <h1>Loading...</h1> :
                <div className={css.user_profile}>
                    <div className={css.user_profile_header}>
                        <h1>User - {oneUser?.user_firstname}</h1>
                        <h3>{status}</h3>
                        <Button onClick={() => setActive(true)}>Delete this user</Button>
                    </div>


                    <Modal activeModal={active} setActive={setActive}>
                        <div className={css.modal}>
                            <h1>You are going to delete this user permanently. Are you really sure about this?</h1>
                            <Button onClick={() => deleteUserById()}><h2>Yes, I want to delete this user!</h2></Button>
                            <Button onClick={() => setActive(false)}><h2>No!</h2></Button>
                        </div>
                    </Modal>


                    <div className={css.user_profile_main_info}>
                        <div className={css.user_img}>
                            <img src={oneUser?.user_avatar ? oneUser?.user_avatar : ''} alt="user_avatar"/>
                        </div>
                        <div className={css.user_info}>
                            <div className={css.update_user}>
                                <Button onClick={() => setUpdate(true)}>
                                    {update ? "Cancel updating" : 'Update this user'}
                                </Button>
                            </div>
                            {update ?
                                <div className={css.update_block}>
                                    <div>
                                        <span>Update general information</span>
                                        <UpdateGeneralInfoForm user={oneUser ? oneUser : null}/>
                                    </div>
                                    <div>
                                        <span>Update password</span>
                                        <UpdatePasswordForm user={oneUser ? oneUser : null}/>

                                    </div>
                                    <div>
                                        <span>Update avatar</span>
                                        <UpdateAvatarForm user={oneUser ? oneUser : null}/>
                                    </div>
                                </div> :
                                <div className={css.user_information}>
                                    <div>User Email: {oneUser?.user_email}</div>
                                    <div>User First Name: {oneUser?.user_firstname}</div>
                                    <div>User Last Name: {oneUser?.user_lastname}</div>
                                    <div>User City: {oneUser?.user_city ? oneUser.user_city : "No city"}</div>
                                    <div>Is super user? {oneUser?.is_superuser ? 'Yes' : 'No'}</div>
                                    <div>User Phone
                                        number: {oneUser?.user_phone ? oneUser.user_phone : 'No phone'}</div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export {UserProfile};
