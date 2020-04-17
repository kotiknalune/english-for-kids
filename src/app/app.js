import Card from './Card';
import categories from './words';
import './animator';

class App {
  constructor() {
    this.elements = {
      container: null,
      cards: []
    };

    this.properties = {
      playMode: false // привязать к свитчеру
    };

    // this.categories = words.category;
    this.init();
  }

  init() {
    this.createCategories();
  }


  createCategories() {
    const { elements } = this;
    const main = document.querySelector('.main-container');
    elements.container = document.createElement('div');
    elements.container.classList.add('container__cards');
    main.append(elements.container);

    categories.forEach(category => {
      const categoryCard = document.createElement('div');
      categoryCard.classList.add('category-card');
      categoryCard.innerHTML = `
          <a href="#${category.name}">
            <div class="card__image card__image_${category.name}">
              <img src="../src/assets/images/categories/${category.name}-category.png" alt="${category.name}">
            </div>
            <div class="card__title">${category.name}</div>
          </a>
        `;
      elements.container.append(categoryCard);
    });
  }

  createCards() {
    this.cards = new Card();
  }
}

window.addEventListener('DOMContentLoaded', () => {
  const app = new App();
  return app;
});

// const leftButton = document.querySelector('.sound__button');
// const rightButton = document.querySelector('.info__button');
// const card = new Card('rocket', 'ракета', 'assets/images/space/rocket.svg');

// card.addEventListener('click',
//   function flipCard() {
//     card.classList.toggle('flipped');
//     rightButton.classList.toggle('hidden');
//     leftButton.classList.toggle('hidden');
//   });

// leftButton.addEventListener('click', () =>{
//   card.playSound();
// });
