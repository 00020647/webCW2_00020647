const { validationResult } = require('express-validator');
const flashcardService = require('../services/flashcard');

const flashcardController = {

  getById: (req, res) => {
    try {
      const flashcard = flashcardService.getById(req, res);
      res.render('flashcard/create_update', { flashcard })
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getAll: (req, res) => {
    try {
      const flashcards = flashcardService.get(req, res);
      res.render('flashcard/index', { flashcards })
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  create: async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.render('flashcard/create_update', { errors: errors.array(), flashcard: req.body });
    }
    try {
      await flashcardService.insert(req, res);
      res.redirect('/flashcard');
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  update: async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.render('flashcard/create_update', { errors: errors.array(), flashcard: req.body });
    }
    try {
      const updatedflashcard = flashcardService.update(req, res);
      if (!updatedflashcard) {
        return res.status(404).json({ error: 'flashcard not found' });
      }
      res.redirect('/flashcard');
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

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

module.exports = flashcardController;