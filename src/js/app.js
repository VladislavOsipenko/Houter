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

    $('ul.house__tabs').on('click', 'li:not(.house__tab_active)', function() {
        $(this)
          .addClass('house__tab_active').siblings().removeClass('house__tab_active')
          .closest('div.container').find('div.house__items').removeClass('house__items_active').eq($(this).index()).addClass('house__items_active');
    });
});

