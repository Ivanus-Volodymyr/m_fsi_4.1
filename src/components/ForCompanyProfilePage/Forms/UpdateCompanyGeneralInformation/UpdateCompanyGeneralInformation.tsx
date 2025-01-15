import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";

import {Button, Form, Input} from "../../../GeneralComponnents";
import {ICompanyDetails} from "../../../../types";
import {updateGeneralInfo} from "../../../../store/action-creators";
import {useAppSelector} from "../../../../hooks/useAppSelector";


interface UpdateCompanyGeneralInformationProps {
    company: ICompanyDetails | null
}

const UpdateCompanyGeneralInformation: React.FC<UpdateCompanyGeneralInformationProps> = ({company}) => {
    const {oneCompanyLoading, oneCompanyError} = useAppSelector(state => state.companies);

    const {
        handleSubmit,
        register,
        reset,
    } = useForm();

    const dispatch = useDispatch();


    const updateCompanyGeneralInformation = (formData: Partial<ICompanyDetails>) => {
        const dataToUpdate = {
            company_name: formData.company_name ? formData.company_name : company?.company_name,
            company_title: formData.company_title ? formData.company_title : company?.company_title,
            company_description: formData.company_description ? formData.company_description : company?.company_description,
            company_city: formData.company_city ? formData.company_city : company?.company_city,
            company_phone: formData.company_phone ? formData.company_phone : company?.company_phone,
        }
        dispatch(updateGeneralInfo(dataToUpdate, Number(company?.company_id)));
        reset();
    }

    return (
        <Form onSubmit={handleSubmit(updateCompanyGeneralInformation)}>
            <Input type={"text"} placeholder={'Company Name'} {...register('company_name')}/>
            <Input type={"text"} placeholder={'Company Title'} {...register('company_title')}/>
            <Input type={"text"} placeholder={'Company Description'} {...register('company_description')}/>
            <Input type={"text"} placeholder={'Company City'} {...register('company_city')}/>
            <Input type={"text"} placeholder={'Company Phone'} {...register('company_phone')}/>
            {oneCompanyLoading ? <h4>Updating in process ....</h4> : <Button>Update general information</Button>}

            <div>{oneCompanyError}</div>
        </Form>
    );
};

export {UpdateCompanyGeneralInformation};
