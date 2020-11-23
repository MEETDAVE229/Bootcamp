const Joi = require("@hapi/joi");

const authSchema = Joi.object({
  id: Joi.number().required(),
  name: Joi.string().min(2).required(),
  contact: Joi.number().min(5).required(),
});

module.exports = {
  authSchema,
};
