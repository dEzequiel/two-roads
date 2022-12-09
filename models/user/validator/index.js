const Joi = require('joi');

const userSchema = Joi.object({
    username: Joi.string()
            .required()
            .min(5)
            .max(30),
    
    password: Joi.string()
            .required(),

    email: Joi.string()
            .required(),

    role: Joi.string
            .required(),
    
    createdAt: Joi.string()
            .required()
});

module.exports = userSchemaValidator