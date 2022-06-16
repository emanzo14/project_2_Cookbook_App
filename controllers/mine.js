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
    res.render('mine')
})

// index that shows only the user's recipies
// router.get('/mine', (req, res) => {
// 	// find the fruits
// 	Recipe.find({ owner: req.session.userId })
// 		// then render a template AFTER they're found
// 		.then((recipies) => {
// 			// console.log(fruits)
// 			const username = req.session.username
// 			const loggedIn = req.session.loggedIn

// 			res.render('fruits/index', { recipies, username, loggedIn })
// 		})
// 		// show an error if there is one
// 		.catch((error) => {
// 			console.log(error)
// 			res.json({ error })
// 		})
// })
////////////////////////////////////////////
// Export Router
////////////////////////////////////////////
module.exports = router