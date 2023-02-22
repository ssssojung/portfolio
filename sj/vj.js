const bannerreact_swiper = new Swiper('#bannerreact .swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '#bannerreact .swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '#bannerreact .swiper-button-next',
      prevEl: '#bannerreact .swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '#bannerreact .swiper-scrollbar',
    },
  });


  const work_swiper = new Swiper("#work .swiper", {
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

 