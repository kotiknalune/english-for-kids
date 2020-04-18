const navToggle = document.querySelector('.navigation__toggle');
const menu = document.querySelector('.menu');
const body = document.querySelector('body');
const overlay = document.querySelector('.overlay');

const toggleMenu = () => {
  navToggle.classList.toggle('open');
  menu.classList.toggle('show');
  body.classList.toggle('stop-scroll');
  overlay.classList.toggle('engaged');
};

navToggle.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);

const checkBox = document.getElementById('switch__input');
checkBox.addEventListener('click', () => {
  if (checkBox.checked === true) {
    body.classList.add('play-mode');
  } else {
    body.classList.remove('play-mode');
  }
});
