import { Card } from './Card';
import categories from './words';
import { toggleMenu } from './animator';
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
    this.startGame();
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
        this.addWords(category);
      });

      const menu = document.querySelector('.menu');
      const menuLink = document.createElement('li');
      menuLink.classList.add('menu__item');
      menuLink.innerHTML = `<a class="menu__link ${category.name}" href="#${category.name}">${category.name}</a>`;

      menuLink.addEventListener('click', () => {
        this.removeElements();
        this.addWords(category);
        toggleMenu();
      });

      menu.append(menuLink);
    });
  }

  addWords(category) {
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

      if (this.properties.playMode !== true) {
        outer.addEventListener('click', (e) => {
          if (!this.properties.playMode && !e.target.classList.contains('info')) {
            Card.playSound(word.en);
          }
        });

        const rotateCard = () => {
          outer.classList.toggle('flipped');
          inner.classList.toggle('hidden');
          infoButton.classList.toggle('hidden');
          soundButton.classList.toggle('hidden');
        };

        infoButton.addEventListener('click', () => {
          rotateCard();
        });

        outer.addEventListener('mouseleave', () => {
          if (outer.classList.contains('flipped')) {
            setTimeout(() => {
              rotateCard();
            }, 200);
          }
        });
      } else {
        this.cardModeSwitcher();
      }
    });
    this.properties.gameStarted = false;
    const startGame = document.querySelector('.start-game');
    const repeatSound = document.querySelector('.repeat-sound');
    repeatSound.classList.add('disabled');
    repeatSound.disabled = true;
    startGame.classList.remove('disabled');
    startGame.disabled = false;
    this.elements.pointContainer.innerHTML = '';
  }

  cardModeSwitcher() {
    this.properties.gameStarted = false;

    if (this.properties.playMode) {
      document.querySelectorAll('.card__info').forEach((info) => {
        info.classList.add('play-info');
      });
      document.querySelectorAll('.card__word-image > img').forEach((image) => {
        image.classList.add('play-img');
      });

      document.querySelector('.points').classList.remove('no-display');
      document.querySelector('.play-panel').classList.add('on');
    } else {
      document.querySelectorAll('.card__info').forEach((info) => {
        info.classList.remove('play-info');
      });
      document.querySelectorAll('.card__word-image > img').forEach((image) => {
        image.classList.remove('play-img');
        image.classList.remove('checked');
      });

      document.querySelector('.points').classList.add('no-display');
      document.querySelector('.points').innerHTML = '';
      document.querySelector('.play-panel').classList.remove('on');
    }
  }

  setupPlayMode() {
    const { properties } = this;

    const checkbox = document.querySelector('input[type="checkbox"]');
    const startGame = document.querySelector('.start-game');
    const repeatSound = document.querySelector('.repeat-sound');

    repeatSound.classList.add('disabled');
    repeatSound.disabled = true;

    startGame.classList.add('disabled');
    startGame.disabled = true;

    checkbox.addEventListener('change', () => {
      if (checkbox.checked) {
        properties.playMode = true;

        if (window.location.toString().split('#').length !== 1) {
          startGame.classList.remove('disabled');
          startGame.disabled = false;
        }

        this.cardModeSwitcher();
      } else {
        properties.playMode = false;

        repeatSound.classList.add('disabled');
        repeatSound.disabled = true;

        this.cardModeSwitcher();
      }
    });
  }

  startGame() {
    const startGame = document.querySelector('.start-game');
    const repeatSound = document.querySelector('.repeat-sound');

    const { elements, properties } = this;
    startGame.addEventListener('click', () => {
      if (properties.gameStarted === false) {
        categories.forEach((category) => {
          if (window.location.href.indexOf(category.name) > -1) {
            elements.words = [];

            startGame.classList.remove('disabled');
            startGame.disabled = false;

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

        repeatSound.classList.remove('disabled');
        repeatSound.disabled = false;

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
              card.querySelector('.play-img').classList.add('checked');

              App.playSoundEffect('correct');
              playNextWord();
              addStar('star');
            } else if (alt !== targetWord && elements.words.includes(alt)) {
              App.playSoundEffect('wrong');
              addStar('no-star');
            }
            if (elements.words.length === 0) {
              properties.gameStarted = false;

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
    document.querySelector('.play-panel').classList.remove('on');
    checkbox.checked = false;

    if (total === correct) {
      const winScreen = `
        <div class="end-screen">
        <h1>Good!</h1>
        <p>You guessed ${correct} out of ${total} words</p>
        <img src="public/icons/win.svg">
        </div>`;
      this.elements.container.innerHTML = winScreen;
      App.playSoundEffect('win');
    } else {
      const loseScreen = `
        <div class="end-screen">
        <h1>Oh no...</h1>
        <p>You guessed ${correct} out of ${total} words</p>
        <img src="public/icons/lose.svg">
        </div>`;
      this.elements.container.innerHTML = loseScreen;
      App.playSoundEffect('lose');
    }

    const returnHome = () => {
      this.removeElements();
      App.removesHash();
    };
    setTimeout(returnHome, 3000);
  }

  static playSoundEffect(effect) {
    let audio = new Audio();
    audio.src = `public/media/${effect}.mp3`;
    audio.play();
  }

  static shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }

  static removesHash() {
    let url = window.location.toString();
    if (url.includes('#')) {
      window.location = url.split('#')[0];
    }
  }
}

window.addEventListener('DOMContentLoaded', () => {
  const app = new App();
  return app;
});
