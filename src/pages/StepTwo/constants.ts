import * as Joi from "joi"

export const schema = Joi.object({
  advantages: Joi.array(),
  checkbox: Joi.object({
    one: Joi.any(),
    two: Joi.any(),
    tree: Joi.any(),
  }),
  radio: Joi.number().allow(""),
})
