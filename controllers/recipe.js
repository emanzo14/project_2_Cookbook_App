////////////////////////////////////////////
// Import Dependencies
////////////////////////////////////////////
const express = require('express')
const Recipe = require('../models/recipe')
const Results = require('../models/results')
// const fetch = require('node-fetch')
////////////////////////////////////////////
// Create Router
////////////////////////////////////////////
const router = express.Router()

////////////////////////////////////////////
// Router Middleware
////////////////////////////////////////////
// create some middleware to protect these routes
// Authorization middleware
router.use((req, res, next) => {
	// checking the loggedin boolean of our session
	if (req.session.loggedIn) {
		// if they're logged in, go to the next thing(thats the controller)
		next()
	} else {
		// if they're not logged in, send them to the login page
		res.redirect('/user/login')
	}
})

// index route
router.get('/recipes', (req, res) => {
    res.render('recipe')
})

router.get('/', (req, res) => {
	Recipe.find({})
		.then((recipes) => {
			const username = req.session.username
			const loggedIn = req.session.loggedIn
			
			res.render('recipe', { recipes })
		})
		.catch((error) => {
			console.log(error)
			res.json({ error })
		})
})


router.post('/', (req, res) => {
    const food = req.body.food

    const requestURL = `https://api.spoonacular.com/recipes/complexSearch?apiKey=88e9019c36604c9ba379953a6be1fcbe&query=${food}&addRecipeInformation=true&fillIngredients=true&number=100`
    fetch(requestURL)
    .then((apiResponse) => {
        console.log("Food API Success", food)
        return apiResponse.json()
    })
    .then((jsonData) => {
        console.log("here is the recipe data: ", jsonData)
        const recipeData = jsonData
        res.render('recipe', { recipeData })
        return recipeData.results.id
    })
    // Results.create({recipeData} )

    .catch((error) => {
        console.log(error)
        res.json({ error })
    })  
})







////////////////////////////////////////////
// Export Router
////////////////////////////////////////////
module.exports = router