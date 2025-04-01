const { body } = require('express-validator');

const flashcardValidationRules = () => { 
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