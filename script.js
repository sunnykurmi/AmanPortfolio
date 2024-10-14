

document.addEventListener('DOMContentLoaded', () => {
    const currentPath = window.location.pathname;
    const links = {
      '/index.html': 'home-link',
      '/communityServices.html': 'community-services-link',
      '/awards.html': 'awards-link',
      '/academics.html': 'academics-link',
      '/Professional-Enrichment.html': 'professional-enrichment-link',
      '/others.html': 'others-link'
    };
  
    const activeLinkId = links[currentPath];
    if (activeLinkId) {
      document.getElementById(activeLinkId).classList.add('active-link');
    }
  });


  var cursor = new MouseFollower();
      const lenis = new Lenis();

      lenis.on("scroll", (e) => {
        console.log(e);
      });

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);


      const swiper = new Swiper('.swiper', {

        slidesPerView: 3,
          spaceBetween: 90,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
      
        pagination: {
          el: '.swiper-pagination',
        },
        
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    
    
    