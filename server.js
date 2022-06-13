/////////////////////////////////
// import dependencies
/////////////////////////////////
// this allows us to load our env variables
require('dotenv').config()
const express = require('express')

// const RecipeRouter = require('./controllers/recipe')
const HomeRouter = require('./controllers/home')
const middleware = require('./utils/middleware')

////////////////////////////////////////////
// Create our express application object
////////////////////////////////////////////
const app = require('liquid-express-views')(express())

////////////////////////////////////////////
// Middleware
////////////////////////////////////////////
middleware(app)

////////////////////////////////////////////
// Routes
////////////////////////////////////////////
// register our routes here
// app.use('/recipe', RecipeRouter)
app.use('/', HomeRouter)

app.get('/recipies', (req, res) => {
    res.render('recipe')
})

app.get('/new', (req, res) => {
    res.render('new')
})

app.get('/mine', (req, res) => {
    res.render('show')
})



const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`app is listening on port: ${PORT}`)
})