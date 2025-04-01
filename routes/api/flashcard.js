const express = require('express');
const { flashcardValidationRules } = require('../../validators/flashcard');
const flashcardController = require('../../controllers/flashcard');
const router = express.Router();

router.post('/create', flashcardValidationRules(), flashcardController.create);
router.post('/update/:id', flashcardValidationRules(), flashcardController.update);
router.get('/delete/:id', flashcardValidationRules(), flashcardController.delete);

module.exports = router;
