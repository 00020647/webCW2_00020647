const express = require('express')
const flashcardRouter = require('./flashcard')

const router = express.Router()

router.use('/flashcard', flashcardRouter)

module.exports = router
