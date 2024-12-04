var swiper = new Swiper(".slide-container", {
    slidesPerView: 2,
    spaceBetween: 20,
    sliderPerGroup: 2,
    loop: true,
    centerSlide: "true",
    fade: "true",
    grabCursor: "true",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      520: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1000: {
        slidesPerView: 2,
      },
    },
  });
  

        a = 2;
        b = 3;
        c = 1;

       function run() {
        document.getElementById('experience').innerHTML = `${a}`
        document.getElementById('mentored').innerHTML = `${b}`
        document.getElementById('serificates').innerHTML = `${c}`

        if(a < 32){
            setTimeout(run,300)
            a++
        }

        if(b < 82){
            setTimeout(run,150)
            b++
        }

        if(c < 28){
            setTimeout(run,300)
            c++
        }

       }  
       
       window.addEventListener("scroll", () => {
         scrollTop = document.documentElement.scrollTop;
         
         if(scrollTop >= 200) {
          document.getElementsByClassName('up_icon')[0].style.display = 'block';
          document.querySelector('.my_nav').classList = 'my_nav myanimation';
         }
         else {
          document.getElementsByClassName('up_icon')[0].style.display = 'none';
          document.querySelector('.my_nav').classList = 'my_nav';
         }
        if (scrollTop >=  600) {
          run() 
        }
      });

