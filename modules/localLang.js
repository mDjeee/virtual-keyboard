function localLang() {
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

export default localLang;
