function localLang() {
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

export default localLang;
