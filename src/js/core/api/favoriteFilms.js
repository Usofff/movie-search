import {storage} from '../../services/storageService/storageService';
import Card from '../../components/card/card';
import FetchFilms from '.';




class FavoriteFilms {
    addFilmToFavorite(element) {
        if(this.getFavoriteFilms()) {
            let films = this.getFavoriteFilms();
            films.push(element.dataset.imdbID);
            storage.addToStorage('Favorite films', films);
        } else {
            storage.addToStorage('Favorite films', [element.dataset.imdbID]);
        }
    };
    removeFilmFromFavorite(element) {
        let films = this.getFavoriteFilms();
        const id = element.dataset.imdbID.toString();
        films.splice(films.indexOf(id), 1);
        storage.addToStorage('Favorite films', films);
    };
    getFavoriteFilms() {
        return storage.getInfoFromStorage('Favorite films');
    };

    async render() {
        this.container = document.querySelector('.favorite-films');
        this.container.innerHTML = '';
        const filmsIDs = this.getFavoriteFilms();
        const promises = filmsIDs.map(filmID => {
            const card = {
                imdbID: filmID
            };
            const fetching = new FetchFilms()
            return fetching.fetchFullFilmInfo(card);
        });
        this.films = await Promise.all(promises);
        this.films.forEach(film =>{
            this.card = new Card(film);
            const cardHTML = this.card.render();
            cardHTML.classList.remove('swiper-slide');
            const cardContainer  = document.createElement('div');
            cardContainer.classList.add('card-container');
            cardContainer.append(cardHTML);
            this.container.append(cardContainer);
          })


    }
}

export const FavFilms = new FavoriteFilms();
