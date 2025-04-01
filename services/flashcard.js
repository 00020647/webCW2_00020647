const fs = require('fs');
const path = require('path');

if (!global.mock_db) {
  global.mock_db = path.join(__dirname, '../data', 'mock_db.json');
}

const flashcards = require(global.mock_db);

const flashcardService = {
  // get all flashcards
  get(req, res) {
    return flashcards;
  },

  // get a flashcard by ID
  getById(req, res) {
    const id = req.params.id;
    return flashcards.find(item => item.id === id);
  },

  // insert a new flashcard
  insert(req, res) {
    let new_id = genRandId(4);
    const body = req.body;
    const flashcard = {
      phrase: body.phrase,
      translation: body.translation,
      category: body.category
    };

    flashcards.push({
      id: new_id,
      flashcard: flashcard
    });

    writeToFile(flashcards);
    
    return {
      id: new_id,
      flashcard: flashcard
    };
  },

  // update an existing flashcard
  update(req, res) {
    const id = req.params.id;
    const index = flashcards.findIndex(item => item.id === id);
    if (index === -1) {
      return null; // or you could throw an error
    }
    // update the flashcard data
    flashcards[index].flashcard = {
      phrase: req.body.phrase,
      translation: req.body.translation,
      category: req.body.category
    };
    writeToFile(flashcards);
    return flashcards[index];
  },

  // delete a flashcard
  delete(req, res) {
    const id = req.params.id;
  const index = flashcards.findIndex(item => item.id === id);
  if (index === -1) {
    return false; // flashcard not found
  }

  // Remove the flashcard from the array
  flashcards.splice(index, 1);

  // Write the updated array to the file
  try {
    writeToFile(flashcards);
  } catch (error) {
    console.error('Error writing to file:', error.message);
    throw error;
  }

  return true;
  }
};

// function for overwriting the json file with updated flashcard data
let writeToFile = async (flashcards) => {
  try {
    await fs.writeFileSync(
      global.mock_db,
      JSON.stringify(flashcards, null, 4), // Write an empty array if flashcards is empty
      'utf8'
    );
  } catch (error) {
    console.error('Error writing to file:', error.message);
    throw error;
  }
};

// generate a random id (similar to a simplified UUID)
let genRandId = (count) => {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < count; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

module.exports = flashcardService;