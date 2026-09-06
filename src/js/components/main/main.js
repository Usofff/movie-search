import SearchBar from '../searchBar/searchBar';
import CardsContainer from '../cards-container/cardsContainer';
import FavoriteFilms from '../favoriteFilms/favoriteFilms'; 

import Card from '../card/card';


class Main {
    constructor(){
        this.container = document.createElement('main');
        this.container.classList.add('main');
    }

    createCard(cardInfo, container) {
        
        this.card = new Card(cardInfo);
        const cardHTML = this.card.render();
        container.append(cardHTML);
    }

    render() {
        this.favoriteFilms = new FavoriteFilms();
        const favoriteFilmsHTML = this.favoriteFilms.render();
        this.container.append(favoriteFilmsHTML);

        this.searchBar = new SearchBar();
        const searchBarHTML = this.searchBar.render();
        this.container.append(searchBarHTML);

        return this.container;
    }
}

export default Main;