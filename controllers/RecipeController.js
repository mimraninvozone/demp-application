const { Pool, Client } = require('pg')
const connectionString = require('../config/db');
const helper_functions = require('../helpers/HelperFunctions');
const client = new Client({
    connectionString,
})

exports.index = (req, res) => {
    client.connect()
    client.query('SELECT NOW()', (err, res) => {
    console.log(err, res)
    client.end()
    })
    return res.send('welcome to recipe application');
}


exports.addRecipe = async (req, res) => {
    let text = 'INSERT INTO recipes(title, ingredients, directions) VALUES($title, $ingredients, $directions) RETURNING *'
    let values = [req.body.title, req.body.ingredients, req.body.directions];
    try {
        let recipe = await client.query(text, values);
        console.log(recipe);
        return helper_functions.successResponse(res, recipe);
    } catch (error) {
        return helper_functions.errorResponse(res)
    }
}
