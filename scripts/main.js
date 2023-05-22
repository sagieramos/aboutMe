const hamburgerMenu = document.getElementById('hamburger-menu');
const menuContainer = document.querySelector('.menu');
const cancelIcon = document.getElementById('cancel-icon');

// Function Declaration

function handleWindowResize() {
  const menuContainer = document.querySelector('.menu');
  const windowWidth = window.innerWidth || document.documentElement.clientWidth;
  if (windowWidth > 998) {
    menuContainer.style.display = 'none';
  }
}

function handleClick() {
  const menuContainer = document.querySelector('.menu');
  menuContainer.style.display = 'none';
}

// Event Checker

hamburgerMenu.addEventListener('click', () => {
  menuContainer.style.display = 'block';
});

cancelIcon.addEventListener('click', () => {
  menuContainer.style.display = 'none';
});

document.addEventListener('DOMContentLoaded', () => {
  const menuOptions = document.querySelectorAll('.menu li');
  for (let i = 0; i < menuOptions.length; i = 1 + i) {
    menuOptions[i].addEventListener('click', handleClick);
  }
});

window.addEventListener('resize', handleWindowResize);