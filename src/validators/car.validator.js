import Joi from "joi";

import {modelRegex} from "../constants";

const carValidator = Joi.object({
    model: Joi.string().regex(modelRegex).required().messages({
        'string.pattern.base': 'Тільки букви мін 1 символ максимум 20'
    }),
    price: Joi.number().min(0).max(1000000).required(),
    year: Joi.number().min(1990).max(new Date().getFullYear()).required(),
})

export {
    carValidator,
}