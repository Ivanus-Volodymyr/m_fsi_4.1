import React from "react";
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";

import {Button, Form, Input} from "../../../GeneralComponnents";
import {FormUpdateAvatarValues, IProfile} from "../../../../types";
import {updateUserAvatar} from "../../../../store/action-creators";
import {useAppSelector} from "../../../../hooks/useAppSelector";


type UpdateFormProps = {
    user: IProfile | null,
}

const UpdateAvatarForm = ({user}: UpdateFormProps) => {
    const {oneUserError, oneUserLoading} = useAppSelector(state => state.users);
    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        reset
    } = useForm<FormUpdateAvatarValues>();

    const updateAvatar = (data: FormUpdateAvatarValues) => {
        const formData = new FormData();
        formData.append("file", data.file[0]);

        dispatch(updateUserAvatar(Number(user?.user_id), formData));
        reset();
    };
    return (
        <Form onSubmit={handleSubmit(updateAvatar)}>
            <Input type={'file'}
                   placeholder={'Avatar'} {...register('file', {required: true})}/>
            <Button>Update avatar</Button>
            {oneUserLoading && <h3>Loading......</h3>}
            {oneUserError && <h3>{oneUserError}</h3>}
        </Form>
    );
}

export {UpdateAvatarForm}
