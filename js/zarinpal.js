const hamburgerIcon = document.querySelector('.hamburger-icon');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const crossIcon = document.querySelector('.corss-icon');
const showMoreMenu = document.querySelector('#show-more-menu');
const showProductMenu = document.querySelector('#show-product-menu');

hamburgerIcon.addEventListener('click', function () {
  hamburgerMenu.classList.add('show-hamburger-menu');
});

crossIcon.addEventListener('click', function () {
  hamburgerMenu.classList.remove('show-hamburger-menu');
});

showMoreMenu.addEventListener('mouseenter' , function(e){
  const div = e.target.childNodes[5];
  div.style.animation = 'showup 0.35s 1';
  div.style.display = 'block';
})

showMoreMenu.addEventListener('mouseleave' , function(e){
  const div = e.target.childNodes[5];
  div.style.display = 'none';
})

showProductMenu.addEventListener('mouseenter' , function(e){
  const div = e.target.childNodes[5];
  div.style.animation = 'showup 0.35s 1';
  div.style.display = 'block';
})

showProductMenu.addEventListener('mouseleave' , function(e){
  const div = e.target.childNodes[5];
  div.style.display = 'none';
})