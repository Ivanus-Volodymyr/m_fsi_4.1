import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {useParams} from "react-router-dom";

import css from './BlockedUsers.module.css';

import {useAppSelector} from "../../../hooks/useAppSelector";
import {fetchBlockedUsers, removeUserFromBlock} from "../../../store/action-creators";
import {Button, Modal} from "../../GeneralComponnents";
import {CompanyUsers} from "../../../types";
import {CompanyAction} from "../CompanyAction/CompanyAction";

const BlockedUsers: React.FC = () => {
    const {blockedUsers, loading} = useAppSelector(state => state.companyData);
    const {detail, error} = useAppSelector(state => state.action);


    const dispatch = useDispatch();
    const {id} = useParams();

    const [modal, setModal] = useState<boolean>(false);
    const [value, setValue] = useState<CompanyUsers | null>(null);

    useEffect(() => {
        dispatch(fetchBlockedUsers(Number(id)));
    }, [id, detail])


    if (loading) {
        return <h1>Loading ...</h1>
    }

    return (
        <div className={css.company_blocked_list_container}>
            <div className={css.blocked_list_header}>List of blocked users for company with id {id}</div>

            <div className={css.blocked_users}>
                {blockedUsers.length > 0 ? blockedUsers.map(blocked =>
                        <CompanyAction key={blocked.user_id} user={blocked}>
                            <Button
                                onClick={() => {
                                    setValue(blocked);
                                    setModal(true);
                                }}
                            >Unlock the user</Button>
                        </CompanyAction>
                    ) :
                    <h2>No any blocked users for this company!</h2>
                }
            </div>


            <Modal activeModal={modal} setActive={setModal}>
                <div className={css.modal}>
                    <h1>You are about to remove a user {value?.user_firstname} from block list.
                        Confirm your action? </h1>
                    <Button onClick={() => {
                        dispatch(removeUserFromBlock(Number(value?.action_id)));
                        setValue(null);
                        setModal(false);
                    }}>Unlock the user
                    </Button>

                    <Button onClick={() => setModal(false)}>Cancel</Button>
                    <h1>{error}</h1>
                </div>
            </Modal>
        </div>
    );
};

export {BlockedUsers};
