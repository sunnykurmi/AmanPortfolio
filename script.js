

document.addEventListener('DOMContentLoaded', () => {
    const currentPath = window.location.pathname;
    const links = {
      '/index.html': 'home-link',
      '/communityServices.html': 'community-services-link',
      '/awards.html': 'awards-link',
      '/others.html': 'others-link'
    };
  
    const activeLinkId = links[currentPath];
    if (activeLinkId) {
      document.getElementById(activeLinkId).classList.add('active-link');
    }
  });


  var cursor = new MouseFollower();
  
      const lenis = new Lenis();
      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);


      document.addEventListener('DOMContentLoaded', () => {
        const menuIcon = document.getElementById('menu-icon');
        const closeIcon = document.getElementById('close-icon');
        const mobileMenu = document.getElementById('mobile-menu');
      
        menuIcon.addEventListener('click', () => {
          mobileMenu.classList.add('open');
        });
      
        closeIcon.addEventListener('click', () => {
          mobileMenu.classList.remove('open');
        });
      });


      document.addEventListener('DOMContentLoaded', () => {
        const scrollToTopButton = document.getElementById('scroll-to-top');
      
        scrollToTopButton.addEventListener('click', () => {
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        });
      });

      window.addEventListener('load', function() {
        document.getElementById('loader').style.display = 'none';
      });


      // Get elements
const modal = document.getElementById('fullscreen-modal');
const fullscreenImage = document.getElementById('fullscreen-image');
const thumbnails = document.querySelectorAll('.thumbnail');
const closeBtn = document.querySelector('.close');

// Open image in fullscreen on click
thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener('click', () => {
    fullscreenImage.src = thumbnail.src;
    modal.style.display = 'flex';
    setTimeout(() => {
      modal.classList.add('show');
    }, 10); // Slight delay to ensure the display change is registered
  });
});

// Close the fullscreen view
closeBtn.addEventListener('click', () => {
  modal.classList.remove('show');
  setTimeout(() => {
    modal.style.display = 'none';
  }, 500); // Match the transition duration
});

// Close the fullscreen view when clicking outside the image
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('show');
    setTimeout(() => {
      modal.style.display = 'none';
    }, 500); // Match the transition duration
  }
});