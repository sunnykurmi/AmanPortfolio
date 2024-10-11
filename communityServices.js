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
