import Joi from "joi"

export const schema = Joi.object({
  textarea: Joi.string().allow(""),
})
