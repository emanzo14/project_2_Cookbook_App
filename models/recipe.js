//////////////////////////////////////////////
// Import Dependencies
//////////////////////////////////////////////
const commentSchema = require("./comments");
const mongoose = require("./connection");
const User = require('./user')

////////////////////////////////////////////////
// Define Model
////////////////////////////////////////////////
// pull schema and model from mongoose
const { Schema, model } = mongoose;


// make fruits schema
const recipeSchema = new Schema({
  name: {type: String, required: true},
  description: {type: String, required: true},
  ingredients: {type: Array, required: true},
  category: {
    type: String,
    enum: ['American', 'Thai', 'Chinese', 'Spanish', 'Italian', 'Indian', 'Seafood', 'Healthy', 'Vegan', 'Dessert', 'Other'],
    },
  image: {type: String},
  owner: {
    type: Schema.Types.ObjectID,
    ref: 'User'
    },
    comments: [commentSchema]
}, { timestamps: true })

// make model
const Recipe = model("Recipe", recipeSchema)


/////////////////////////////////
// Export our Model
/////////////////////////////////
module.exports = Recipe


