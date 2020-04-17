class Card {
  constructor(category, word, translation) {
    this.word = word;
    this.translation = translation;
    this.category = category;

    this.image = new Image();
    this.image.src = `/src/assets/images/${this.category}/${this.word}.svg`;

    this.audio = new Audio();
    this.audio.src = `https://wooordhunt.ru/data/sound/word/uk/mp3/${word}.mp3`;

    this.playMode = false;
    // this.timesTrained = timesTrained;
    // this.timesPlayed = timesPlayed;
    // this.timesCorrect = timesCorrect;
  }

  playSound() {
    this.audio.play();
  }
}

export default {
  Card
};
