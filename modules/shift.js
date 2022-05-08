function shift(key) {
  document.addEventListener('keydown', (e) => {
    if (key.dataset.code === e.code) {
      if (key.dataset.code === 'ShiftLeft' || key.dataset.code === 'ShiftRight') {
        let letters = document.querySelectorAll('.letter');
        letters.forEach((item, i) => {
          if (item.dataset.shift !== 'null') {
            letters[i].textContent = item.dataset.shift;
          }
        });
      }
    }
  });

  document.addEventListener('keyup', (e) => {
    if (key.dataset.code === e.code) {
      if (key.dataset.code === 'ShiftLeft' || key.dataset.code === 'ShiftRight') {
        let letters = document.querySelectorAll('.letter');
        letters.forEach((item, i) => {
          if (item.dataset.shift !== 'null') {
            letters[i].textContent = item.dataset.en;
          }
        });
      }
    }
  });

  document.addEventListener('mousedown', (e) => {
    if (e.target.dataset.code === 'ShiftLeft' || e.target.dataset.code === 'ShiftRight') {
      if (key.dataset.code === 'ShiftLeft' || key.dataset.code === 'ShiftRight') {
        let letters = document.querySelectorAll('.letter');
        letters.forEach((item, i) => {
          if (item.dataset.shift !== 'null') {
            letters[i].textContent = item.dataset.shift;
          }
        });
      }
    }
  });

  document.addEventListener('mouseup', () => {
    if (key.dataset.code === 'ShiftLeft' || key.dataset.code === 'ShiftRight') {
      let letters = document.querySelectorAll('.letter');
      letters.forEach((item, i) => {
        if (item.dataset.shift !== 'null') {
          letters[i].textContent = item.dataset.en;
        }
      });
    }
  });
}

export default shift;
