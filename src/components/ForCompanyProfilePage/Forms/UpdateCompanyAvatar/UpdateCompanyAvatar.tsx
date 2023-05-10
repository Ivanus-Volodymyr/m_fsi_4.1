import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";

import {Button, Form, Input} from "../../../GeneralComponnents";
import {useAppSelector} from "../../../../hooks/useAppSelector";
import {FormUpdateAvatarValues, ICompanyDetails} from "../../../../types";
import {updateAvatar} from "../../../../store/action-creators";


interface UpdateCompanyAvatarProps {
    company: ICompanyDetails | null
}


const UpdateCompanyAvatar: React.FC<UpdateCompanyAvatarProps> = ({company}) => {
    const {oneCompanyLoading, oneCompanyError} = useAppSelector(state => state.companies);
    const {
        handleSubmit,
        register,
        reset,
    } = useForm<FormUpdateAvatarValues>();

    const dispatch = useDispatch();


    const updateCompanyAvatar = (formValues: FormUpdateAvatarValues) => {
        const formData = new FormData();
        formData.append("file", formValues.file[0]);
        dispatch(updateAvatar(formData, Number(company?.company_id)));
        reset();
    }


    return (
        <Form onSubmit={handleSubmit(updateCompanyAvatar)}>
            <Input type={'file'} placeholder={'Avatar'} {...register('file', {required: true})}/>
            {oneCompanyLoading ? <h4>Updating in process ....</h4> : <Button>Update company Avatar</Button>}
            {oneCompanyError}
        </Form>
    );
};

export {UpdateCompanyAvatar};
