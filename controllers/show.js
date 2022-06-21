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
// edit route
router.get("/:id/edit", (req, res) =>{
	const recipeId = req.params.id

	Recipe.findById(recipeId)
	.then((recipe) => {
		res.render('edit', {recipe})
	})
})

// delete route

router.delete('/:id', (req, res) => {
	const recipeId = req.params.id

	Recipe.findByIdAndRemove(recipeId)
	.then((recipe) => {
		res.redirect('/mine')
	})
})

// update route
router.put('/:id', (req, res) => {
	const recipeId = req.params.id

	Recipe.findByIdAndUpdate(recipeId, req.body, {new: true})
	.then((recipe) => {
		res.redirect('/mine')
	})
})


// show recipe route
router.get('/:id', (req, res) => {
	console.log("made it")
	const recipeId = req.params.id
	// then we can find a fruit by its id
	Recipe.findById(recipeId)
		// once found, we can render a view with the data
		.then((recipe) => {
			// console.log('the recipe we got', recipes)
			
			res.render('show', {recipe})
			
		})
		// if there is an error, show that instead
		.catch((err) => {
			console.log(err)
			res.json({ err })
		})
})









// router.get('/recipes/:id', (req, res) => {
// 	console.log("made it")
// 	const recipeId = req.params.id
// 	// then we can find a fruit by its id
// 	Recipe.findById(recipeId)
// 		// once found, we can render a view with the data
// 		.then((recipe) => {
// 			console.log('the recipe we got', recipe)
// 			const username = req.session.username
// 			const loggedIn = req.session.loggedIn
// 			const userId = req.session.userId
// 			res.render('show', { recipe, username, loggedIn, userId })
// 			res.redirect('/show')
// 		})
// 		// if there is an error, show that instead
// 		.catch((err) => {
// 			console.log(err)
// 			res.json({ err })
// 		})
// })


////////////////////////////////////////////
// Export Router
////////////////////////////////////////////
module.exports = router