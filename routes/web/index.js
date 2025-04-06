//Main web router

const express = require('express')

// Importing the flashcard router from the flashcard.js 
const flashcardRouter = require('./flashcard')

const router = express.Router()

// organizing the routes
router.use('/flashcard', flashcardRouter)

// Making a router global to the application
module.exports = router
