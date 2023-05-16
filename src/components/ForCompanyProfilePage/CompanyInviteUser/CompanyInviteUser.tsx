import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {useParams} from "react-router-dom";

import css from './CompanyInviteUser.module.css';

import {CompanyUsers, IPagination} from "../../../types";
import {Button, Modal, Pagination} from "../../GeneralComponnents";
import {useAppSelector} from "../../../hooks/useAppSelector";
import {createRequestFromCompanyToUser, fetchUsers} from "../../../store/action-creators";
import {CompanyAction} from "../CompanyAction/CompanyAction";
import {clearActionReducer} from "../../../store/reducers";


const CompanyInviteUser: React.FC = () => {
    const {users, pagination, loading} = useAppSelector(state => state.users);
    const {detail, error} = useAppSelector(state => state.action);

    const dispatch = useDispatch();
    const {id} = useParams();

    const [page, setPage] = useState<number>(1);
    const [modal, setModal] = useState<boolean>(false);
    const [value, setValue] = useState<CompanyUsers | null>(null);


    useEffect(() => {
        dispatch(fetchUsers(page));
    }, [page]);


    useEffect(() => {
        if (detail || error) {
            setTimeout(() => dispatch(clearActionReducer()), 2000)
        }
    }, [detail, error]);


    if (loading) {
        return <h1>Loading...</h1>
    }


    return (
        <div className={css.company_invite_user}>
            <h2>List of users </h2>

            {users.length > 0 && users.map(user =>
                <div className={css.send_invite_block}>
                    <CompanyAction key={user.user_id} user={user}>
                        <Button onClick={() => {
                            dispatch(clearActionReducer())
                            setValue(user);
                            setModal(true);
                        }}>Send invite</Button>
                    </CompanyAction>
                </div>
            )}

            <Pagination
                currentPage={page}
                pagination={pagination as IPagination}
                setPage={setPage}
            />


            <Modal activeModal={modal} setActive={setModal}>
                <div className={css.modal}>
                    <h1>You are about to send an invitation to a user {value?.user_email} to join your company.
                        Confirm your
                        action?</h1>
                    {detail ? <h1>{detail}</h1> :
                        <Button onClick={() => {
                            dispatch(createRequestFromCompanyToUser(Number(id), Number(value?.user_id)))
                        }}>Send an invitation
                        </Button>
                    }

                    <Button onClick={() => setModal(false)}>{detail ? 'Close' : 'Cancel'}</Button>
                    <h1>{error}</h1>
                </div>
            </Modal>
        </div>
    );
};

export {CompanyInviteUser};
