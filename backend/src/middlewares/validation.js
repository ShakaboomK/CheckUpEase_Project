/**
 * The function `validateBody` takes a schema and validates the request body against it, sending a 400
 * status with an error message if validation fails.
 * @param schema - The `schema` parameter in the `validateBody` function is typically a Joi schema
 * object that defines the structure and validation rules for the request body data. It is used to
 * validate the `req.body` object of an incoming HTTP request.
 * @returns If there is an error in validating the request body against the provided schema, the
 * function will return a response with status code 400 and the error message from the validation
 * result. If there is no error, the function will call the next middleware in the chain.
 */
const validateBody = (schema) => (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }
    next();
};
module.exports = { validateBody }