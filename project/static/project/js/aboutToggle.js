// Get the elements
const showIcon = document.querySelector('.show-icons .show');
const hideIcon = document.querySelector('.show-icons .hide .span');
const menuItems = document.querySelector('.show-icons .hide');

// Add click event listeners
showIcon.addEventListener('click', function() {
    showIcon.style.display = 'none'; // Hide showIcon
    menuItems.style.display = 'flex'; // Show menuItems
});

hideIcon.addEventListener('click', function() {
    showIcon.style.display = 'block'; // Show showIcon
    menuItems.style.display = 'none'; // Hide menuItems
});


const showFormButton = document.getElementById("showFormButton");
const hideFormButton = document.getElementById("hideFormButton");
const formContent = document.querySelector('.form-content');

showFormButton.addEventListener("click", function(event) {
  event.preventDefault();
  formContent.style.display = 'flex'; // Set display to flex to make it visible
  formContent.classList.add('fade-in');
});

hideFormButton.addEventListener("click", function() {
  formContent.classList.add('fade-out');
  setTimeout(function() {
    formContent.style.display = 'none';
    formContent.classList.remove('fade-out'); // Reset class after animation
    formContent.classList.remove('fade-in');  // Reset fade-in class in case it's still present
  }, 500); // Adjust the duration to match your CSS transition duration
});




