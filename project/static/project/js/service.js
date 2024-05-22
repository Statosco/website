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

  // Services animation delay logic
  const services = document.querySelectorAll('.services .service');
  services.forEach((service, index) => {
    service.style.animationDelay = `${index * 0.5}s`;
  });

  // Scroll services logic
  const servicesContainer = document.querySelector('.services');
  const leftArrow = document.querySelector('.fa-arrow-left');
  const rightArrow = document.querySelector('.fa-arrow-right');

  if (servicesContainer && services.length > 0) {
    const cardStyle = window.getComputedStyle(services[0]);
    const cardWidth = services[0].offsetWidth + parseInt(cardStyle.marginRight);
    let scrollPosition = 0;

    function scrollServices(direction) {
      if (direction === 'left') {
        if (scrollPosition > 0) {
          scrollPosition -= cardWidth;
        } else {
          servicesContainer.style.animation = 'pushAnimation 0.3s ease';
          setTimeout(() => {
            servicesContainer.style.animation = '';
          }, 300);
        }
      } else if (direction === 'right') {
        if (scrollPosition < (services.length - 3) * cardWidth) { // 3 visible cards
          scrollPosition += cardWidth;
        } else {
          servicesContainer.style.animation = 'pushAnimationRight 0.3s ease';
          setTimeout(() => {
            servicesContainer.style.animation = '';
          }, 300);
        }
      }
      servicesContainer.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }

    leftArrow.addEventListener('click', () => scrollServices('left'));
    rightArrow.addEventListener('click', () => scrollServices('right'));
  } else {
    console.error('Services container or services elements not found.');
  }
});
