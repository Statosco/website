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

  const span = document.querySelector('.wrapper .feture .container .bottom .bottom-left span');

  // Create an overlay to simulate ::before click
  const beforeOverlay = document.createElement('div');
  beforeOverlay.style.position = 'absolute';
  beforeOverlay.style.top = '50%'; // Center vertically
  beforeOverlay.style.left = '10px'; // Match the initial position of ::before
  beforeOverlay.style.transform = 'translateY(-50%)';
  beforeOverlay.style.width = '50px';
  beforeOverlay.style.height = '50px';
  beforeOverlay.style.zIndex = '2';
  beforeOverlay.style.cursor = 'pointer';
  beforeOverlay.style.borderRadius = '50%';
  beforeOverlay.style.opacity = '0'; // Make the overlay invisible
  span.appendChild(beforeOverlay);

  // Adjust the overlay's position when active
  function toggleActive() {
    span.classList.toggle('active');
    if (span.classList.contains('active')) {
      beforeOverlay.style.left = 'calc(100% - 60px)';
    } else {
      beforeOverlay.style.left = '10px';
    }
  }

  beforeOverlay.addEventListener('click', toggleActive);
});
