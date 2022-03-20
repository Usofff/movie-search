import Card from '../card/card';


class CardsContainer {
    constructor() {
        this.container = document.createElement('div');
        this.container.classList.add('cards-container'); 
    }

    createCard(cardInfo) {
        const card = new Card(cardInfo);
        const cardHTML = card.render();
        this.container.append(cardHTML);
    }

    render() {
        this.createCard(TestInfo);
        this.createCard(TestInfo2);
        return this.container;
    }
}

export default CardsContainer