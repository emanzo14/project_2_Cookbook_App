////////////////////////////////////////////
// Import Dependencies
////////////////////////////////////////////
const express = require('express')
const Recipe = require('../models/recipe')
// const fetch = require('node-fetch')
////////////////////////////////////////////
// Create Router
////////////////////////////////////////////
const router = express.Router()

////////////////////////////////////////////
// Routes
////////////////////////////////////////////

router.get("/seed", (req, res) => {
    const startRecipes = [
        { name: "Key Lime pie", 
          description: "orange", 
          Ingredients: ['4 large free-range egg yolks', 
              '400 ml condensed milk', 
              '5 limes', 
              '200 ml double cream'],
          Category: 'Dessert'},
        { name: "Lasagne", 
          description: "purple", 
          Ingredients: ['2.5 litres Bolognese sauce (meaty)', 
              '1 litre white base sauce', 
              '400 g dried lasagne sheets', 
              '100 g hard cheese', 
              'olive oil, for greasing'],
          Category: 'Italian'},
        { name: "Fried Chicken", 
          description: "orange", 
          Ingredients: ['2 tablespoons Jollof dry spice mix', 
              '½ teaspoon sea salt', 
              '½ teaspoon coarsely ground black pepper', 
              '1 tablespoon rapeseed oil', 
              '4 higher-welfare boneless', 
              'skinless chicken breasts boneless', 
              'skinless chicken breasts', 
              '250 ml (9fl oz) buttermilk', 
              'vegetable oil'],
          Category: 'American'},
        { name: "Sweet & Sour Stir Fry", 
          description: "red", 
          Ingredients: ['100 g fine rice noodles',
              '1 x 227 g tin of pineapple chunks in juice',
              '2 heaped teaspoons cornflour',
              '1 tablespoon cider vinegar',
              '2 teaspoons low-salt soy sauce',
              '2 teaspoons sesame seeds',
              '30 g cashew nuts',
              '4 spring onions',
              '2 cloves of garlic'],
          Category: 'Thai'},
        { name: "Perfect roast beef", 
          description: "brown", 
          Ingredients: ['1.5 kg topside of beef',
              '2 medium onions',
              '2 carrots',
              '2 sticks celery',
              '1 bulb of garlic',
              '1 bunch of mixed fresh herbs , such as thyme, rosemary, bay, sage olive oil'],
          Category: 'American'},
      ];
    // Delete all fruits
  Recipe.deleteMany({}).then((data) => {
    // Seed Starter Fruits
    Recipe.create(startRecipies).then((data) => {
      // send created fruits as response to confirm creation
      res.json(data);
    });
  });
});

// index route
router.get('/', (req, res) => {
    res.render('recipe')
})


router.post('/', (req, res) => {
    const food = req.body.food

    const requestURL = `https://api.spoonacular.com/recipes/complexSearch?apiKey=5c5cc82669d14a6c9eaa24e327432d76&query=${food}`
    fetch(requestURL)
    .then((apiResponse) => {
        console.log("Food API Success", food)
        return apiResponse.json()
    })
    .then((jsonData) => {
        console.log("here is the recipe data: ", jsonData)
        const recipeData = jsonData
        res.render('recipe', { recipeData })
        return recipeData.results.id
    })
    .catch((error) => {
        console.log(error)
        res.json({ error })
    })  
})








////////////////////////////////////////////
// Export Router
////////////////////////////////////////////
module.exports = router