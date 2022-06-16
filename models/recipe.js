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
  name: {type: String},
  description: {type: String},
  ingredients: {type:[String]},
  category: {
    type: String,
    enum: ['American', 'Thai', 'Chinese', 'Spanish', 'Italian', 'Indian', 'Seafood', 'Healthy', 'Vegan', 'Dessert', 'Other'],
    },
  image: {type: String},
  owner: {
    // references the type 'objectId'
    type: Schema.Types.ObjectID,
    // references the model: 'User'
    ref: 'User'
    // now that we have an owner field, let's look and replace references to the username in our fruit controllers
},
})

// make model
const Recipe = model("Recipe", recipeSchema)


/////////////////////////////////
// Export our Model
/////////////////////////////////
module.exports = Recipe


