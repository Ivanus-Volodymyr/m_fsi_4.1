import Joi from "joi";

export type FormRegistrationValues = {
    user_firstname: string;
    user_lastname: string;
    user_email: string;
    user_password: string;
    user_password_repeat: string;
};

export const registrationSchema = Joi.object({
    user_firstname: Joi.string()
        .min(2)
        .required(),
    user_lastname: Joi.string()
        .min(2)
        .required(),
    user_email: Joi.string()
        .email({tlds: {allow: ['com', 'net']}})
        .regex(new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/))
        .message('Not valid email'),
    user_password: Joi.string()
        .min(8)
        .max(40)
        .required(),
    user_password_repeat: Joi.string()
        .min(8)
        .max(40)
        .required()
})

