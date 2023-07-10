import * as Joi from "joi"

export const schema = Joi.object({
  tell: Joi.string().allow("").max(18),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .allow(""),
})
