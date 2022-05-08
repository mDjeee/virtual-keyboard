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
  document.querySelectorAll('.letter').forEach(item => {
    let en = item.dataset.en;
    let ru = item.dataset.ru;
    let shift = item.dataset.shift;
    let shiftRu = item.dataset.shiftRu;
    item.dataset.en = ru;
    item.dataset.ru = en;
    item.dataset.shift = shiftRu;
    item.dataset.shiftRu = shift;
    item.textContent = item.dataset.en;
  });
}

export default changeLanguage;
