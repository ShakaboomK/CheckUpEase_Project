/* `const Joi = require('joi');` is importing the Joi library into the JavaScript file. Joi is a
popular library used for data validation in JavaScript applications. By requiring 'joi', the code
gains access to the functionality provided by the Joi library, which includes defining schemas for
data validation and performing validation checks on data objects based on those schemas. */
const Joi = require('joi');

// User registration schema
/* The `userRegistrationSchema` is a Joi schema defined for validating user registration data. It
specifies the structure and validation rules for the data that should be provided when a user is
registering. Here's a breakdown of what each field in the schema represents: */
const userRegistrationSchema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
    mobileNumber: Joi.string().pattern(/^[0-9]{10}$/).required(),
    email: Joi.string().email().required(),
    age: Joi.number().integer().min(0)
});

// User login schema
/* The `userLoginSchema` is a Joi schema defined for validating user login data. It specifies the
structure and validation rules for the data that should be provided when a user is attempting to log
in. */
const userLoginSchema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required()
});

// User profile update schema
/* The `userProfileUpdateSchema` is a Joi schema defined for validating user profile update data. It
specifies the structure and validation rules for the data that should be provided when a user is
updating their profile information. Here's a breakdown of what each field in the schema represents: */
const userProfileUpdateSchema = Joi.object({
    firstName: Joi.string().optional(),
    middleName: Joi.string().optional(),
    lastName: Joi.string().optional(),
    age: Joi.number().integer().min(18).optional(),
    gender: Joi.string().valid('Male', 'Female', 'Other').optional(),
    bloodGroup: Joi.string().valid('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-').required(),
    familyMembers: Joi.array().items(
        Joi.object({
            firstName: Joi.string().required(),
            lastName: Joi.string().required(),
            middleName: Joi.string().required(),
            age: Joi.number().integer().min(0).required(),
            bloodGroup: Joi.string().valid('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-').required(),
            gender: Joi.string().valid('Male', 'Female', 'Other').required(),
            results: Joi.array().items(
                Joi.object({
                    resultId: Joi.string().required(),
                    fileUrl: Joi.string().uri().required(),
                    fileType: Joi.string().valid('doc', 'pdf', 'link').required(),
                    uploadedAt: Joi.date().required()
                })
            ).optional()
        })
    ).max(5).optional(),
    address: Joi.string().required()
});

// Diagnostic Center schema
/* The `diagnosticCenterSchema` is a Joi schema defined for validating data related to a diagnostic
center. It specifies the structure and validation rules for the information that should be provided
when defining a diagnostic center. Here's a breakdown of what each field in the schema represents: */
const diagnosticCenterSchema = Joi.object({
    diagnosticCenterId: Joi.string().required(),
    name: Joi.string().required(),
    location: Joi.string().required(),
    address: Joi.string().required(),
    services: Joi.array().items(Joi.string()).required(),
    contactInfo: Joi.string().required(),
    appointments: Joi.array().items(Joi.string()).optional()
});

// Appointment schema
/* The `appointmentSchema` defined in the code snippet is a Joi schema used for validating data related
to appointments. Here's a breakdown of what each field in the schema represents: */
const appointmentSchema = Joi.object({
    appointmentId: Joi.string().required(),
    userId: Joi.string().required(),
    diagnosticCenterId: Joi.string().required(),
    service: Joi.string().required(),
    appointmentDate: Joi.date().required(),
    status: Joi.string().valid('booked', 'completed', 'cancelled').required(),
    paymentId: Joi.string().optional()
});

// Payment schema
/* The `paymentSchema` defined in the code snippet is a Joi schema used for validating data related to
payments. It specifies the structure and validation rules for the information that should be
provided when handling payments. Here's a breakdown of what each field in the schema represents: */
const paymentSchema = Joi.object({
    paymentId: Joi.string().required(),
    userId: Joi.string().required(),
    appointmentId: Joi.string().required(),
    amount: Joi.number().required(),
    paidAt: Joi.date().required(),
    status: Joi.string().valid('successful', 'failed').required()
});


module.exports = {
    userRegistrationSchema,
    userLoginSchema,
    userProfileUpdateSchema,
    diagnosticCenterSchema,
    appointmentSchema,
    paymentSchema
};
