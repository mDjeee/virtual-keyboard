function capsLock() {
  document.addEventListener('keydown', (e) => {
    if (e.code === 'CapsLock') {
      let letters = document.querySelectorAll('.letter');
      letters.forEach(item => {
        let x = item.dataset.code;
        let lang = window.localStorage.getItem('lang');
        if (lang === 'en') {
          if (item.dataset.shift !== 'null' && item.dataset.code.slice(0, 3) === 'Key') {
            let en = item.dataset.en;
            let shift = item.dataset.shift;
            let ru = item.dataset.ru;
            let shiftRu = item.dataset.shiftRu;
            item.dataset.en = shift;
            item.dataset.shift = en;
            item.dataset.ru = shiftRu;
            item.dataset.shiftRu = ru;
            item.textContent = item.dataset.en;
          }
          if (item.dataset.shift !== null && (x === 'Backquote' || x === 'BracketLeft' || x === 'BracketRight' || x === 'Semicolon' || x === 'Quote' || x === 'Comma' || x === 'Period')) {
            let ru = item.dataset.ru;
            let shiftRu = item.dataset.shiftRu;
            item.dataset.ru = shiftRu;
            item.dataset.shiftRu = ru;
          }
        } else if (lang === 'ru') {
          if (item.dataset.shift !== 'null' && (item.dataset.code.slice(0, 3) === 'Key' || (x === 'Backquote' || x === 'BracketLeft' || x === 'BracketRight' || x === 'Semicolon' || x === 'Quote' || x === 'Comma' || x === 'Period'))) {
            let en = item.dataset.en;
            let shift = item.dataset.shift;
            item.dataset.en = shift;
            item.dataset.shift = en;
            item.textContent = item.dataset.en;
          }
          if (item.dataset.shift !== 'null' && item.dataset.code.slice(0, 3) === 'Key') {
            let ru = item.dataset.ru;
            let shiftRu = item.dataset.shiftRu;
            item.dataset.ru = shiftRu;
            item.dataset.shiftRu = ru;
          }
        }
      });
    }
  });

  document.addEventListener('mousedown', (e) => {
    if (e.target.dataset.code === 'CapsLock') {
      let letters = document.querySelectorAll('.letter');
      letters.forEach(item => {
        let x = item.dataset.code;
        let lang = window.localStorage.getItem('lang');
        if (lang === 'en') {
          if (item.dataset.shift !== 'null' && item.dataset.code.slice(0, 3) === 'Key') {
            let en = item.dataset.en;
            let shift = item.dataset.shift;
            let ru = item.dataset.ru;
            let shiftRu = item.dataset.shiftRu;
            item.dataset.en = shift;
            item.dataset.shift = en;
            item.dataset.ru = shiftRu;
            item.dataset.shiftRu = ru;
            item.textContent = item.dataset.en;
          }
          if (item.dataset.shift !== null && (x === 'Backquote' || x === 'BracketLeft' || x === 'BracketRight' || x === 'Semicolon' || x === 'Quote' || x === 'Comma' || x === 'Period')) {
            let ru = item.dataset.ru;
            let shiftRu = item.dataset.shiftRu;
            item.dataset.ru = shiftRu;
            item.dataset.shiftRu = ru;
          }
        } else if (lang === 'ru') {
          if (item.dataset.shift !== 'null' && (item.dataset.code.slice(0, 3) === 'Key' || (x === 'Backquote' || x === 'BracketLeft' || x === 'BracketRight' || x === 'Semicolon' || x === 'Quote' || x === 'Comma' || x === 'Period'))) {
            let en = item.dataset.en;
            let shift = item.dataset.shift;
            item.dataset.en = shift;
            item.dataset.shift = en;
            item.textContent = item.dataset.en;
          }
          if (item.dataset.shift !== 'null' && item.dataset.code.slice(0, 3) === 'Key') {
            let ru = item.dataset.ru;
            let shiftRu = item.dataset.shiftRu;
            item.dataset.ru = shiftRu;
            item.dataset.shiftRu = ru;
          }
        }
      });
    }
  });
}

export default capsLock;
