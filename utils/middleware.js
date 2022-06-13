/////////////////////////////////
// Dependencies
/////////////////////////////////
require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const methodOverride = require('method-override')
// const RecipeRouter = require('../controllers/recipe')
// const UserRouter = require('../controllers/user')
// const session = require('express-session')
// const MongoStore = require('connect-mongo')

/////////////////////////////////
// Middleware function
/////////////////////////////////
const middleware = (app) => {
    app.use(morgan('tiny'))
    app.use(methodOverride('_method'))
    app.use(express.urlencoded({ extended: false }))
    app.use(express.static('public'))
    // app.use(
	// 		session({
	// 			secret: process.env.SECRET,
	// 			store: MongoStore.create({ mongoUrl: process.env.DB_CLUSTER }),
	// 			saveUninitialized: true,
	// 			resave: false,
	// 		})
	// 	)
}

///////////////////////////////////////////
// export our Middleware function
///////////////////////////////////////////
module.exports = middleware