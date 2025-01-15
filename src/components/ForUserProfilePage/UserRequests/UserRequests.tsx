import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch} from "react-redux";

import css from './UserRequests.module.css';

import {useAppSelector} from "../../../hooks/useAppSelector";
import {fetchUserRequests} from "../../../store/action-creators/user-data/userDataActionCreator";
import {UserAction} from "../UserAction/UserAction";
import {Button, Modal} from "../../GeneralComponnents";
import {UserCompany} from "../../../types";
import {declineAction} from "../../../store/action-creators";

const UserRequests: React.FC = () => {
    const {loading, requests} = useAppSelector(state => state.userData);
    const {error, isDeclinedAction} = useAppSelector(state => state.action);

    const {id} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [modal, setModal] = useState<boolean>(false);
    const [value, setValue] = useState<UserCompany | null>(null);

    useEffect(() => {
        dispatch(fetchUserRequests(Number(id)));
    }, [id, isDeclinedAction]);


    if (loading) {
        return <h1 className={css.user_requests}>Loading ...</h1>
    }
    return (
        <div className={css.user_requests}>
            <div className={css.user_requests_header}>All requests for user with id {id}</div>
            <div className={css.user_requests_block}>
                {requests.length > 0 ? requests.map(request =>
                    <UserAction key={request.company_id} company={request}>
                        <div className={css.reject_request}>
                            <Button onClick={() => navigate(`/company-profile/${request?.company_id}/`)}>
                                Go to the company</Button>

                            <Button onClick={() => {
                                setModal(true);
                                setValue(request);
                            }}>Cancel the request</Button>
                        </div>
                    </UserAction>
                ) : <h1>No any requests for this user</h1>
                }
            </div>

            <Modal activeModal={modal} setActive={setModal}>
                <div className={css.modal}>
                    <h1>You are about to reject you request to join in this company. Confirm your action?</h1>
                    <Button onClick={() => {
                        dispatch(declineAction(Number(value?.action_id)));
                        setModal(false);
                        setValue(null);
                    }}>Reject you request</Button>
                    <Button onClick={() => setModal(false)}>Cancel</Button>
                    <h1>{error}</h1>
                </div>
            </Modal>

        </div>
    );
};

export {UserRequests};
