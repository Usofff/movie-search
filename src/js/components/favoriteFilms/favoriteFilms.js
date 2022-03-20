class FavoriteFilms {
    constructor() {
        this.container = document.createElement('div');
        this.container.classList.add('favorite-films');
        this.container.classList.add('hidden');
    }

    toggleVisibility() {
        this.container.classList.toggle('hidden');
    }

    render() {
        return this.container;
    }
}

export default FavoriteFilms;