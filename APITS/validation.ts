const Joi = require("@hapi/joi");
export const authSchema = Joi.object({
  id: Joi.number().required(),
  name: Joi.string().min(2).required(),
  contact: Joi.number().min(5).required(),
});
