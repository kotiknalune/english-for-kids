class Card {
  constructor(category, en, ru) {
    this.en = en;
    this.ru = ru;
    this.category = category;

    this.html = `
    <div class="card">
      <div class="card__card-face">
        <div class="card__word-image"><img src="public/images/${category}/${en}.svg" alt="${en}"></div>
        <div class="card__info">
          <div class="info__button"><span class="button__icon info"></span></div>
          <div class="info__word">${en}</div>
          <div class="sound__button"><span class="button__icon"></span></div>
        </div>
      </div>
      <div class="card__card-back">
        <div class="card__word-image"><img src="public/images/${category}/${en}.svg" alt="${en}"></div>
        <div class="card__info">
          <div class="info__word">${ru}</div>
        </div>
      </div>
    </div>
    `;
  }

  static playSound(en) {
    const audio = new Audio();
    audio.src = `https://wooordhunt.ru/data/sound/word/uk/mp3/${en}.mp3`;
    audio.play();
  }
}

export {
  Card
};
