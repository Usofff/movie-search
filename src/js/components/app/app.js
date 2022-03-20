import Header from '../header/header';
import Footer from '../footer/footer';
import Main from '../mian/main';
import SwiperComponent from '../swiper/swiper';
import FetchFilms from '../../core/api';
import { FavFilms } from '../../core/api/favoriteFilms';
import { router } from '../../services/router/router';




class App {
    container;

    testObj = {
        value: 'Avengers',
    }

    constructor() {
        this.container = document.body;
        this.header = new Header();
        this.main = new Main();
        this.footer = new Footer();
        this.swiper = new SwiperComponent();
    }

    initListeners() {
        const searchBarBtns = document.querySelector('.search-bar__buttons');
        const input = this.main.searchBar.input;
        this.header.onOpenFavorites(()=>{
            this.main.favoriteFilms.toggleVisibility();
            router.changeURL();
        });

        input.addEventListener('keydown', (e)=>{
            if(e.code === 'Enter') {
                this.renderFilms(input);
            }
        })

        searchBarBtns.addEventListener('click', (e) => {
            if(e.target.classList.contains('search-bar__clear-button')) {
                input.value = '';
            }
            if(e.target.classList.contains('search-bar__search-button')) {
                this.renderFilms(input);
            }
            
        })

        this.swiper.container.addEventListener('click', (e) => {
            this.main.card.changeFavoriteStatus(e);
        });

        window.addEventListener('load', ()=>{
            router.init(this.main.favoriteFilms.container);
          })
        
    }

    renderFilms(input) {
        const fetching = new FetchFilms(input.value);
            fetching.fetchFilms().then(()=>{
                if(fetching.films.length !== 0) {
                    this.swiper.swiperContainer.innerHTML = '';
                    fetching.films.forEach(film =>{
                        this.main.createCard(film, this.swiper.swiperContainer);
                 })
                    this.swiper.swiper.update();
                }
            });
            
    }

    run() {
        const headerHTML = this.header.render();
        const mainHTML = this.main.render();
        const footerHTML = this.footer.render();
        const swiperHTML = this.swiper.render();
        this.container.append(headerHTML);
        this.container.append(mainHTML);
        this.main.container.append(swiperHTML);
        this.swiper.init();
        this.container.append(footerHTML);
        this.initListeners();
        this.renderFilms(this.testObj)
        FavFilms.render();
    }

}

export default App;