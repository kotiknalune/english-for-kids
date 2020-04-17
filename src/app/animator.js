const navToggle = document.querySelector('.navigation__toggle');
const menu = document.querySelector('.menu');

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('open');
  menu.classList.toggle('show');
});

const checkBox = document.getElementById('switch__input');
const body = document.querySelector('body');

checkBox.addEventListener('click', () => {
  if (checkBox.checked === true) {
    body.classList.add('play-mode');
  } else {
    body.classList.remove('play-mode');
  }
});
