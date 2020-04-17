class Card {
    constructor(word, translation, image) {
        this.word = word;
        this.translation = translation;
        this.image = image;
        this.audio = audio;

        this.play = false;
        this.timesTrained = timesTrained;
        this.timesPlayed = timesPlayed;
        this.timesCorrect = timesCorrect;
    }
}