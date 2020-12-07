const express = require('express');
const routes = express.Router();
const AddRecipeMiddleware = require('../middlewares/AddRecipeMiddleware');
const RecipeController = require('../controllers/RecipeController');



routes.get('/', RecipeController.index);
routes.post('/recipe-add', AddRecipeMiddleware, RecipeController.addRecipe);

module.exports = routes;
