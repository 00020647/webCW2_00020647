//Web routes (creating a route and its controller for flashcards)
const express = require('express');
const flashcardController = require('../../controllers/flashcard');

// Creating a router instance
const router = express.Router();

// http://localhost:3000/flashcard
//Display all flashcards
router.get('/', (req, res)=>{
    flashcardController.getAll(req, res)
});

// Display a form for creating a new flashcard
router.get('/create', (req, res)=>{
    res.render('flashcard/create_update')
});

// Display a form for updating an existing flashcard
router.get('/update/:id', (req, res)=>{
    flashcardController.getById(req, res)
});

// Making a router global to the application
module.exports = router;
