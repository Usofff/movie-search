class FetchFilms {
    constructor (title) {
        this.titleForFetch = title;
        this.films = [];
    }

    async fetchFilms() {
        try{
            const url = `https://www.omdbapi.com/?s=${this.titleForFetch}&page=1&apikey=3979c7cd`;
            const response = await fetch(url, {
                headers: {
                    // 'Access-Control-Allow-Origin': '*'
                }
            });
            const data = await response.json();
            if(data.Response === 'True') {
                const promises = data.Search.map(film => {return this.fetchFullFilmInfo(film)});
                const films = await Promise.all(promises);
                this.films = films;
            } else {
                alert('Ничего не нашло');
            }
        } catch(error) {
            console.log(error)
        }
    }

    async fetchFullFilmInfo(film) {
        try {
            const respose = await fetch(`https://www.omdbapi.com/?i=${film.imdbID}&apikey=3979c7cd`, {
                headers: {
                    // 'Access-Control-Allow-Origin': '*'
                }
            });
            const filmData = await respose.json();
            return filmData;
        } catch (error) {
            console.log(error);
        }
    }


}

export default FetchFilms;