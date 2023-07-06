import * as flsFunctions from "./modules/functions.js";

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
});

