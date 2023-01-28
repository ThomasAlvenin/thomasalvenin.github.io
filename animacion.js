const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
  link.addEventListener('mouseover', () => {
    link.classList.add('nav-active');
  });
  link.addEventListener('mouseout', () => {
    link.classList.remove('nav-active');
  });
});
