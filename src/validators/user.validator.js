import Joi from "joi";

const userValidator = Joi.object({
    username: Joi.string().regex(/^[a-zA-Z]\w{1,19}$/).required().trim().messages({
        'string.pattern.base': 'first char must be letter 2 max 20 chars',
    }),
    password: Joi.string().regex(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\s])[^\s]{8,20}$/).required().messages({
        'string.pattern.base': 'password must contain 1 number (0-9),' +
            'uppercase letter, ' +
            'lowercase letter 1 non-alpha, ' +
            'numeric password min 8 max 20 ch'
    }),
});

export {
    userValidator,
}