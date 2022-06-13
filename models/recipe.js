//////////////////////////////////////////////
// Import Dependencies
//////////////////////////////////////////////
const mongoose = require("./connection");

////////////////////////////////////////////////
// Define Model
////////////////////////////////////////////////
// pull schema and model from mongoose
const { Schema, model } = mongoose;


// make fruits schema
const recipeSchema = new Schema({
  name: {
    type: String,
    required: 'This field is required'
  },
  description: {
    type: String,
    required: 'This field is required'
  },
  ingredients: {
    type: [String],
    required: 'This field is required'
  },
  category: {
    type: [String],
    enum: ['American', 'Thai', 'Chinese', 'Spanish', 'Italian', 'Indian', 'Seafood', 'Healthy', 'Vegan', 'Dessert', 'Other'],
    required: 'This field is required'
  },
  image: {
    type: String, 
  }
})

// make model
const Recipe = model("Recipe", recipeSchema)

/////////////////////////////////
// Export our Model
/////////////////////////////////
module.exports = Recipe


