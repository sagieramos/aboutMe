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

document.addEventListener('DOMContentLoaded', () => {
  const menuOptions = document.querySelectorAll('.menuList a');
  for (let i = 0; i < menuOptions.length; i += 1) {
    menuOptions[i].addEventListener('click', handleMenuOptionClick);
  }
});
