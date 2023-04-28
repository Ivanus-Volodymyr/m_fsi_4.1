import React from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import css from './Authentication.module.css';

import {Button, Form, Input} from "../../components";
import {FormValues, loginSchema} from "../../validators";
import {Auth0Login} from "../../components/ForAuthentication";


const Authentication = () => {
    const {
        register,
        reset,
        handleSubmit,
        formState: {errors}
    } = useForm<FormValues>({resolver: joiResolver(loginSchema)});

    const login = (obj: FormValues) => {
        console.log(obj);
        reset()
    }


    return (
        <div className={css.authentication_container}>c
            <Form onSubmit={handleSubmit(login)}>
                <Input placeholder={'Email'} {...register('email')}/>
                {errors.email && <div>{errors.email.message}</div>}

                <Input placeholder={'Password'} {...register('password')}/>
                {errors.password && <div>{errors.password.message}</div>}

                <Button>LOGIN</Button>

                <h4>OR</h4>
                <Auth0Login/>
            </Form>
        </div>
    );
};

export {Authentication};
