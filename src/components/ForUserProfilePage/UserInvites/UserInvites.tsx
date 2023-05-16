import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch} from "react-redux";

import css from './UserInvites.module.css';

import {useAppSelector} from "../../../hooks/useAppSelector";
import {UserAction} from "../UserAction/UserAction";
import {Button, Modal} from "../../GeneralComponnents";
import {UserCompany} from "../../../types";
import {fetchUserInvites} from "../../../store/action-creators/user-data/userDataActionCreator";
import {acceptInvite, declineAction} from "../../../store/action-creators";
import {clearActionReducer} from "../../../store/reducers";

const UserInvites: React.FC = () => {
    const {loading, invites} = useAppSelector(state => state.userData);
    const {error, isDeclinedAction, detail} = useAppSelector(state => state.action);

    const {id} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [accept, setAccept] = useState<boolean>(false);
    const [reject, setReject] = useState<boolean>(false);
    const [value, setValue] = useState<UserCompany | null>(null);


    useEffect(() => {
        dispatch(fetchUserInvites(Number(id)));
    }, [id]);

    useEffect(() => {
        dispatch(fetchUserInvites(Number(id)));
        if (detail || error) {
            setTimeout(() => dispatch(clearActionReducer()), 2000)
        }

    }, [detail, isDeclinedAction, error]);


    if (loading) {
        return <h1 className={css.user_invites}>Loading...</h1>
    }

    return (
        <div className={css.user_invites}>
            <div className={css.user_invites_header}>All invites for user with id {id}</div>
            <div className={css.user_invites_block}>
                {invites.length > 0 ? invites.map(invite =>
                    <UserAction key={invite.company_id} company={invite}>
                        <div className={css.accept_reject_invite}>
                            <Button onClick={() => navigate(`/company-profile/${invite?.company_id}/`)}>
                                Go to the company</Button>

                            <Button onClick={() => {
                                setValue(invite);
                                setAccept(true);
                            }}>
                                Accept Invite</Button>

                            <Button onClick={() => {
                                setValue(invite);
                                setReject(true);
                            }}>
                                Reject Invite</Button>
                        </div>
                    </UserAction>
                ) : <h1>No any invites for this user</h1>
                }
            </div>


            <Modal activeModal={accept} setActive={setAccept}>
                <div className={css.modal}>
                    <h1>You are about to confirm an invitation to join this company. Confirm your action?</h1>
                    <Button onClick={() => {
                        dispatch(acceptInvite(Number(value?.action_id)));
                        setAccept(false);
                        setValue(null);
                    }}>Accept Invite</Button>
                    <Button onClick={() => setAccept(false)}>Cancel</Button>
                    <h1>{error}</h1>
                </div>
            </Modal>

            <Modal activeModal={reject} setActive={setReject}>
                <div className={css.modal}>
                    <h1>You are about to decline an invitation to join this company. Confirm your action?</h1>
                    <Button onClick={() => {
                        dispatch(declineAction(Number(value?.action_id)));
                        setReject(false);
                        setValue(null);
                    }}>Decline Invite</Button>
                    <Button onClick={() => setReject(false)}>Cancel</Button>
                    <h1>{error}</h1>
                </div>
            </Modal>

        </div>
    );
};

export {UserInvites};
