import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {useNavigate} from "react-router-dom";

import css from './CreateCompany.module.css';

import {Button, Form, Input, Modal} from "../../GeneralComponnents";
import {useAppSelector} from "../../../hooks/useAppSelector";
import {ICompanyDataToCreate} from "../../../types";
import {companyValidator} from "../../../validators";
import {createOneCompany} from "../../../store/action-creators";
import {clearCompanyState} from "../../../store/reducers/companiesReducer";

const CreateCompany: React.FC = () => {
    const {
        oneCompanyLoading,
        oneCompanyError,
        oneCompanyId,
    } = useAppSelector(state => state.companies);

    const {
        handleSubmit,
        register,
        reset,
    } = useForm<ICompanyDataToCreate>({resolver: joiResolver(companyValidator)});


    const [active, setActive] = useState<boolean>(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();


    const createNewCompany = (company: ICompanyDataToCreate) => {
        dispatch(createOneCompany(company));
        reset();
    }

    const modalOpen = async () => {
        dispatch(clearCompanyState());
        setActive(!active)
    }

    return (
        <div className={css.create_company_container}>
            <div>
                <Button onClick={() => modalOpen()}>Create new Company</Button>
            </div>

            <Modal activeModal={active} setActive={setActive}>
                <div className={css.form}>
                    <span>
                        Create your own company. To do this, you only need to specify the name of the company and its visibility to everyone
                    </span>
                    <Form onSubmit={handleSubmit(createNewCompany)}>
                        <Input type={'text'} {...register('company_name')} placeholder={'Company Name'}/>

                        <div className={css.checkbox}>
                            <span>Make the company visible:</span>
                            <Input type={'checkbox'} defaultChecked={true} {...register('is_visible')}/>
                        </div>

                        {oneCompanyId ?
                            <div className={css.created}>
                                <span>Company successfully created!</span>
                                <Button onClick={() => navigate(`/company-profile/${oneCompanyId}`)}>
                                    Go to the created company
                                </Button>
                            </div> :
                            <span>{oneCompanyLoading ? <h2>Loading....</h2> :
                                <Button>Create my own company</Button>}</span>
                        }
                        {oneCompanyError && <h2>{oneCompanyError}</h2>}
                    </Form>
                    <Button onClick={() => setActive(!active)}>Cancel</Button>
                </div>
            </Modal>
        </div>
    );
};

export {CreateCompany};
