import Joi from "joi";


type FormValues = {
    user_email: string;
    user_password: string;
};

const loginSchema = Joi.object({
    user_email: Joi.string()
        .required()
        .email({tlds: {allow: ['com', 'net']}})
        .regex(new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/))
        .message('Not valid email'),
    user_password: Joi.string()
        .required()
        .min(5)
        .max(30)
        .message('Not valid password')
});
export {loginSchema};
export type {FormValues};
