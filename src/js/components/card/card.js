import starIcon from '../../../assets/svg/star-icon.svg';
import fillFavoriteIcon from '../../../assets/svg/favorite-icon-fill.svg';
import unfillFavoriteIcon from '../../../assets/svg/favorite-icon-unfill.svg';

import {FavFilms} from '../../core/api/favoriteFilms'

class Card {
    constructor(cardInfo) {
        this.container = document.createElement('div');
        this.container.classList.add('card');
        this.container.classList.add('swiper-slide');
        this.title = cardInfo.Title;
        this.poster = cardInfo.Poster;
        this.year = cardInfo.Year;
        this.imdbRating = cardInfo.imdbRating;
        this.imdbID = cardInfo.imdbID;
    }

    createTitle() {
        const title = document.createElement('h3');
        title.classList.add('card__title');
        title.innerText = this.title;
        this.container.append(title);
    }

    createPoster() {
        const poster = document.createElement('img');
        poster.classList.add('card__poster');
        poster.src = this.poster;
        poster.alt = '';
        this.container.append(poster);
    }

    createInfo() {
        const cardInfo = document.createElement('div');
        cardInfo.classList.add('card__info');
        const year = document.createElement('div');

        const infoWrapper = document.createElement('div');
        infoWrapper.classList.add('card__info-wrapper');

        year.innerText = this.year;
        infoWrapper.append(year);

        const ratingWrapper = document.createElement('div');
        ratingWrapper.classList.add('card__rating-wrapper');
        const rating = document.createElement('p');
        rating.innerText = this.imdbRating;
        rating.classList.add('card__rating');
        const star = document.createElement('img');
        star.src = starIcon;
        ratingWrapper.append(star);
        ratingWrapper.append(rating);
        infoWrapper.append(ratingWrapper);

        const favoritebtn = document.createElement('img');
        favoritebtn.classList.add('card__favorite-button');
        const favFilms = FavFilms.getFavoriteFilms();
        if(favFilms === null || !favFilms.includes(this.imdbID)) {
            favoritebtn.src = unfillFavoriteIcon;
            favoritebtn.classList.add('unfilled');
        } else {
            favoritebtn.src = fillFavoriteIcon;
            favoritebtn.classList.add('filled');
        }
        favoritebtn.alt = '';

        this.container.dataset.imdbID = this.imdbID;


        cardInfo.append(infoWrapper);
        cardInfo.append(favoritebtn);
        this.container.append(cardInfo);
    }

    changeFavoriteStatus(e) {
        if(e.target.classList.contains('card__favorite-button'))
            {if(e.target.classList.contains('unfilled')) {
                FavFilms.addFilmToFavorite(e.target.closest('.card'));
                e.target.src = fillFavoriteIcon;
                FavFilms.render();
            } else {
                FavFilms.removeFilmFromFavorite(e.target.closest('.card'));
                e.target.src = unfillFavoriteIcon;
                FavFilms.render();
            }
            e.target.classList.toggle('unfilled');
        }
    }

    render() {
        this.createTitle();
        this.createPoster();
        this.createInfo();
        return this.container;
    }
}

export default Card;