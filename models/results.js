//////////////////////////////////////////////
// Import Dependencies
//////////////////////////////////////////////
const mongoose = require("./connection");

////////////////////////////////////////////////
// Define Model
////////////////////////////////////////////////
// pull schema and model from mongoose
const { Schema, model } = mongoose;


const resultSchema = new Schema ({
    id: {type: String},
    title: {type: String},
    image: {type: String},
    imageType: {type: String}
})

const Results = model("Results", resultSchema)

/////////////////////////////////
// Export our Model
/////////////////////////////////
module.exports = Results