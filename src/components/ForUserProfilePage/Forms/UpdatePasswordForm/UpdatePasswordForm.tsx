import React, {useState} from "react";
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {useDispatch} from "react-redux";

import {passwordUpdateValidator} from "../../../../validators";
import {Button, Form, Input} from "../../../GeneralComponnents";
import {FormUpdatePasswordValues, IProfile} from "../../../../types";
import {updateUserPassword} from "../../../../store/action-creators";

type UpdateFormProps = {
    user: IProfile | null,
}

const UpdatePasswordForm = ({user}: UpdateFormProps) => {
    const dispatch = useDispatch();

    const [status, setStatus] = useState('');

    const {
        register,
        handleSubmit,
        reset,
    } = useForm<FormUpdatePasswordValues>({resolver: joiResolver(passwordUpdateValidator)});

    const updatePassword = (data: FormUpdatePasswordValues) => {
        if (data.user_password !== data.user_password_repeat) {
            setStatus('Passwords do not match');
            return;
        }
        dispatch(updateUserPassword(Number(user?.user_id), data));
        reset()
    };

    return (
        <Form onSubmit={handleSubmit(updatePassword)}>
            <Input type={'password'}
                   placeholder={'Your new password'} {...register('user_password')}/>
            <Input type={'password'}
                   placeholder={'Repeat your new password'} {...register('user_password_repeat')}/>
            {status && <div>{status}</div>}
            <Button>Update password</Button>
        </Form>
    );
}

export {UpdatePasswordForm}
