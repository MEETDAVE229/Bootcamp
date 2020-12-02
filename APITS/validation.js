"use strict";
exports.__esModule = true;
exports.authSchema = void 0;
var Joi = require("@hapi/joi");
exports.authSchema = Joi.object({
    id: Joi.number().required(),
    name: Joi.string().min(2).required(),
    contact: Joi.number().min(5).required()
});
