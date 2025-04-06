//Validation Handling

//Validation rules for flashcard creation and update
const { body } = require('express-validator');

// Defining the validation rules for flashcards
const flashcardValidationRules = () => { 
  //Checking if input is empty
  return [
    body('phrase')
      .notEmpty().withMessage('phrase must not be empty'),
    body('translation')
      .notEmpty().withMessage('Translation must not be empty'),
    body('category')
      .notEmpty().withMessage('category must not be empty')
  ];
};

module.exports = {
  flashcardValidationRules
};