import * as Joi from "joi"

const regAlpha = new RegExp(/^[а-яa-z\s]+$/i)

export const schema = Joi.object({
  name: Joi.string().allow("").max(50).pattern(regAlpha).messages({
    "string.pattern.base": "only alpha characters",
  }),
  nickname: Joi.string().allow("").max(30).pattern(regAlpha).messages({
    "string.pattern.base": "only alpha characters",
  }),
  sername: Joi.string().allow("").max(50).pattern(regAlpha).messages({
    "string.pattern.base": "only alpha characters",
  }),
  sex: Joi.string()
    .pattern(/[man | woman | \s ]/)
    .messages({
      "string.pattern.base": "only man or woman",
    }),
})
