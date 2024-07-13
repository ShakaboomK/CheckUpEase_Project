const Joi = require('joi')


const userSchema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    email: Joi.string().email().required(),
    age: Joi.number().integer().min(0).required(),
    mobileNumber: Joi.string().pattern(/^\d{10}$/).required()  // 10 digit mobile number
});
module.exports = { userSchema };

