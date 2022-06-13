////////////////////////////////////////////
// Import Dependencies
////////////////////////////////////////////
const express = require('express')
const Recipe = require('../models/recipe')
////////////////////////////////////////////
// Create Router
////////////////////////////////////////////
const router = express.Router()

////////////////////////////////////////////
// Routes
////////////////////////////////////////////

router.get('/', (req, res) => {
    res.render('recipe')
})

router.post('/', (req, res) => {
    const food = req.body.food

    const requestURL = `https://api.spoonacular.com/recipes/complexSearch?apiKey=5c5cc82669d14a6c9eaa24e327432d76&query=${food}`
    fetch(requestURL)
    .then((apiResponse) => {
        console.log("Food API Success", food)
        return apiResponse.json()
    })
    .then((jsonData) => {
        console.log("here is the recipe data: ", jsonData)
        const recipeData = jsonData
        res.render('recipe', { recipeData })
    })
    .catch((error) => {
        console.log(error)
        res.json({ error })
    })  
})



////////////////////////////////////////////
// Export Router
////////////////////////////////////////////
module.exports = router