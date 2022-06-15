////////////////////////////////////////////
// Import Dependencies
////////////////////////////////////////////
const express = require('express')

////////////////////////////////////////////
// Create Router
////////////////////////////////////////////
const router = express.Router()

////////////////////////////////////////////
// Routes
////////////////////////////////////////////

router.get('/', (req, res) => {
    res.render('mine')
})

////////////////////////////////////////////
// Export Router
////////////////////////////////////////////
module.exports = router