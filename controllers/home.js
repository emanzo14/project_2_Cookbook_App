////////////////////////////////////////////
// Import Dependencies
////////////////////////////////////////////
const express = require('express')

////////////////////////////////////////////
// Create Router
////////////////////////////////////////////
const router = express.Router()

////////////////////////////////////////////
// Route
////////////////////////////////////////////

router.get('/', (req, res) => {
    res.render('home')
})

////////////////////////////////////////////
// Export Router
////////////////////////////////////////////
module.exports = router