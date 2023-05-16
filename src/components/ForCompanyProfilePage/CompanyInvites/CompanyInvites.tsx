import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {useParams} from "react-router-dom";

import css from './CompanyInvites.module.css';

import {useAppSelector} from "../../../hooks/useAppSelector";
import {declineAction, fetchInvites} from "../../../store/action-creators";
import {CompanyAction} from "../CompanyAction/CompanyAction";
import {Button, Modal} from "../../GeneralComponnents";
import {CompanyUsers} from "../../../types";
import {clearActionReducer} from "../../../store/reducers";

const CompanyInvites: React.FC = () => {
    const {invites, loading} = useAppSelector(state => state.companyData);
    const {detail, isDeclinedAction, error} = useAppSelector(state => state.action);


    const {id} = useParams();
    const dispatch = useDispatch();

    const [modal, setModal] = useState<boolean>(false);
    const [value, setValue] = useState<CompanyUsers | null>(null);


    useEffect(() => {
        dispatch(fetchInvites(Number(id)))
    }, [id]);


    useEffect(() => {
        dispatch(fetchInvites(Number(id)));
        if (detail || error) {
            setTimeout(() => dispatch(clearActionReducer()), 2000)
        }
    }, [detail, isDeclinedAction, error])


    if (loading) {
        return <h1>Loading ...</h1>
    }

    return (
        <div className={css.company_invites_container}>
            <h2>Company invites list</h2>
            {invites.length > 0 ? invites.map(invite =>
                    <div className={css.company_invite}>
                        <CompanyAction key={invite.user_id} user={invite}>
                            <Button onClick={() => {
                                setValue(invite);
                                setModal(true);
                            }}>
                                Cancel Invite
                            </Button>
                        </CompanyAction>
                    </div>) :
                <h2>No any Invites for this company!</h2>
            }


            <Modal activeModal={modal} setActive={setModal}>
                <div className={css.modal}>
                    <h1>You are about to cancel an invitation to a user {value?.user_email} to join your
                        team. Confirm your action?</h1>

                    <Button onClick={() => {
                        dispatch(declineAction(Number(value?.action_id)));
                        setModal(false);
                        setValue(null);
                    }}> Confirm the cancellation of the invitation
                    </Button>


                    <Button>Cancel</Button>
                    <h1>{error}</h1>
                </div>
            </Modal>
        </div>
    );
};

export {CompanyInvites};
