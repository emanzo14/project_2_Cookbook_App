require("dotenv").config()
const mongoose = require("mongoose")


/////////////////////////////////////////////
// Database Connection
/////////////////////////////////////////////

const MONGODB_URI = process.env.MONGODB_URI;
const CONFIG = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// Establish Connection
mongoose.connect(MONGODB_URI, CONFIG);

// Events for when connection opens/disconnects/errors
mongoose.connection
  .on("open", () => console.log(`Mongoose connected to ${mongoose.connection.host}:${mongoose.connection.port}`))
  .on("close", () => console.log("Disconnected from Mongoose"))
  .on("error", (error) => console.log(error));


module.exports = mongoose;