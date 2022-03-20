import favoriteImage from '../../../assets/svg/favorite.svg'

class Header {
    static TextObject = {
        MainTitle: 'Movie Serach',
    }

    constructor(){
        this.container = document.createElement('header');
        this.container.classList.add('header');
    }

    onOpenFavorites(callback) {
        this.favoriteButton.addEventListener('click', () => {
            callback?.();
        })
    }

    createHeaderTitle(title) {
        this.headerTitle = document.createElement('h1');
        this.headerTitle.innerText = title;
        this.headerTitle.classList.add('header__title');
        return this.headerTitle;
    }
    
    createFavoriteButton() {
        this.favoriteButton = document.createElement('a');
        this.favoriteButton.classList.add('header__favorite-button');
        const imageHTML = document.createElement('img');
        imageHTML.src = favoriteImage;
        imageHTML.alt = 'test-image';
        this.favoriteButton.append(imageHTML);
        return this.favoriteButton;
    }

    render() {
        const invisibleElement = document.createElement('div');
        const title = this.createHeaderTitle(Header.TextObject.MainTitle);
        const favoriteButton = this.createFavoriteButton();
        this.container.append(invisibleElement);
        this.container.append(title);
        this.container.append(favoriteButton);
        return this.container;
    }
}

export default Header;