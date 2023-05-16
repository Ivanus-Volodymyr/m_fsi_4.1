import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {useParams} from "react-router-dom";

import css from './CompanyProfileMembers.module.css';

import {useAppSelector} from "../../../hooks/useAppSelector";
import {fetchMembers} from "../../../store/action-creators";
import {CompanyAction} from "../CompanyAction/CompanyAction";
import {Button, Modal} from "../../GeneralComponnents";
import {
    addToAdminList,
    leaveCompany,
    removeFromAdmin
} from "../../../store/action-creators";
import {CompanyUsers} from "../../../types";

const CompanyProfileMembers: React.FC = () => {
    const {loading, members} = useAppSelector(state => state.companyData);
    const {detail, isLeavedAction} = useAppSelector(state => state.action);

    const dispatch = useDispatch();
    const {id} = useParams();


    const [value, setValue] = useState<CompanyUsers | null>(null);
    const [addToAdmin, setAddToAdmin] = useState<boolean>(false);
    const [removeAdminRole, setRemoveAdminRole] = useState<boolean>(false);
    const [deleteUser, setDeleteUser] = useState<boolean>(false);


    useEffect(() => {
        dispatch(fetchMembers(Number(id)));
    }, [id]);


    useEffect(() => {
        dispatch(fetchMembers(Number(id)));
    }, [detail, isLeavedAction]);


    if (loading) {
        return <h1>Loading....</h1>
    }

    return (
        <div className={css.company_members_container}>
            <div className={css.members_header}>Members of company {id}</div>
            <div className={css.members}>
                {members.length > 0 ? members.map(member =>

                        <CompanyAction key={member.user_id} user={member}>
                            <div className={css.admin_delete}>
                                {member.action !== 'owner' &&
                                    <>
                                        {member.action !== 'admin' ?
                                            <Button onClick={() => {
                                                setAddToAdmin(true);
                                                setValue(member);
                                            }}>Add admin role</Button> :
                                            <Button onClick={() => {
                                                setRemoveAdminRole(true);
                                                setValue(member);
                                            }}>Take away the admin role</Button>
                                        }
                                        <Button onClick={() => {
                                            setValue(member);
                                            setDeleteUser(true);
                                        }
                                        }>
                                            Remove a user from the company
                                        </Button>
                                    </>
                                }
                            </div>
                        </CompanyAction>) :

                    <h2>No any Members for this company!</h2>
                }
            </div>


            <Modal activeModal={addToAdmin} setActive={setAddToAdmin}>
                <div className={css.modal}>
                    <h1>You want to add the admin role to a user {value?.user_firstname}. Confirm your
                        action?</h1>
                    <Button onClick={() => {
                        dispatch(addToAdminList(Number(value?.action_id)));
                        setValue(null);
                        setAddToAdmin(false);
                    }}>Add to admin
                    </Button>

                    <Button onClick={() => setAddToAdmin(false)}>Cancel</Button>
                </div>
            </Modal>


            <Modal activeModal={removeAdminRole} setActive={setRemoveAdminRole}>
                <div className={css.modal}>
                    <h1>You are about to remove the request from {value?.user_firstname} to join your team. Confirm your
                        action? </h1>
                    <Button onClick={() => {
                        dispatch(removeFromAdmin(Number(value?.action_id)));
                        setValue(null);
                        setRemoveAdminRole(false);
                    }}>Remove from admin
                    </Button>

                    <Button onClick={() => setRemoveAdminRole(false)}>Cancel</Button>
                </div>
            </Modal>


            <Modal activeModal={deleteUser} setActive={setDeleteUser}>
                <div className={css.modal}>
                    <h1>You are about to remove a user {value?.user_firstname} from your company.
                        Confirm your action? </h1>
                    <Button onClick={() => {
                        dispatch(leaveCompany(Number(value?.action_id)));
                        setValue(null);
                        setDeleteUser(false);
                    }}>Delete user from my company
                    </Button>

                    <Button onClick={() => setDeleteUser(false)}>Cancel</Button>
                </div>
            </Modal>


        </div>
    );
};

export {CompanyProfileMembers};
