function hoverKey(key) {
  document.body.addEventListener('keydown', (e) => {
    if (key.dataset.code === e.code) {
      key.classList.add('green');
    }
  });

  document.body.addEventListener('keyup', (e) => {
    if (key.dataset.code === e.code) {
      key.classList.remove('green');
    }
  });

  key.addEventListener('mousedown', () => {
    key.classList.add('green');
  });

  document.addEventListener('mouseup', () => {
    key.classList.remove('green');
  });
}

export default hoverKey;
