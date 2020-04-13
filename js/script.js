//import cards from 'cards';

function menuAnimate() {
    const navToggle = document.querySelector('.navigation__toggle');
    const menu = document.querySelector('.menu');
    navToggle.classList.toggle('open');
    menu.classList.toggle('show');
}

function bgChange() {
  const checkBox = document.getElementById("switch__input");
  const body = document.querySelector("body");
  if (checkBox.checked == true){
   body.classList.add('play-mode');
  } else {
    body.classList.remove('play-mode');
  }
}

function flipCard() {
  const card = document.querySelector('.card');
  const leftButton = document.querySelector('.sound__button');
  const rightButton = document.querySelector('.info__button');
  card.classList.toggle('flipped');
  rightButton.classList.toggle('hidden');
  leftButton.classList.toggle('hidden');
}

function returnCard() {

  
  const card = document.querySelector('.card');
  if(card.classList.contains('flipped')){
    setTimeout(flipCard(),1000)
  }
}

function playSound() {
  const leftButton = document.querySelector('.sound__button');
  const word = leftButton.dataset.word;
  const url = `https://wooordhunt.ru/data/sound/word/uk/mp3/${word}.mp3`;

  new Audio(url).play();
  console.log(url);

}