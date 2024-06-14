document.addEventListener('DOMContentLoaded', function() {
  // Navigation menu logic
  const menuIcon = document.querySelector('.menu');
  const navigation = document.querySelector('.nav');
  const closeButton = document.querySelector('.span');

  if (navigation) {
    navigation.style.display = 'none';

    menuIcon.addEventListener('click', function() {
      navigation.style.display = 'block';
      menuIcon.style.display = 'none';
    });

    closeButton.addEventListener('click', function() {
      navigation.style.display = 'none';
      menuIcon.style.display = 'flex';
    });
  }

  // Services animation delay and scroll logic
  const servicesContainer = document.querySelector('.services');
  const leftArrow = document.querySelector('.fa-arrow-left');
  const rightArrow = document.querySelector('.fa-arrow-right');
  const services = document.querySelectorAll('.services .service');
  const serviceWidth = services[0].offsetWidth;

  if (servicesContainer && services.length > 0) {
    const minAnimationDelay = 0.2; // Minimum animation delay in seconds

    servicesContainer.addEventListener('scroll', () => {
      services.forEach((service, index) => {
        const scrollPosition = servicesContainer.scrollLeft;
        const delay = Math.max(minAnimationDelay, (scrollPosition + (index * serviceWidth)) / (document.documentElement.clientWidth * 2));
        service.style.animationDelay = `${delay}s`;
      });
    });

    const scrollStep = serviceWidth; // Scroll step in pixels (one service width)

    leftArrow.addEventListener('click', function() {
      if (servicesContainer.scrollLeft > 0) {
        servicesContainer.scrollTo({
          left: servicesContainer.scrollLeft - scrollStep,
          behavior: 'smooth'
        });
      } else {
        servicesContainer.style.animation = 'pushAnimation 0.3s ease';
        setTimeout(() => {
          servicesContainer.style.animation = '';
        }, 300);
      }
    });

    rightArrow.addEventListener('click', function() {
      const maxScrollPosition = servicesContainer.scrollWidth - servicesContainer.clientWidth;
      if (servicesContainer.scrollLeft < maxScrollPosition) {
        servicesContainer.scrollTo({
          left: servicesContainer.scrollLeft + scrollStep,
          behavior: 'smooth'
        });
      } else {
        servicesContainer.style.animation = 'pushAnimationRight 0.3s ease';
        setTimeout(() => {
          servicesContainer.style.animation = '';
        }, 300);
      }
    });

    // Ensure the container is initially positioned correctly
    servicesContainer.scrollTo({
      left: 0,
      behavior: 'smooth'
    });
  } else {
    console.error('Services container or services elements not found.');
  }

  // Code for moving the circle and box-shadow on span element
  const span = document.querySelector('.wrapper .feture .container .bottom .bottom-left span');

  // Create an overlay to simulate ::before click
  const beforeOverlay = document.createElement('div');
  beforeOverlay.style.position = 'absolute';
  beforeOverlay.style.top = '31px';
  beforeOverlay.style.left = '0';
  beforeOverlay.style.transform = 'translateY(-50%)';
  beforeOverlay.style.width = '50px';
  beforeOverlay.style.height = '50px';
  beforeOverlay.style.zIndex = '2';
  beforeOverlay.style.cursor = 'pointer';
  span.appendChild(beforeOverlay);

  beforeOverlay.addEventListener('click', function() {
    span.classList.toggle('active');
    if (span.classList.contains('active')) {
      beforeOverlay.style.left = 'calc(100% - 50px)'; // Move the circle to the right
      span.style.boxShadow = '10px 10px 10px var(--eerie-black2)';
    } else {
      beforeOverlay.style.left = '0'; // Move the circle back to the left
      span.style.boxShadow = '2px 2px 10px var(--eerie-black2)';
    }
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

  

// Select all images and content divs
const images = document.querySelectorAll('.box img');
const contents = document.querySelectorAll('.page-contents .contents');
const pageContents = document.querySelector('.page-contents');

// Check if images and contents are found
if (images.length === 0) {
  console.error("No images found in the .box element.");
}

if (contents.length === 0) {
  console.error("No contents found in the .page-contents element.");
}

// Function to hide all contents
function hideAllContents() {
  contents.forEach(content => {
    content.classList.remove('show');
    content.classList.add('hide');
    setTimeout(() => {
      content.style.display = 'none';
    }, 500); // Match this timeout to the CSS transition duration
  });
  pageContents.style.display = 'none';
}

// Function to show content
function showContent(target) {
  let targetFound = false;

  // Loop through contents to show/hide based on target
  contents.forEach(content => {
    if (content.id === target) {
      content.style.display = 'block'; // Ensure it's displayed before the opacity transition
      setTimeout(() => {
        content.classList.remove('hide');
        content.classList.add('show');
      }, 10); // Small delay to trigger the CSS transition
      targetFound = true;
      console.log(`Displaying content with id="${target}".`); // Debug statement
    } else {
      if (content.classList.contains('show')) {
        content.classList.remove('show');
        content.classList.add('hide');
        setTimeout(() => {
          content.style.display = 'none'; // Ensure the content is hidden after fade-out
        }, 500); // Match this timeout to the CSS transition duration
      }
    }
  });

  // Show the .page-contents element if target found
  if (targetFound) {
    pageContents.style.display = 'flex';
  } else {
    console.error(`No content found with id="${target}".`);
  }
}

// Add click and touch event listeners to each image
images.forEach(img => {
  img.addEventListener('click', function() {
    const target = this.getAttribute('data-target');
    console.log(`Image with data-target="${target}" clicked.`); // Debug statement
    showContent(target);
  });

  // For mobile touch events
  img.addEventListener('touchend', function() {
    const target = this.getAttribute('data-target');
    console.log(`Image with data-target="${target}" touched.`); // Debug statement
    showContent(target);
  });
});

// Add scroll event listener to hide contents when scrolling
window.addEventListener('scroll', hideAllContents);





const readMoreBtn1 = document.getElementById("read-more-1");
const heroPara1 = document.getElementById("hero-para-1");
const closeBtn1 = heroPara1.querySelector(".close");

readMoreBtn1.addEventListener("click", function() {
  heroPara1.classList.remove("hidden");
});

closeBtn1.addEventListener("click", function() {
  heroPara1.classList.add("hidden");
});

const readMoreBtn2 = document.getElementById("read-more-2");
const heroPara2 = document.getElementById("hero-para-2");
const closeBtn2 = heroPara2.querySelector(".close");

readMoreBtn2.addEventListener("click", function() {
  heroPara2.classList.remove("hidden");
});

closeBtn2.addEventListener("click", function() {
  heroPara2.classList.add("hidden");
});



});


