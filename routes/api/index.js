const express = require('express');
const flashcardRouter = require('./flashcard');

const router = express.Router();

// http://localhost:3000/api/flashcard/* -> ./flashcard.js
router.use('/flashcard', flashcardRouter);

module.exports = router;