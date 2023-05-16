import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";

import css from './UserCompanies.module.css';
import {useAppSelector} from "../../../hooks/useAppSelector";

import {fetchUserCompanies} from "../../../store/action-creators/user-data/userDataActionCreator";
import {UserAction} from "../UserAction/UserAction";
import {Button, Modal} from "../../GeneralComponnents";
import {UserCompany} from "../../../types";
import {leaveCompany} from "../../../store/action-creators";


const UserCompanies: React.FC = () => {
    const {companies, loading} = useAppSelector(state => state.userData);
    const {error, isLeavedAction} = useAppSelector(state => state.action);


    const [modal, setModal] = useState<boolean>(false);
    const [value, setValue] = useState<UserCompany | null>(null);

    const dispatch = useDispatch();
    const {id} = useParams();
    const navigate = useNavigate();


    useEffect(() => {
        dispatch(fetchUserCompanies(Number(id)));
    }, [id, isLeavedAction]);


    if (loading) {
        return <h1 className={css.user_companies}>Loading...</h1>
    }

    return (
        <div className={css.user_companies_container}>
            <div className={css.user_companies_header}>Companies list of user with id {id}</div>
            <div className={css.user_companies}>
                {companies.length > 0 ? companies.map(company =>
                    <UserAction key={company.company_id} company={company}>
                        <div className={css.go_leave}>
                            <Button onClick={() => navigate(`/company-profile/${company?.company_id}/`)}>Go to the
                                company</Button>
                            {company.action !== 'owner' &&
                                <Button onClick={() => {
                                    setModal(true)
                                    setValue(company);
                                }}>Leave Company</Button>}
                        </div>
                    </UserAction>
                ) : <h1>No any companies</h1>
                }
            </div>


            <Modal activeModal={modal} setActive={setModal}>
                <div className={css.modal}>
                    <h1>You are about to leave the company. Confirm your action?</h1>
                    <Button onClick={() => {
                        dispatch(leaveCompany(Number(value?.action_id)));
                        setModal(false);
                        setValue(null);
                    }}>Leave company</Button>
                    <Button onClick={() => setModal(false)}>Cancel</Button>
                    <h1>{error}</h1>
                </div>
            </Modal>
        </div>
    );
};

export {UserCompanies};
