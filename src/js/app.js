import * as flsFunctions from "./modules/functions.js";
import "./jquery-3.6.3.js";

flsFunctions.isWebp();


import Swiper, { Navigation, Pagination } from "swiper";

document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.main__swiper', {
        slidesPerView: 2,
        breakpoints: {
            1024: {
                slidesPerView: 2,
            },
            756: {
                slidesPerView: 3,
            },
            320: {
                slidesPerView: 1,
            }
            
        },
    });

    const swiper_2 = new Swiper('.house__items', {
        modules: [Navigation, Pagination],
        navigation: {
            nextEl: ".house__arrow-right",
            prevEl: ".house__arrow-left"
        },
        slidesPerView: 3.55,
        loop: false,
        breakpoints: {
            1490: {
                slidesPerView: 3.55,
            },
            1024: {
                slidesPerView: 2.55,
            },
            865: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 2,
            },
            500: {
                centeredSlides: true,
                slidesPerView: 2,
            },
            300: {
                slidesPerView: 1,
            },
        }
    });

    const swiper_3 = new Swiper('.reviews__swiper', {
        modules: [Navigation, Pagination],
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        centeredSlides: true,
        slidesPerView: 1.85,
        initialSlide: 1,
        breakpoints: {
            1024: {
                slidesPerView: 1.85,
            },
            900: {
                slidesPerView: 1.01,
            },
            500: {
                slidesPerView: 1.01,
            },
            300: {
                slidesPerView: 0.98,
            },
        }
    });

    $('ul.house__tabs').on('click', 'li:not(.house__tab_active)', function() {
        $(this)
          .addClass('house__tab_active').siblings().removeClass('house__tab_active')
          .closest('div.container').find('div.house__items').removeClass('house__items_active').eq($(this).index()).addClass('house__items_active');
    });

    const links = document.querySelectorAll('a');

    function addPreventDefault(arg) {
        arg.forEach(elem => {
            elem.addEventListener('click', (e) => {
                e.preventDefault();
            })
        })
    }
    addPreventDefault(links);

    const animItems = document.querySelectorAll('._anim-items');

    if(animItems.length > 0) {
        window.addEventListener('scroll', animOnScroll);
        function animOnScroll() {
            for (let index = 0; index < animItems.length; index++) {
                const animItem = animItems[index];
                const animItemHeight = animItem.offsetHeight;
                const animItemOffset = offset(animItem).top;
                const animStart = 4;

                let animItemPoint = window.innerHeight - animItemHeight / animStart;

                if (animItemHeight > window.innerHeight) {
                    animItemPoint = window.innerHeight - window.innerHeight / animStart; 
                }

                if ((scrollY > animItemOffset - animItemPoint) && scrollY <(animItemOffset + animItemHeight)) {
                animItem.classList.add('_active');
                } else {
                    if (!animItem.classList.contains('_anim-no-hide')) {
                        animItem.classList.remove('_active');
                    }
                    
                }
            }
        }
        function offset(el) {
            const rect = el.getBoundingClientRect(), 
                scrollLeft = window.scrollX || document.documentElement.scrollLeft,
                scrollTop = window.scrollY || document.documentElement.scrollTop;
            return { top: rect.top + scrollTop, left: rect.left + scrollLeft}
        }
        setTimeout(() => {
            animOnScroll();
        }, 400);
    }
});

