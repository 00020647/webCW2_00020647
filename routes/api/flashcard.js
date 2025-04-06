// Creating a route for flashcard API
const express = require('express');

// Flashcard validation rules and a controller
const { flashcardValidationRules } = require('../../validators/flashcard');
const flashcardController = require('../../controllers/flashcard');

// Creating a router instance
const router = express.Router();

// Routes for flashcard API and their middlewares
router.post('/create', flashcardValidationRules(), flashcardController.create);
router.post('/update/:id', flashcardValidationRules(), flashcardController.update);
router.get('/delete/:id', flashcardValidationRules(), flashcardController.delete);

// Global route for fetching all flashcards
module.exports = router;
