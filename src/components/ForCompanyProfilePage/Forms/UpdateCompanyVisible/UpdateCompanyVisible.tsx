import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";

import css from './UpdateCompanyVisible.module.css';

import {ICompanyDetails} from "../../../../types";
import {Button, Form, Input} from "../../../GeneralComponnents";
import {updateVisible} from "../../../../store/action-creators";
import {useAppSelector} from "../../../../hooks/useAppSelector";


interface UpdateCompanyVisibleProps {
    company: ICompanyDetails | null
}

const UpdateCompanyVisible: React.FC<UpdateCompanyVisibleProps> = ({company}) => {
    const {oneCompanyLoading, oneCompanyError} = useAppSelector(state => state.companies);

    const {
        handleSubmit,
        register,
        reset,
    } = useForm();

    const dispatch = useDispatch();

    const updateCompanyVisible = (formData: Partial<ICompanyDetails>) => {
        dispatch(updateVisible(formData, Number(company?.company_id)));
        reset();
    }

    return (
        <div className={css.visible_container}>
            <div className={css.visible_container_text}>Change the visibility of the company. By default, the team is
                visible to everyone. To change it,
                check or uncheck the "checkbox".
            </div>
            <Form onSubmit={handleSubmit(updateCompanyVisible)} className={css.visible_container_form}>
                <div>
                    <span>Make the company visible:</span>
                    <Input type={'checkbox'} defaultChecked={false} {...register('is_visible')}
                           className={css.visible_container_input}/>
                    {oneCompanyError}
                </div>
                {oneCompanyLoading ? <h4>Updating in process...</h4> : <Button>Update company Visible</Button>}
            </Form>
        </div>
    );
};

export {UpdateCompanyVisible};
