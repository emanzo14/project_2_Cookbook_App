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
    required: true
  },
  description: {
    type: String,
    required: true
  },
  ingredients: {
    type: [String],
    required: true
  },
  category: {
    type: String,
    enum: ['American', 'Thai', 'Chinese', 'Spanish', 'Italian', 'Indian', 'Seafood', 'Healthy', 'Vegan', 'Dessert', 'Other'],
    required: true
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


