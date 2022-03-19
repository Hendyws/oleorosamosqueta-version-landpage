window.onload = function(){
  document.querySelector(".menuMobile").addEventListener("click", function(){
      if(document.querySelector(".menu nav ul").style.opacity == '1') {
          document.querySelector(".menu nav ul").style.opacity ='0';
          document.querySelector(".container_produto").style.opacity ='1';
      } else {
          document.querySelector(".menu nav ul").style.opacity = '1';
          document.querySelector(".container_produto").style.opacity ='0';
      }
  })
};
const debounce = function (func, wait, immediate) {
  let timeout;
  return function (...args) {
    const context = this;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    }
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args)
    }
}
const target = document.querySelectorAll('[data-animate]');
const animationClass = 'animate';

function animeScroll () {
  const windowTop = window.pageYOffset + ((window.innerHeight * 4) /4);
  target.forEach(function(element){
    if ((windowTop) > element.offsetTop) {
      element.classList.add(animationClass)
    } else {
      element.classList.remove(animationClass)
    }
  }
)};
animeScroll();
if(target.length) {
  window.addEventListener('scroll',debounce(function() {
    animeScroll();
  }, 200));
}


function upscreen() {
  window.scrollTo({
      top:0,
      behavior: 'smooth'
  });
}
function scrollbutton() {
  if(window.scrollY === 0) {
      //ocultar botão
      document.querySelector('.up').style.display = 'none';
  } else {
      //mostrar botão
      document.querySelector('.up').style.display = 'block';
  }
}
window.addEventListener('scroll',scrollbutton);

// MENU MOBILE

const btnMenu = document.querySelector('.btn-menu');
function toggleMenu () {
    const navMenu = document.querySelector('.menu');
    navMenu.classList.toggle('active');
}
btnMenu.addEventListener('click', toggleMenu);