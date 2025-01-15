import Joi from "joi";

export const companyValidator = Joi.object({
    company_name: Joi.string()
        .required()
        .min(3),
    is_visible: Joi.boolean()
        .required(),
});
