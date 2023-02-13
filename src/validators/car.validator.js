import Joi from "joi";

const carValidator = Joi.object({
    brand: Joi.string().regex(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/).required().trim().messages({
        'string.pattern.base': '"brand" must be from 1 to 20 letters',
    }),
    price: Joi.number().min(0).max(1_000_000).required(),
    year: Joi.number().min(1990).max(new Date().getFullYear()).required(),
});

export {
    carValidator,
}