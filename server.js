/////////////////////////////////
// import dependencies
/////////////////////////////////
// this allows us to load our env variables
require('dotenv').config()
const express = require('express')



const HomeRouter = require('./controllers/home')
const RecipeRouter = require('./controllers/recipe')
const NewRouter = require('./controllers/new')
const MineRouter = require('./controllers/mine')
const ShowRouter = require('./controllers/show')
const middleware = require('./utils/middleware')
const req = require('express/lib/request')

/////////////////////////////////////////////////
// Create our Express Application Object Bind Liquid Templating Engine
/////////////////////////////////////////////////
const app = require("liquid-express-views")(express())



////////////////////////////////////////////
// Middleware
////////////////////////////////////////////
middleware(app)

////////////////////////////////////////////
// Routes
////////////////////////////////////////////
// register our routes here

app.use('/', HomeRouter)
app.use('/recipies', RecipeRouter)
app.use('/new', NewRouter)
app.use('/show', ShowRouter)
app.use('/mine', MineRouter)




const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`app is listening on port: ${PORT}`)
})