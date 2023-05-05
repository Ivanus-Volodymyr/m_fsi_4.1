import React from "react";
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {useDispatch} from "react-redux";

import {generalValidator} from "../../../../validators";
import {Button, Form, Input} from "../../../GeneralComponnents";
import {FormUpdateGeneralInfoValues, IProfile} from "../../../../types";
import {updateUserGeneralInfo} from "../../../../store/action-creators";

type UpdateFormProps = {
    user: IProfile | null,
}

const UpdateGeneralInfoForm = ({user}: UpdateFormProps) => {
    const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        reset,
    } = useForm<FormUpdateGeneralInfoValues>({resolver: joiResolver(generalValidator)});

    const updateGeneralInformation = async (formData: FormUpdateGeneralInfoValues) => {
        const updatedData = {
            user_firstname: formData.user_firstname ? formData.user_firstname : user?.user_firstname as string,
            user_lastname: formData.user_lastname ? formData.user_lastname : user?.user_lastname as string,
            user_city: formData.user_city ? formData.user_city : user?.user_city as string,
            user_phone: formData.user_phone ? formData.user_phone : user?.user_phone as string,
        }

        dispatch(updateUserGeneralInfo(Number(user?.user_id), updatedData));
        reset();
    };

    return (
        <Form onSubmit={handleSubmit(updateGeneralInformation)}>
            <Input type={'text'}
                   placeholder={'First name'} {...register('user_firstname')}/>
            <Input type={'text'}
                   placeholder={'Last name'} {...register('user_lastname')}/>
            <Input type={'text'} placeholder={'City'} {...register('user_city')}/>
            <Input type={'text'} placeholder={'Phone'} {...register('user_phone')}/>
            <Button>Update general information</Button>
        </Form>
    );
}

export {UpdateGeneralInfoForm}
