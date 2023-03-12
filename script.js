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