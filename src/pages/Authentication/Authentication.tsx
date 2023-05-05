import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";

import css from './Authentication.module.css';

import {Button, Form, Input} from "../../components";
import {FormValues, loginSchema} from "../../validators";
import {Auth0Login} from "../../components/ForAuthentication";
import {useAppSelector} from "../../hooks/useAppSelector";
import {fetchLogin, fetchProfile} from "../../store/action-creators";


const Authentication = () => {
    const {loading_login, access_token, error_login} = useAppSelector(state => state.login);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {
        register,
        reset,
        handleSubmit,
        formState: {errors}
    } = useForm<FormValues>({resolver: joiResolver(loginSchema)});


    useEffect(() => {
        if ((!loading_login) && access_token) {
            dispatch(fetchProfile());
        }
    }, [loading_login, access_token, error_login]);

    const login = async (userDataToLogin: FormValues) => {
        await dispatch(fetchLogin(userDataToLogin));
        reset();
    }


    return (
        <div className={css.authentication_container}>
            <div className={css.authentication_container_children}>
                <Form onSubmit={handleSubmit(login)}>
                    <Input placeholder={'Email * '} {...register('user_email')}/>
                    {errors.user_email && <div>{errors.user_email.message}</div>}

                    <Input placeholder={'Password * '} type={"password"} {...register('user_password')}/>
                    {errors.user_password && <div>{errors.user_password.message}</div>}

                    {error_login && <div>{error_login}</div>}
                    {loading_login ? <h1>Loading...</h1> : <Button>LOGIN</Button>}

                    <div>Don't have an account? <span
                        className={css.navigate}
                        onClick={() => navigate('/registration')}>Sing Up right now</span>
                    </div>

                    <h4>OR</h4>
                </Form>
                <Auth0Login/>
            </div>
        </div>
    );
};

export {Authentication};
