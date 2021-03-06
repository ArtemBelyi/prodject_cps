import Swiper from 'swiper/bundle';

function sliders() {
    const swiperBrands = new Swiper('.brands-container', {
        pagination: {
            el: '.swiper-pagination',
        },
        scrollbar: {
            el: '.swiper-scrollbar',
        },
        breakpoints: {
        
            280: {
            slidesPerView: 1.20,
            spaceBetween: 16
            },
            
            528: {
            slidesPerView: 2,
            spaceBetween: 20
            },
            
            784: {
            slidesPerView: 3,
            spaceBetween: 24
            }
        }
    });
    const swiperServices = new Swiper('.services-container', {
        pagination: {
            el: '.swiper-pagination',
        },
        scrollbar: {
            el: '.swiper-scrollbar',
        },
        breakpoints: {
        
            280: {
            slidesPerView: 1.20,
            spaceBetween: 16
            },
            
            528: {
            slidesPerView: 2,
            spaceBetween: 20
            },
            
            784: {
            slidesPerView: 3,
            spaceBetween: 24
            }
        }
    });
    const swiperPrice = new Swiper('.price-container', {
        pagination: {
            el: '.swiper-pagination',
        },
        scrollbar: {
            el: '.swiper-scrollbar',
        },
        breakpoints: {
        
            280: {
            slidesPerView: 1.10,
            spaceBetween: 16
            },
            
            528: {
            slidesPerView: 1.90,
            spaceBetween: 20
            },
            
            784: {
            slidesPerView: 2.90,
            spaceBetween: 24
            }
        }
    });
}


export default sliders;