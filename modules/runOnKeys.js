function runOnKeys(func, ...codes) {
  let pressed = new Set();

  document.addEventListener('keydown', (event) => {
    pressed.add(event.code);

    for (let i = 0; i < codes.length; i += 1) {
      if (!pressed.has(codes[i])) {
        return;
      }
    }

    pressed.clear();

    func();
  });

  document.addEventListener('keyup', (event) => {
    pressed.delete(event.code);
  });

  document.addEventListener('mousedown', (event) => {
    pressed.add(event.target.dataset.code);

    for (let i = 0; i < codes.length; i += 1) {
      if (!pressed.has(codes[i])) {
        return;
      }
    }

    pressed.clear();

    func();
  });

  document.addEventListener('mouseup', (event) => {
    pressed.delete(event.target.dataset.code);
  });
}

export default runOnKeys;
