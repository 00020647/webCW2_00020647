//Deletion confirmation for flashcards
// Extracting the delete button elements
document.addEventListener('DOMContentLoaded', () => {
    const deleteButtons = document.querySelectorAll('.delete-link');
  // Adding event listeners to each delete button
    deleteButtons.forEach((button) => {
      button.addEventListener('click', (event) => {
        const confirmDelete = confirm('Are you sure you want to delete this flashcard?');
        if (!confirmDelete) {
          event.preventDefault();
        }
      });
    });
  });