document.addEventListener('DOMContentLoaded', () => {
    const deleteButtons = document.querySelectorAll('.delete-link');
  
    deleteButtons.forEach((button) => {
      button.addEventListener('click', (event) => {
        const confirmDelete = confirm('Are you sure you want to delete this flashcard?');
        if (!confirmDelete) {
          event.preventDefault();
        }
      });
    });
  });