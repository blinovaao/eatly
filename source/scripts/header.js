const headerToggle = document.querySelector('.header-nav__toggle');
const navigation = document.querySelector('.header-nav');

headerToggle.addEventListener('click', () => {
  navigation.classList.toggle('opened');
});
