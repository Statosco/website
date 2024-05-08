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
