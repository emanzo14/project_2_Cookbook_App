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

////////////////////////////////////////////
// Routes
////////////////////////////////////////////

// router.get('/', (req, res) => {
//     const username = req.session.username
// 	const loggedIn = req.session.loggedIn
//     res.render('mine')
// })

// index that shows only the user's recipes
router.get('/', (req, res) => {
	Recipe.find({ owner: req.session.userId })
		// then render a template AFTER they're found
		.then((recipes) => {
			
			const username = req.session.username
			const loggedIn = req.session.loggedIn

			res.render('mine', { recipes, username, loggedIn })
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