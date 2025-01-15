import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {useParams} from "react-router-dom";

import css from './CompanyProfileMembers.module.css';

import {useAppSelector} from "../../../hooks/useAppSelector";
import {
    addToAdminList,
    addUserToBlock,
    fetchMembers,
    leaveCompany,
    removeFromAdmin
} from "../../../store/action-creators";
import {CompanyAction} from "../CompanyAction/CompanyAction";
import {Button, Modal} from "../../GeneralComponnents";
import {CompanyUsers} from "../../../types";
import useUserRole from "../../../hooks/useUserRole";

const CompanyProfileMembers: React.FC = () => {
    const {user} = useAppSelector(state => state.profile);
    const {loading, members} = useAppSelector(state => state.companyData);
    const {detail, isLeavedAction} = useAppSelector(state => state.action);

    const dispatch = useDispatch();
    const {id} = useParams();

    const {isOwner} = useUserRole(user, members);


    const [value, setValue] = useState<CompanyUsers | null>(null);
    const [addToAdmin, setAddToAdmin] = useState<boolean>(false);
    const [removeAdminRole, setRemoveAdminRole] = useState<boolean>(false);
    const [deleteUser, setDeleteUser] = useState<boolean>(false);
    const [block, setBlock] = useState<boolean>(false);


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
                            {isOwner && <div className={css.admin_delete}>
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

                                        <Button
                                            onClick={() => {
                                                setValue(member);
                                                setBlock(true);
                                            }}
                                        >Add user to block</Button>
                                    </>
                                }
                            </div>}
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

            <Modal activeModal={block} setActive={setBlock}>
                {value?.action !== 'admin' ?
                    <div className={css.modal}>
                        <h1>You are about to add this user {value?.user_firstname} to block list.
                            Confirm your action? </h1>
                        <Button onClick={() => {
                            dispatch(addUserToBlock(Number(value?.action_id)));
                            setValue(null);
                            setBlock(false);
                        }}>Add user to block
                        </Button>

                        <Button onClick={() => setBlock(false)}>Cancel</Button>
                    </div> :
                    <div className={css.modal}>
                        <h1>This user is the administrator. First, remove administrator rights for this user</h1>
                        <Button onClick={() => setBlock(false)}>I understand</Button>
                    </div>
                }
            </Modal>


        </div>
    );
};

export {CompanyProfileMembers};
