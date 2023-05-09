import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";

import css from './CompanyProfile.module.css';
import {useAppSelector} from "../../hooks/useAppSelector";
import {deleteCompany, fetchOneCompany} from "../../store/action-creators";
import {Button, Modal} from "../../components";
import {CreateCompany} from "../../components/ForCompaniesListPage";
import {UpdateCompanyGeneralInformation} from "../../components/ForCompanyProfilePage";
import {clearCompanyState} from "../../store/reducers/companiesReducer";

const CompanyProfile: React.FC = () => {
    const {user} = useAppSelector(state => state.profile);
    const {
        loading,
        oneCompany,
        oneCompanyLoading,
        isDeletedCompany,
    } = useAppSelector(state => state.companies);

    const dispatch = useDispatch();
    const {id} = useParams();
    const navigate = useNavigate();

    const [modal, setModal] = useState<boolean>(false);
    const [update, setUpdate] = useState<boolean>(false);
    const [status, setStatus] = useState<string>('');


    useEffect(() => {
        dispatch(fetchOneCompany(Number(id)));
    }, [id]);


    useEffect(() => {
        if (isDeletedCompany) {
            setStatus('Company was DELETED!')
            dispatch(clearCompanyState());
            setTimeout(() => {
                setStatus('');
                navigate('/companies-list')
            }, 3000);
        }
    }, [isDeletedCompany]);

    const deleteCompanyById = () => {
        dispatch(deleteCompany(Number(oneCompany?.company_id)));
    }


    return (
        <div className={css.company_profile_container}>
            {loading ? <h1>Loading ....</h1> :
                <div className={css.company_detail_block}>
                    <CreateCompany/>

                    <div className={css.company_detail_block_header}>
                        <div>Company: {oneCompany?.company_name}</div>
                        {oneCompany?.company_owner.user_id === user?.user_id &&
                            <Button onClick={() => setModal(true)}>Delete this Company</Button>}
                    </div>


                    <Modal activeModal={modal} setActive={setModal}>
                        <div className={css.modal}>
                            <h1>You are going to delete this company permanently. Are you really sure about
                                this?</h1>
                            {oneCompanyLoading ? <h4>Loading ...</h4> :
                                <div>
                                    {status ? `${status}` :
                                        <div className={css.buttons}>
                                            <Button onClick={() => deleteCompanyById()}>
                                                <h2>Yes, I want to delete this company!</h2>
                                            </Button>
                                            <Button onClick={() => setModal(false)}><h2>No!</h2></Button>
                                        </div>
                                    }
                                </div>
                            }
                        </div>
                    </Modal>


                    <div className={css.company_detail_block_main}>
                        <div className={css.company_avatar}>
                            <img src={oneCompany?.company_avatar ? oneCompany.company_avatar : ''}
                                 alt="company_avatar"/>
                        </div>

                        <div className={css.company_info}>
                            <div>
                                {oneCompany?.company_owner.user_id === user?.user_id &&
                                    <Button onClick={() => setUpdate(!update)}>
                                        {!update ? 'Update this Company' : "Cancel Updating"}
                                    </Button>}
                            </div>

                            {update ?
                                <div className={css.update_company_container}>
                                    <div>
                                        <span>Update general information</span>
                                        <UpdateCompanyGeneralInformation company={oneCompany}/>
                                    </div>
                                    <div>
                                        <span>Update Visible</span>
                                    </div>
                                    <div>
                                        <span>Update Avatar</span>
                                    </div>
                                </div> :
                                <div className={css.company_information}>
                                    <div>ID: {oneCompany?.company_id ? oneCompany?.company_id : "None"}</div>
                                    <div>Name: {oneCompany?.company_name ? oneCompany?.company_name : 'None'}</div>
                                    <div>Description: {oneCompany?.company_description ? oneCompany?.company_description : 'None'}</div>
                                    <div>City: {oneCompany?.company_city ? oneCompany.company_city : "None"}</div>
                                    <div>Owner: {oneCompany?.company_owner.user_firstname ? oneCompany?.company_owner.user_firstname : "None"}</div>
                                    <div>Is Visible?: {oneCompany?.is_visible ? "Yes" : "No"}</div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export {CompanyProfile};
