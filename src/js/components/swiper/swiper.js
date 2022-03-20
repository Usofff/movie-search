import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Swiper, { Navigation, Pagination } from 'swiper';


class SwiperComponent {
    constructor() {
        this.container = document.createElement('div');
        this.container.classList.add('cards-container');

        this.swiperContainer = document.createElement('div');
        this.swiperContainer.classList.add('swiper-wrapper');
        this.swiperContainer.classList.add('swiper-container');
    }

    init() {
        this.swiper = new Swiper('.swiper', {
            modules: [Navigation, Pagination],
            pagination: {
              el: '.swiper-pagination',
              type: 'bullets',
              clickable: true,
              renderBullet: function (index, className) {
                return '<span class="' + className + '">' + "</span>";
              },
            },
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
            slidesPerView: 4,
            freeMode: true,
            spaceBetween: 70,
            breakpoints: {
              1440: {
                slidesPerView: 4,
                spaceBetween: 70,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 100,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 70,
              },
              279: {
                slidesPerView: 1,

              }
            }
          })
          return this.swiper
    }

    render() {
        const swiper = document.createElement('div');
        swiper.classList.add('swiper');

        

        const swiperPagitation = document.createElement('div');
        swiperPagitation.classList.add('swiper-pagination');

        const swiperBtnPrev = document.createElement('div');
        swiperBtnPrev.classList.add('swiper-button-prev');

        const swiperBtnNext = document.createElement('div');
        swiperBtnNext.classList.add('swiper-button-next');

        swiper.append(this.swiperContainer);
        this.container.append(swiper);
        this.container.append(swiperPagitation);
        this.container.append(swiperBtnPrev);
        this.container.append(swiperBtnNext);
        return this.container;
    }
}

export default SwiperComponent