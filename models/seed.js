///////////////////////////////////////
// Import Dependencies
///////////////////////////////////////
const mongoose = require('./connection')
const Recipe = require('./recipe')

///////////////////////////////////////////
// Seed Code
////////////////////////////////////////////
// save the connection in a variable
const db = mongoose.connection;

// db.on('open', () => {
//     const startRecipies = [
//         { name: 'Key Lime Pie',
//          description: 'description goes here',
//         ingredients: ['8 limes', '5 tablespoons melted unsalted butter', '1/3 cup sugar', '1/3 of a 1-pound box graham crackers' ],
//         category: 'Dessert'  },
//         { name: 'Lasagna',
//          description: 'description goes here',
//         ingredients: ['1 pound sweet Italian sausage', '¾ pound lean ground beef', '½ cup minced onion', '12 lasagna noodles' ],
//         category: 'Italian'  }
//     ]
// })