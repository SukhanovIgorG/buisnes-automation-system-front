import * as Joi from "joi"

const regAlpha = new RegExp(/^[а-яa-z\s]+$/i)
export const schema = Joi.object({
  name: Joi.string().allow("").max(50).pattern(regAlpha).messages({
    "string.pattern.base": "only alpha characters",
  }),
  date: Joi.date().messages({
    "date": "Дата должна быть реальная",
  }),
  sername: Joi.string().allow("").max(50).pattern(regAlpha).messages({
    "string.pattern.base": "only alpha characters",
  }),
  workers: Joi.string()
})
