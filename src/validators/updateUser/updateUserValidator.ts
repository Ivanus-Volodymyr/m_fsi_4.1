import Joi from "joi";
export const generalValidator = Joi.object({
    user_firstname: Joi.optional(),
    user_lastname: Joi.optional(),
    user_city: Joi.optional(),
    user_phone: Joi.optional()
});

export const passwordUpdateValidator = Joi.object({
    user_password: Joi.string()
        .min(4)
        .max(40)
        .required(),
    user_password_repeat: Joi.string()
        .min(4)
        .max(40)
        .required(),
});
