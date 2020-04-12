
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

