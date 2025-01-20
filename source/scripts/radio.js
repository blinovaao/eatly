const radioList = document.querySelector('.radio');
const radioItems = document.querySelectorAll('.radio__item');

radioItems.forEach((radioItem) => {
  const currentRadio = radioList.querySelector('.radio__input:checked');

  if (radioItem.contains(currentRadio)) {
    radioItem.classList.add('checked');
  }

  radioList.addEventListener('click', (evt) => {
    radioList.querySelector('.radio__item.checked').classList.remove('checked');
    const currentFilter = evt.target.closest('.radio__item');
    currentFilter.classList.add('checked');
  });
});
