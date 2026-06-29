document.addEventListener("DOMContentLoaded", () => {

  /* BURGER MENU */
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  const menuIcon = document.querySelector('.menu-toggle i');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');

      if (navLinks.classList.contains('active')) {
        menuIcon.classList.replace('fa-bars', 'fa-xmark');
      } else {
        menuIcon.classList.replace('fa-xmark', 'fa-bars');
      }
    });
  }

});