import { Card } from './Card';
import categories from './words';
import './animator';

class App {
  constructor() {
    this.elements = {
      container: null,
      words: []
    };

    this.properties = {
      playMode: false // привязать к свитчеру
    };

    this.init();
  }

  init() {
    this.createCategories();
    this.createCards();
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
      categoryCard.id = `${category.name}`;

      categoryCard.innerHTML = `
          <a href="#${category.name}">
            <div class="card__image card__image_${category.name}">
              <img src="public/images/categories/${category.name}-category.png" alt="${category.name}">
            </div>
            <div class="card__title">${category.name}</div>
          </a>
        `;
      elements.container.append(categoryCard);
    });
  }

  createCards() {
    const items = document.querySelectorAll('.category-card');

    items.forEach((item) => {
      item.addEventListener('click', () => {
        this.removeCategories();
        this.addWords(item.id);
      });
    });
  }

  addWords(id) {
    categories.forEach(category => {
      if (id === category.name) {
        this.words = category.words;

        category.words.forEach(word => {
          const card = new Card(category.name, word.en, word.ru);

          const wordCard = document.createElement('div');
          wordCard.classList.add('card__container');

          wordCard.innerHTML = card.html;
          this.elements.container.append(wordCard);


          const outer = wordCard.querySelector('.card');
          const inner = wordCard.querySelector('.card__card-face');
          const soundButton = wordCard.querySelector('.sound__button');
          const infoButton = wordCard.querySelector('.info__button');

          soundButton.addEventListener('click', () => {
            Card.playSound(word.en);
          });

          infoButton.addEventListener('click', () => {
            outer.classList.toggle('flipped');
            inner.classList.toggle('hidden');
            infoButton.classList.toggle('hidden');
            soundButton.classList.toggle('hidden');
          });

          outer.addEventListener('mouseleave', () => {
            if (outer.classList.contains('flipped')) {
              setTimeout(() => {
                outer.classList.toggle('flipped');
                inner.classList.toggle('hidden');
                infoButton.classList.toggle('hidden');
                soundButton.classList.toggle('hidden');
              }, 200);
            }
          });
        });
      }
    });
  }

  removeCategories() {
    this.elements.container.innerHTML = '';
  }
}

window.addEventListener('DOMContentLoaded', () => {
  const app = new App();
  return app;
});
