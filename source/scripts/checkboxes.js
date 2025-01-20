const checkboxes = document.querySelectorAll('.checkboxes__item');

checkboxes.forEach((checkboxItem) => {
  const checkbox = checkboxItem.querySelector('.checkboxes__input');

  checkbox.addEventListener('click', () => {
    checkboxItem.classList.toggle('checked');
  });
});
