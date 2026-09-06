import searchIcon from '../../../assets/svg/search-icon.svg';
import clearIcon from '../../../assets/svg/clear-icon.svg';

class SearchBar {
    constructor() {
        this.container = document.createElement('div');
        this.container.classList.add('search-bar');
    }

    createInput() {
        this.input = document.createElement('input');
        this.input.classList.add('search-bar__input');
        this.input.type = 'text';
        this.input.placeholder = 'Something went wrong';
        return this.input;
    }

    createInputBtn(src, alt, btnClass) {
        this.btn = document.createElement('img');
        this.btn.classList.add(btnClass);
        this.btn.src = src;
        this.btn.alt = alt;
        return this.btn;
    }

    render() {

        const buttonsContainer = document.createElement('div');
        buttonsContainer.classList.add('search-bar__buttons');
        const clearBtnHTML = this.createInputBtn(clearIcon, 'clear input button', 'search-bar__clear-button');
        const searchBtnHTML = this.createInputBtn(searchIcon, 'search input button', 'search-bar__search-button');
        buttonsContainer.append(clearBtnHTML);
        buttonsContainer.append(searchBtnHTML);
        const inputHTML = this.createInput();
        this.container.append(inputHTML);
        this.container.append(buttonsContainer);
        return this.container;
    }
}

export default SearchBar;