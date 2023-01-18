/////// Mobile menue /////// 

const burgerButton = document.querySelector('.burger')
const mobileMenu = document.querySelector('.mobile-menu')

function openMobileMenu() {
  mobileMenu.classList.toggle('mobile-menu-hidden');
  this.classList.toggle('active');
}

burgerButton.addEventListener('click', openMobileMenu)