import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {useParams} from "react-router-dom";

import css from './CompanyRequests.module.css';

import {useAppSelector} from "../../../hooks/useAppSelector";
import {fetchRequests} from "../../../store/action-creators";
import {CompanyAction} from "../CompanyAction/CompanyAction";
import {Button, Modal} from "../../GeneralComponnents";
import {acceptRequest, declineAction} from "../../../store/action-creators/actions/actionsActionCreator";
import {CompanyUsers} from "../../../types";

const CompanyRequests: React.FC = () => {
    const {requests, loading} = useAppSelector(state => state.companyData);
    const {detail, isDeclinedAction} = useAppSelector(state => state.action);

    const dispatch = useDispatch();
    const {id} = useParams();

    const [accept, setAccept] = useState<boolean>(false);
    const [reject, setReject] = useState<boolean>(false);
    const [value, setValue] = useState<CompanyUsers | null>(null);


    useEffect(() => {
        dispatch(fetchRequests(Number(id)))
    }, [id]);


    useEffect(() => {
        dispatch(fetchRequests(Number(id)));
    }, [isDeclinedAction, detail])


    if (loading) {
        return <h1>Loading .....</h1>
    }
    return (
        <div className={css.company_requests_container}>
            <div className={css.requests_header}>All requests for company {id}</div>
            <div className={css.requests}>
                {requests.length > 0 ? requests.map(request =>
                        <CompanyAction key={request.user_id} user={request}>
                            <div className={css.accept_reject}>
                                <Button onClick={() => {
                                    setValue(request)
                                    setAccept(true)
                                }}>Accept request</Button>

                                <Button onClick={() => {
                                    setValue(request)
                                    setReject(true)
                                }}>Reject request</Button>

                            </div>
                        </CompanyAction>) :
                    <h2>No any Requests for this company!</h2>
                }
            </div>


            <Modal activeModal={accept} setActive={setAccept}>
                <div className={css.modal}>
                    <h1>You are about to accept a request from {value?.user_firstname} to join your team. Confirm your
                        action?</h1>
                    <Button onClick={() => {
                        dispatch(acceptRequest(Number(value?.action_id)));
                        setValue(null);
                        setAccept(false);
                    }}>Accept request
                    </Button>

                    <Button onClick={() => setAccept(false)}>Cancel</Button>
                </div>
            </Modal>


            <Modal activeModal={reject} setActive={setReject}>
                <div className={css.modal}>
                    <h1>You are about to remove the request from {value?.user_firstname} to join your team. Confirm your
                        action? </h1>
                    <Button onClick={() => {
                        dispatch(declineAction(Number(value?.action_id)));
                        setValue(null);
                        setReject(false);
                    }}>Reject request
                    </Button>

                    <Button onClick={() => setReject(false)}>Cancel</Button>
                </div>
            </Modal>


        </div>
    );
}

export {CompanyRequests};
