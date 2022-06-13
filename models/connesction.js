/////////////////////////////////
// import dependencies
/////////////////////////////////
require('dotenv').config()
const mongoose = require('mongoose')

/////////////////////////////////
// database connection
/////////////////////////////////
// here we are setting up inputs for our connect function
const DATABASE_URI = process.env.DB_CLUSTER
const CONFIG = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

// establish connection
mongoose.connect(DATABASE_URI, CONFIG)

// events for when our connection opens/closes/errors
mongoose.connection
	.on('open', () =>
		console.log(
			`Mongoose connected to ${mongoose.connection.host}:${mongoose.connection.port}`
		)
	)
	.on('close', () =>
		console.log(
			`Mongoose disconnected from ${mongoose.connection.host}:${mongoose.connection.port}`
		)
	)
	.on('error', (error) => console.log(error))

/////////////////////////////////
// export our connection
/////////////////////////////////
module.exports = mongoose