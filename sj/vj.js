const bannerreact_swiper = new Swiper('#bannerreact .swiper', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '#bannerreact .bannerBtns',
      bulletClass : 'bg-dark',
      bulletActiveClass : 'active',
      clickable :true,

      renderBullet: function (index, className) {
        switch(index){
          case 0:text='UX전략도출 및 컨셉';break;
          case 1:text='화면설계 및 개발 팔로업';break;
          case 2:text='소스관리 / 바로가기';break;
         
        }
        return '<span class="border text-white p-2 mx-2 ' + className + '">' + text + '</span>';
      },
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
      el: "#work .swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: "#work .swiper-button-next",
      prevEl: "#work .swiper-button-prev",
    }
    
  });
  work_swiper.on('slideChange', function () {
    if(this.activeIndex++) {
      addclass
    }
  });

 