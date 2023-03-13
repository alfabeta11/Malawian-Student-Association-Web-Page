let dropdown = document.querySelector('.dropdown-container');
let navContainer = document.querySelector('.nav-container');
let menuBtn = document.querySelector('#menuBtn');
let closeBtn = document.querySelector('#closeBtn');

// This function shows/hide an item when called;

function showItem(item, bool) {
    if (bool) {
      item.classList.add('open');
    } else {
      item.classList.remove('open');
    }
  }
  
  menuBtn.addEventListener('click', () => {
    showItem(dropdown, true);
    showItem(navContainer, true);
  })
  
  closeBtn.addEventListener('click', () => {
    showItem(dropdown, false);
    showItem(navContainer, false);
  })

  /***************************************************FROM W3SCHOOLS ********************************* */
  let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
