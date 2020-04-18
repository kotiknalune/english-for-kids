import { Card } from './Card';
import categories from './words';
import './animator';

class App {
  constructor() {
    this.elements = {
      container: null,
      pointContainer: null,
      words: []
    };

    this.properties = {
      playMode: false,
      gameStarted: false
    };

    this.init();
  }

  init() {
    this.createContainer();
    this.createCategories();
    this.setupPlayMode();
  }

  createContainer() {
    const { elements } = this;
    const main = document.querySelector('.main-container');
    elements.pointContainer = document.createElement('div');

    elements.pointContainer.classList.add('points');
    elements.pointContainer.classList.add('no-display');
    main.append(elements.pointContainer);

    elements.container = document.createElement('div');
    elements.container.classList.add('container__cards');
    main.append(elements.container);
  }

  createCategories() {
    const { elements } = this;

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

      categoryCard.addEventListener('click', () => {
        this.removeElements();
        this.addWords(category.name);
      });
    });
  }

  addWords(name) {
    categories.forEach(category => {
      if (name === category.name) {
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

  cardModeSwitcher() {
    this.properties.playMode = true;
    document.querySelectorAll('.card__info').forEach((info) => {
      info.classList.toggle('play-info');
    });
    document.querySelectorAll('.card__word-image > img').forEach((image) => {
      image.classList.toggle('play-img');
    });

    document.querySelector('.play-panel').classList.toggle('on');
    document.querySelector('.points').classList.toggle('no-display');
  }


  setupPlayMode() {
    const { elements, properties } = this;

    const checkbox = document.querySelector('input[type="checkbox"]');

    checkbox.addEventListener('change', () => {
      if (checkbox.checked === true) {
        properties.playMode = true;
        this.cardModeSwitcher();
      } else {
        properties.playMode = false;
        this.cardModeSwitcher();
      }
    });

    const startGame = document.querySelector('.start-game');
    startGame.addEventListener('click', () => {
      if (properties.gameStarted === false) {
        categories.forEach((category) => {
          if (window.location.href.indexOf(category.name) > -1) {
            elements.words = [];

            category.words.forEach((word) => {
              elements.words.push(word.en);
            });

            App.shuffle(elements.words);
            Card.playSound(elements.words[0]);
          }
        });
        properties.gameStarted = true;
      }
      if (properties.gameStarted === true) {
        startGame.classList.add('disabled');
        startGame.disabled = true;

        const playingCards = document.querySelectorAll('.card');

        const playNextWord = () => {
          elements.words.shift();
          const quizWord = elements.words[0];
          if (elements.words.length > 0) {
            const play = () => {
              Card.playSound(quizWord);
            };
            setTimeout(play, 1000);
          }
        };

        const repeatSound = document.querySelector('.repeat-sound');
        repeatSound.addEventListener('click', () => {
          Card.playSound(elements.words[0]);
        });

        const addStar = (value) => {
          const point = document.createElement('div');
          point.classList.add(value);
          elements.pointContainer.append(point);
        };

        playingCards.forEach((card) => {
          card.addEventListener('click', () =>{
            const alt = card.querySelector('.play-img').alt;
            const targetWord = elements.words[0];
            if (alt === targetWord) {
              App.playSoundEffect('correct');
              playNextWord();
              addStar('star');
            } else if (alt !== targetWord) {
              App.playSoundEffect('wrong');
              addStar('no-star');
            }
            if (elements.words.length === 0) {
              properties.gameStarted = false;
              console.log('accessed');
              const totalCards = document.querySelector('.points').childElementCount;
              const correctAnswers = document.querySelectorAll('.star').length;

              this.removeElements();
              elements.pointContainer.innerHTML = '';

              this.createEndGameScreen(correctAnswers, totalCards);
              startGame.classList.remove('disabled');
              startGame.disabled = false;
            }
          });
        });
      }
    });
  }

  removeElements() {
    this.elements.container.innerHTML = '';
  }

  createEndGameScreen(correct, total) {
    this.properties.gameStarted = false;

    this.cardModeSwitcher();

    const checkbox = document.querySelector('input[type="checkbox"]');
    checkbox.checked = false;

    if (total === correct) {
      const winScreen = `
        <button type="button" class="home-button"></button>
        <div class="end-screen">
        <h1>Congratulations!</h1>
        <p>You guessed ${correct} out of ${total} words</p>
        <img src="public/icons/win.svg">
        </div>
        <button type="button" class="again-button"></button>`;
      this.elements.container.innerHTML = winScreen;
      App.playSoundEffect('win');
    } else {
      const loseScreen = `
        <button type="button" class="home-button"></button>
        <div class="end-screen">
        <h1>Opps...</h1>
        <p>You guessed ${correct} out of ${total} words</p>
        <img src="public/icons/lose.svg">
        </div>
        <button type="button" class="again-button"></button>`;
      this.elements.container.innerHTML = loseScreen;
      App.playSoundEffect('lose');
    }
  }

  static playSoundEffect(effect) {
    let audio = new Audio();
    audio.src = `public/media/${effect}.mp3`;
    audio.play();
  }

  static shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }
}

window.addEventListener('DOMContentLoaded', () => {
  const app = new App();
  return app;
});
