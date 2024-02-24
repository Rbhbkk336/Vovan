window.addEventListener('DOMContentLoaded', () => {
    //burger menu
    const inner = document.querySelector('.header__inner'),
    hamburger = document.querySelector('.header__mobile-burger'),
    sticks = document.querySelectorAll('.header__mobile-stick');

    hamburger.addEventListener('click',()=>{
        inner.classList.toggle('header__inner_active');
        sticks.forEach(item=>{
            item.classList.toggle('header__mobile-stick_active');
        });
    });

    //modal
    function fadeIn (el, timeout, display){
        el.style.opacity = 0;
        el.style.display = display || 'block';
        el.style.transition = `opacity ${timeout}ms`;
        setTimeout(() => {
          el.style.opacity = 1;
        }, 10);
    }
    function fadeOut (el, timeout){
        el.style.opacity = 1;
        el.style.transition = `opacity ${timeout}ms`;
        el.style.opacity = 0;
      
        setTimeout(() => {
          el.style.display = 'none';
        }, timeout);
    }
    const contactButtons = document.querySelectorAll('.contact-btn'),
            priceButtons = document.querySelectorAll('.price-btn'),
            overlay = document.querySelector('.overlay'),
            closeElement = document.querySelector('.modal__close');
    
    contactButtons.forEach(btn=>{
        btn.addEventListener('click',()=>{
            fadeIn(overlay, 100, 'block');
        });
    });
    priceButtons.forEach(btn=>{
        btn.addEventListener('click',()=>{
            fadeIn(overlay, 100, 'block');
        });
    });
    closeElement.addEventListener('click',()=>{
        fadeOut(overlay,30);
    });
    overlay.addEventListener('click', (e)=>{
        const target = e.target;
        if(target && target.classList.contains('overlay')){
            fadeOut(overlay,30);
        }
    });
    document.addEventListener('keydown',(e)=>{
        if(overlay.style.opacity === '1' && e.code == 'Escape'){
           fadeOut(overlay,30);
        }
     });


    //слайдер
    const promotionInfoSlider = new Swiper('.promotion__info-slider', {
        loop: true,
        slidesPerView: 'auto',
        grabCursor: true,
        pagination: {
          el: '.info-slider__pagination',
          bulletClass: 'info-slider__bullet',
          bulletActiveClass: 'info-slider__bullet-active'
        },
      
        navigation: {
          nextEl: '.info-slider__right',
          prevEl: '.info-slider__left',
        },
    });

    const tractorInfoSlider = new Swiper('.tractor__info-slider', {
        loop: true,
        slidesPerView: 'auto',
        grabCursor: true,
        pagination: {
          el: '.info-slider__pagination',
          bulletClass: 'info-slider__bullet',
          bulletActiveClass: 'info-slider__bullet-active'
        },
      
        navigation: {
          nextEl: '.info-slider__right',
          prevEl: '.info-slider__left',
        },
    });

    const repairTractorsSlider = new Swiper('.repair-tractors__slider', {
        loop: false,
        slidesPerView: '1.02',
        spaceBetween:3,
    });

    const beforeAfterSlider = new Swiper('.before-after__slider', {
        loop: true,
        autoplay:{
            delay:1000,
        },
        speed:2000,
        effect: 'fade',
        fadeEffect: {
            crossFade:true,
        },
    });

    const docsSlider = new Swiper('.documents__slider', {
        loop: false,
        slidesPerView: '1.15',
        spaceBetween:20,
    });

    //active menu

    //exhibition video interactive with buttons
    const videoBlock = document.querySelector('.exhibition__video'),
        play = document.querySelector('.exhibition__play');
    

    if(videoBlock && play){
        const video = videoBlock.querySelector('video');
        play.addEventListener('click',()=>{
            video.play();
        });
        video.addEventListener('play',()=>{
            play.style.display = 'none';
    
        });
        video.addEventListener('pause',()=>{
            play.style.display = 'block';
        });
        videoBlock.addEventListener('mouseenter',()=>{
            video.controls = true;
        });
        videoBlock.addEventListener('mouseleave',()=>{
            video.controls = false;
        });
    
    }

    //carousel
    const images = document.querySelectorAll('.works__carousel-img');

    if(images){
        images.forEach((item)=>{
            item.addEventListener('mouseenter',(e)=>{
                target = e.target;
                images.forEach(item=>{
                    if(target != item){
                        item.style.filter = 'blur(10px)';
                        item.style.zIndex = -1;
                    }
                });
            });
            item.addEventListener('mouseleave',()=>{
                images.forEach(item=>{
                    item.style.filter = 'blur(0px)';
                    item.style.zIndex = 0;
                });
            });
        });
    }

    //animation on scroll
    AOS.init({
        // Global settings:
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
        
      
        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 120, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 2000, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: true, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
      
      });
});