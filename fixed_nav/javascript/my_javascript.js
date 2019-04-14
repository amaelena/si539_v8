function classToggle() {
  const navs = document.querySelectorAll('.navbar_items')

  navs.forEach(nav => nav.classList.toggle('navbar_ToggleShow'));
}

document.querySelector('.navbar_link-toggle').addEventListener('click', classToggle);

//typewriter code
window.addEventListener('load', printLetter, false);
var typeString='Designer, researcher, passionate storyteller. Based in Ann Arbor, MI.';
var i=0;
var speed=40;
function printLetter(e){
  if (i<typeString.length){
    document.getElementById('tagline').innerHTML+=typeString.charAt(i);
    i++;
    setTimeout(printLetter, speed);
  }
}

//sticky nav code
//make appear when scrolling up - add event listener
//disappear when scrolling down
//display none when scrolling down
$(document).ready(function(){
  var lastScroll=window.pageYOffset //Y position of element before scroll
  window.addEventListener('scroll', stickNav, false);
  function stickNav(e) {
    var navbar=document.getElementById("topnav");
    var currentScroll=window.pageYOffset;
    if (lastScroll > currentScroll) {
      navbar.style.top="0";
    } else {
      navbar.style.top="-100px";
    }
    lastScroll=currentScroll;
  }
});

// carousel code
var index = 1;
var i = 1;
showSlide(index); //show the current slide

// Next/previous controls
function nextSlide(n) {
  showSlide(index += n);
}
// Thumbnail image controls
function currentSlide(n) {
  showSlide(index = n);
}

function showSlide(n) {
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {index = 1}
  if (n < 1) {index = slides.length}
  for (n = 0; n < slides.length; n++) {
      slides[n].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", " ");
  }
  slides[index-1].style.display = "block";
  dots[index-1].className += " active";
}
