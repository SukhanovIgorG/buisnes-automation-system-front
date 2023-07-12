import Joi from 'joi';

export const schema = Joi.object({
  login: Joi.string().required().max(45),
  password: Joi.string().required().min(6).max(15),
});
