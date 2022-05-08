function capsLock() {
  document.addEventListener('keydown', (e) => {
    if (e.code === 'CapsLock') {
      let letters = document.querySelectorAll('.letter');
      letters.forEach((item, i) => {
        let x = item.dataset.code;
        let lang = window.localStorage.getItem('lang');
        if (lang === 'en') {
          if (item.dataset.shift !== 'null' && item.dataset.code.slice(0, 3) === 'Key') {
            let en = item.dataset.en;
            let shift = item.dataset.shift;
            let ru = item.dataset.ru;
            let shiftRu = item.dataset.shiftRu;
            letters[i].dataset.en = shift;
            letters[i].dataset.shift = en;
            letters[i].dataset.ru = shiftRu;
            letters[i].dataset.shiftRu = ru;
            letters[i].textContent = item.dataset.en;
          }
          if (item.dataset.shift !== null && (x === 'Backquote' || x === 'BracketLeft' || x === 'BracketRight' || x === 'Semicolon' || x === 'Quote' || x === 'Comma' || x === 'Period')) {
            let ru = item.dataset.ru;
            let shiftRu = item.dataset.shiftRu;
            letters[i].dataset.ru = shiftRu;
            letters[i].dataset.shiftRu = ru;
          }
        } else if (lang === 'ru') {
          if (item.dataset.shift !== 'null' && (item.dataset.code.slice(0, 3) === 'Key' || (x === 'Backquote' || x === 'BracketLeft' || x === 'BracketRight' || x === 'Semicolon' || x === 'Quote' || x === 'Comma' || x === 'Period'))) {
            let en = item.dataset.en;
            let shift = item.dataset.shift;
            letters[i].dataset.en = shift;
            letters[i].dataset.shift = en;
            letters[i].textContent = item.dataset.en;
          }
          if (item.dataset.shift !== 'null' && item.dataset.code.slice(0, 3) === 'Key') {
            let ru = item.dataset.ru;
            let shiftRu = item.dataset.shiftRu;
            letters[i].dataset.ru = shiftRu;
            letters[i].dataset.shiftRu = ru;
          }
        }
      });
    }
  });

  document.addEventListener('mousedown', (e) => {
    if (e.target.dataset.code === 'CapsLock') {
      let letters = document.querySelectorAll('.letter');
      letters.forEach((item, i) => {
        let x = item.dataset.code;
        let lang = window.localStorage.getItem('lang');
        if (lang === 'en') {
          if (item.dataset.shift !== 'null' && item.dataset.code.slice(0, 3) === 'Key') {
            let en = item.dataset.en;
            let shift = item.dataset.shift;
            let ru = item.dataset.ru;
            let shiftRu = item.dataset.shiftRu;
            letters[i].dataset.en = shift;
            letters[i].dataset.shift = en;
            letters[i].dataset.ru = shiftRu;
            letters[i].dataset.shiftRu = ru;
            letters[i].textContent = item.dataset.en;
          }
          if (item.dataset.shift !== null && (x === 'Backquote' || x === 'BracketLeft' || x === 'BracketRight' || x === 'Semicolon' || x === 'Quote' || x === 'Comma' || x === 'Period')) {
            let ru = item.dataset.ru;
            let shiftRu = item.dataset.shiftRu;
            letters[i].dataset.ru = shiftRu;
            letters[i].dataset.shiftRu = ru;
          }
        } else if (lang === 'ru') {
          if (item.dataset.shift !== 'null' && (item.dataset.code.slice(0, 3) === 'Key' || (x === 'Backquote' || x === 'BracketLeft' || x === 'BracketRight' || x === 'Semicolon' || x === 'Quote' || x === 'Comma' || x === 'Period'))) {
            let en = item.dataset.en;
            let shift = item.dataset.shift;
            letters[i].dataset.en = shift;
            letters[i].dataset.shift = en;
            letters[i].textContent = item.dataset.en;
          }
          if (item.dataset.shift !== 'null' && item.dataset.code.slice(0, 3) === 'Key') {
            let ru = item.dataset.ru;
            let shiftRu = item.dataset.shiftRu;
            letters[i].dataset.ru = shiftRu;
            letters[i].dataset.shiftRu = ru;
          }
        }
      });
    }
  });
}

export default capsLock;
