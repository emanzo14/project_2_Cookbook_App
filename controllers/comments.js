////////////////////////////////////////////
// Import Dependencies
////////////////////////////////////////////
const express = require('express')
const mongoose = require('mongoose')

const Recipe = require('../models/recipe')

////////////////////////////////////////////
// Create router
////////////////////////////////////////////
const router = express.Router()

////////////////////////////////////////////
// Routes
////////////////////////////////////////////

router.post('/:recipeId', (req, res) => {
    console.log("i won")
    const recipeId = req.params.recipeId

    req.body.author = req.session.userId
    console.log('updated comment body', req.body)

    Recipe.findById(recipeId)
        .then(recipe => {
            recipe.comments.push(req.body)
            return recipe.save()
        })
        .then(recipe => {
            res.redirect(`/recipe/${recipe.id}`)
        })
        .catch(error => {
            console.log(error)
            res.send(error)
        })
})


router.delete('/delete/:recipeId/:commId', (req, res) => {

    const recipeId = req.params.recipeId
    const commId = req.params.commId
    
    Recipe.findById(recipeId)
        .then(recipe => {
            const theComment = recipe.comments.id(commId)
            if ( theComment.author == req.session.userId) {
                theComment.remove()
                return fruit.save()
            } else {
                return
            }

        })
        .then(recipe => {
            res.redirect(`/recipe/${recipeId}`)
        })
        .catch(error => {
            // catch any errors
            console.log(error)
            res.send(error)
        })
})

////////////////////////////////////////////
// Export the Router
////////////////////////////////////////////
module.exports = router