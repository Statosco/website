const initials = document.querySelector('.initials');

let marginLeft = 0;
let animationId;

const moveLeft = () => {
  marginLeft -= 3;
  initials.style.marginLeft = `${marginLeft}px`;
  if (marginLeft <= -initials.offsetWidth) {
    marginLeft = 0;
  }
  animationId = requestAnimationFrame(moveLeft);
};

const stopAnimation = () => {
  if (initials.matches(':hover')) {
    cancelAnimationFrame(animationId);
  }
};

initials.addEventListener('mouseover', stopAnimation);
initials.addEventListener('mouseout', moveLeft);

moveLeft();


/*----------------------------*/




const socialsContainer = document.querySelector('.profile .socials');
let itemsWidth = Array.from(socialsContainer.children).reduce((total, item) => total + item.offsetWidth + parseFloat(getComputedStyle(item).marginRight) + parseFloat(getComputedStyle(item).marginLeft), 0);
let containerWidth = socialsContainer.offsetWidth;
let marginLeftSocials = -0.5 * itemsWidth;
let animationIdSocials;

const moveLeftSocials = () => {
  marginLeftSocials -= 2;
  socialsContainer.style.marginLeft = `${marginLeftSocials}px`;
  
  if (marginLeftSocials <= -itemsWidth) {
    marginLeftSocials = 0;
    socialsContainer.style.animation = 'none';
    setTimeout(() => {
      socialsContainer.style.animation = 'moveProfile 20s linear infinite';
    }, 2000);
  }
  
  animationIdSocials = requestAnimationFrame(moveLeftSocials);
};

const stopAnimationSocials = () => {
  cancelAnimationFrame(animationIdSocials);
};

const restartAnimationSocials = () => {
  if (!socialsContainer.matches(':hover')) {
    moveLeftSocials();
  }
};

socialsContainer.addEventListener('mouseover', stopAnimationSocials);
socialsContainer.addEventListener('mouseout', restartAnimationSocials);
socialsContainer.addEventListener('animationiteration', restartAnimationSocials);

moveLeftSocials(); // Start the animation initially



/*----------------------------*/


// Function to remove <br> tag when the window is resized to 964px or less
function removeBrTag() {
  // Get the current window width
  var windowWidth = window.innerWidth;
  
  // Check if the window width is 964px or less
  if (windowWidth <= 964) {
    // Select the <br> element within the h1 tag
    var brElement = document.querySelector('.showcase-1 .name h1 br');
    
    // Check if the <br> element exists
    if (brElement) {
      // Remove the <br> element from the DOM
      brElement.parentNode.removeChild(brElement);
    }
  }
}

// Call the function when the page loads
removeBrTag();

// Attach an event listener for the window resize event
window.addEventListener('resize', removeBrTag);




/*----------------------------*/

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