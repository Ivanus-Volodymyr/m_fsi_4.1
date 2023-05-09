import React, {useEffect, useState} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {joiResolver} from "@hookform/resolvers/joi";

import css from './CompaniesList.module.css';
import {Companies} from "../../components/ForCompaniesListPage";
import {Button, Form, Input, Modal} from "../../components";
import {useAppSelector} from "../../hooks/useAppSelector";
import {companyValidator} from "../../validators";
import {ICompanyDataToCreate} from "../../types";

const CompaniesList: React.FC = () => {
    const {
        oneCompanyLoading,
        oneCompanyError,
        oneCompany
    } = useAppSelector(state => state.companies);

    const {
        handleSubmit,
        register,
        reset,
        formState: {errors}
    } = useForm<ICompanyDataToCreate>({resolver: joiResolver(companyValidator)});


    const [active, setActive] = useState<boolean>(false);
    const dispatch = useDispatch();

    useEffect(() => {

    }, [oneCompanyLoading])


    const createNewCompany = (company: ICompanyDataToCreate) => {
        console.log(company);
    }


    return (
        <div className={css.companies_list_container}>
            <div>
                <Button onClick={() => setActive(!active)}>Create new Company</Button>
            </div>
            <Companies/>

            <Modal activeModal={active} setActive={setActive}>
                <div className={css.form}>
                    <Form onSubmit={handleSubmit(createNewCompany)}>
                        <Input type={'text'} {...register('company_name')}/>
                        <div className={css.checkbox}>
                            <span>Make the company visible:</span>
                            <Input type={'checkbox'} {...register('is_visible')}/>
                        </div>
                        <Button>Create new Company</Button>
                    </Form>
                    <Button onClick={() => setActive(!active)}>Cancel</Button>
                </div>
            </Modal>
        </div>
    );
};

export {CompaniesList};
