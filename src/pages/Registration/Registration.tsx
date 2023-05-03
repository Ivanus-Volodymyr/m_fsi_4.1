import React, {useEffect, useState} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {useDispatch} from "react-redux";

import css from './Registration.module.css';

import {Button, Form, Input} from "../../components";
import {Auth0Login} from "../../components/ForAuthentication";
import {FormRegistrationValues, registrationSchema} from "../../validators";
import {RegistrationValues} from "../../types";
import {useAppSelector} from "../../hooks/useAppSelector";
import {fetchRegistration} from "../../store/action-creators";
import {useNavigate} from "react-router-dom";

const Registration: React.FC = () => {
    const {user_id, loading, error} = useAppSelector(state => state.registration);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [passwordRepeatError, setPasswordRepeatError] = useState<string>('');
    const [registrationSuccess, setRegistrationSuccess] = useState<boolean>(false);

    useEffect(() => {
        if (user_id) {
            setRegistrationSuccess(!registrationSuccess);
            setTimeout(() => {
                setRegistrationSuccess(!registrationSuccess);
                navigate('/auth');
            }, 5000);
        }
    }, [loading, user_id, error])


    const {
        handleSubmit,
        register,
        reset,
        formState: {errors}
    } = useForm<FormRegistrationValues>({resolver: joiResolver(registrationSchema)});

    const registration = async (user: RegistrationValues) => {
        if (!(user.user_password === user.user_password_repeat)) {
            setPasswordRepeatError('The entered passwords do not match');
            return;
        }
        await dispatch(fetchRegistration(user));
        if ((!loading) && user_id) {
            reset();
        }
    }


    return (
        <div className={css.registration_container}>
            {registrationSuccess ? <div className={css.redirect_text}>
                    You have successfully registered on the platform. You will now be redirected to the login page and
                    authorized to.
                </div> :
                <Form onSubmit={handleSubmit(registration)}>
                    <Input placeholder={'First name *'} {...register('user_firstname')}/>
                    {errors.user_firstname && <div>{errors.user_firstname.message}</div>}

                    <Input placeholder={'Name * '} {...register('user_lastname')}/>
                    {errors.user_lastname && <div>{errors.user_lastname.message}</div>}

                    <Input placeholder={'Email * '} {...register('user_email')}/>
                    {errors.user_email && <div>{errors.user_email.message}</div>}

                    <Input placeholder={'Password * '} type={"password"} {...register('user_password')}/>
                    {errors.user_password && <div>{errors.user_password.message}</div>}

                    <Input placeholder={'Repeat password * '} type={"password"} {...register('user_password_repeat')}/>
                    {errors.user_password_repeat && <div>{errors.user_password_repeat.message}</div>}
                    {passwordRepeatError && <div>{passwordRepeatError}</div>}

                    {error && <div>{error}</div>}
                    {loading ? <h1>Loading ... </h1> : <Button>Sing Up</Button>}

                    <h4>OR</h4>
                    <Auth0Login/>
                </Form>
            }
        </div>
    );
};

export {Registration};
