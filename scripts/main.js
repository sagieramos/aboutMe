const hamburgerMenu = document.getElementById('hamburger-menu');
const menuContainer = document.querySelector('.menu');
const cancelIcon = document.getElementById('cancel-icon');
const html = document.querySelector('html');

// Function Declaration

function handleWindowResize() {
  const windowWidth = window.innerWidth || document.documentElement.clientWidth;
  if (windowWidth > 998) {
    menuContainer.style.display = 'none';
  }
  hamburgerMenu.style.display = 'flex';
  html.style.overflowY = 'auto';
}

function handleClick() {
  menuContainer.style.display = 'none';
}

function handleMenuOptionClick(event) {
  event.preventDefault();
  const target = event.target.getAttribute('data-target');
  const activeContent = document.querySelector('.content.active');
  const targetContent = document.getElementById(target);
  if (activeContent) {
    activeContent.classList.remove('active');
  }
  if (targetContent) {
    targetContent.classList.add('active');
    targetContent.scrollIntoView({ behavior: 'smooth' });
  }
  hamburgerMenu.style.display = 'flex';
  html.style.overflowY = 'auto';
}

// Event Checker

hamburgerMenu.addEventListener('click', () => {
  menuContainer.style.display = 'block';
  hamburgerMenu.style.display = 'none';
  html.style.overflowY = 'hidden';
});

cancelIcon.addEventListener('click', () => {
  menuContainer.style.display = 'none';
  hamburgerMenu.style.display = 'flex';
  html.style.overflowY = 'auto';
});

document.addEventListener('DOMContentLoaded', () => {
  const menuOptions = document.querySelectorAll('.menu li');
  for (let i = 0; i < menuOptions.length; i = 1 + i) {
    menuOptions[i].addEventListener('click', handleClick);
  }
});

window.addEventListener('resize', handleWindowResize);

document.addEventListener('DOMContentLoaded', () => {
  const menuOptions = document.querySelectorAll('.menuListt a');
  for (let i = 0; i < menuOptions.length; i += 1) {
    menuOptions[i].addEventListener('click', handleMenuOptionClick);
  }
});
