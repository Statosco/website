document.addEventListener('DOMContentLoaded', function() {
  // Select the menu icon, navigation, and close button elements
  const menuIcon = document.querySelector('.menu');
  const navigation = document.querySelector('.nav');
  const closeButton = document.querySelector('.span');

  // Ensure the navigation is initially hidden
  navigation.style.display = 'none';

  // Toggle navigation menu visibility when the menu icon is clicked
  menuIcon.addEventListener('click', function() {
    navigation.style.display = 'block';
    menuIcon.style.display = 'none';
  });

  // Close the navigation menu when the close button is clicked
  closeButton.addEventListener('click', function() {
    navigation.style.display = 'none';
    menuIcon.style.display = 'flex';
  });
});
