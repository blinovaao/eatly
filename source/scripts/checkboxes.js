const checkboxesList = document.querySelector('.checkboxes');
const checkboxes = document.querySelectorAll('.checkboxes__item');

checkboxes.forEach((checkboxItem) => {
  const checkbox = checkboxItem.querySelector('.checkboxes__input');

  if (checkbox.checked) {
    checkboxItem.classList.add('checked');
  }
});

checkboxesList.addEventListener('click', (evt) => {
  const currentCheck = evt.target.closest('.checkboxes__item');

  currentCheck.classList.toggle('checked');
});
