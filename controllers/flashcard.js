//Dependencies
//Validation Handling
const { validationResult } = require('express-validator');

//Flshcard Logic Handling/Service
const flashcardService = require('../services/flashcard');

const flashcardController = {

  //Fetching single flashcard by ID
  getById: (req, res) => {
    try {
      const flashcard = flashcardService.getById(req, res);
      res.render('flashcard/create_update', { flashcard })
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  //Fetching all flashcards
  getAll: (req, res) => {
    try {
      const flashcards = flashcardService.get(req, res);
      res.render('flashcard/index', { flashcards })
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  //Creating a new flashcard
  create: async (req, res) => {
    //Checking for validation
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.render('flashcard/create_update', { errors: errors.array(), flashcard: req.body });
    }
    try {
      await flashcardService.insert(req, res);
      res.redirect('/flashcard');
    } catch (error) {
      //If error, send error message
      res.status(500).json({ error: error.message });
    }
  },

  //Updating an existing flashcard
  update: async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.render('flashcard/create_update', { errors: errors.array(), flashcard: req.body });
    }
    try {
      const updatedflashcard = flashcardService.update(req, res);
      if (!updatedflashcard) {
        //If flashcard not found, send error message
        return res.status(404).json({ error: 'flashcard not found' });
      }
      res.redirect('/flashcard');
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  //Deleting a flashcard
  delete: (req, res) => {
    try {
      const deleted = flashcardService.delete(req, res);
      if (!deleted) {
        return res.status(404).json({ error: 'flashcard not found' });
      }
      res.redirect('/flashcard');
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

//Making a controller available/global to the rest of the app
module.exports = flashcardController;