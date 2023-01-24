import Joi from "joi";

const carValidator = Joi.object({
    brand: Joi.string().regex(/^[a-zA-Zа-яА-яіІїЇ]{1,20}$/).required().messages({
        'string.pattern.base': 'Must be only letters from one to twenty',
    }),
    price: Joi.number().min(0).max(1_000_000).required(),
    year: Joi.number().min(1990).max(new Date().getFullYear()).required(),
})

export {
    carValidator,
}