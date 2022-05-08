function changeLanguage() {
  if (window.localStorage.getItem('lang') === 'ru') {
    window.localStorage.setItem('lang', 'en');
    document.querySelector('.russian').classList.remove('textgreen');
    document.querySelector('.english').classList.add('textgreen');
  } else if (window.localStorage.getItem('lang') === 'en') {
    window.localStorage.setItem('lang', 'ru');
    document.querySelector('.russian').classList.add('textgreen');
    document.querySelector('.english').classList.remove('textgreen');
  }
  let letters = document.querySelectorAll('.letter');
  letters.forEach((item, i) => {
    let en = item.dataset.en;
    let ru = item.dataset.ru;
    let shift = item.dataset.shift;
    let shiftRu = item.dataset.shiftRu;
    letters[i].dataset.en = ru;
    letters[i].dataset.ru = en;
    letters[i].dataset.shift = shiftRu;
    letters[i].dataset.shiftRu = shift;
    letters[i].textContent = item.dataset.en;
  });
}

export default changeLanguage;
