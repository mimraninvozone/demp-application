const joi = require('@hapi/joi');
const helper_functions = require('../helpers/HelperFunctions');


const rules = joi.object({
    title: joi.required(),
    ingredients: joi.required(),
    directions: joi.required()
})

const AddRecipeMiddleware = async (req, res, next) => {
    const {error} = await rules.validate(req.body);
    if(error) return helper_functions.errorResponse(res, error.details);
    next();
}

module.exports = AddRecipeMiddleware;
