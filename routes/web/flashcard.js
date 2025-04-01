const express = require('express');
const flashcardController = require('../../controllers/flashcard');
const router = express.Router();

// http://localhost:3000/flashcard
router.get('/', (req, res)=>{
    flashcardController.getAll(req, res)
});

router.get('/create', (req, res)=>{
    res.render('flashcard/create_update')
});

router.get('/update/:id', (req, res)=>{
    flashcardController.getById(req, res)
});

module.exports = router;
