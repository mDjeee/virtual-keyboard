function addCharacter(key, textarea) {
  document.body.addEventListener('keydown', (e) => {
    textarea.focus();
    let x = key.dataset.code;
    if (x === e.code && key.dataset.shift !== 'null') {
      e.preventDefault();
      textarea.setRangeText(key.textContent, textarea.selectionStart, textarea.selectionEnd, 'end');
      textarea.focus();
    }
  });

  document.body.addEventListener('keydown', (e) => {
    let x = key.dataset.code;
    if (x === e.code && x === 'Tab') {
      e.preventDefault();
      textarea.setRangeText('\t', textarea.selectionStart, textarea.selectionEnd, 'end');
    }
  });

  document.body.addEventListener('mousedown', (e) => {
    textarea.focus();
    let x = key.dataset.code;
    if (x === e.target.dataset.code && key.dataset.shift !== 'null') {
      e.preventDefault();
      textarea.setRangeText(key.textContent, textarea.selectionStart, textarea.selectionEnd, 'end');
      textarea.focus();
    }
  });

  document.body.addEventListener('mousedown', (e) => {
    let x = key.dataset.code;
    if (x === e.target.dataset.code && x === 'Tab') {
      e.preventDefault();
      textarea.setRangeText('\t', textarea.selectionStart, textarea.selectionEnd, 'end');
    }
  });

  document.body.addEventListener('mousedown', (e) => {
    let x = key.dataset.code;
    if (x === e.target.dataset.code && x === 'Enter') {
      e.preventDefault();
      textarea.setRangeText('\n', textarea.selectionStart, textarea.selectionEnd, 'end');
    }
  });

  document.body.addEventListener('mousedown', (e) => {
    let x = key.dataset.code;
    if (x === e.target.dataset.code && x === 'Backspace') {
      e.preventDefault();
      textarea.setRangeText('', textarea.selectionStart - 1, textarea.selectionEnd, 'end');
    }
  });

  document.body.addEventListener('mousedown', (e) => {
    let x = key.dataset.code;
    if (x === e.target.dataset.code && x === 'delete') {
      e.preventDefault();
      textarea.setRangeText('', textarea.selectionStart, textarea.selectionEnd + 1, 'end');
    }
  });

  document.body.addEventListener('mousedown', (e) => {
    let x = key.dataset.code;
    if (x === e.target.dataset.code && x === 'Space') {
      e.preventDefault();
      textarea.setRangeText(' ', textarea.selectionStart, textarea.selectionEnd, 'end');
    }
  });

  document.body.addEventListener('mousedown', (e) => {
    let x = key.dataset.code;
    if (x === e.target.dataset.code && x === 'ArrowLeft') {
      e.preventDefault();
      let text = textarea;
      let z = text.selectionStart;
      if (text.selectionStart === 0) {
        text.selectionStart = z;
        text.selectionEnd = z;
      } else {
        text.selectionStart = z - 1;
        text.selectionEnd = z - 1;
      }
    }
  });

  document.body.addEventListener('mousedown', (e) => {
    let x = key.dataset.code;
    if (x === e.target.dataset.code && x === 'ArrowRight') {
      e.preventDefault();
      let text = textarea;
      let z = textarea.selectionStart;
      text.selectionStart = z + 1;
      text.selectionEnd = z + 1;
    }
  });

  document.body.addEventListener('mousedown', (e) => {
    let x = key.dataset.code;
    if (x === e.target.dataset.code && x === 'ArrowUp') {
      e.preventDefault();
      let text = textarea;
      let y = text.selectionStart;
      let str = text.value;
      let count = 0;
      let innerCount = 0;
      let track;
      let prev;
      let current;
      let lines = str.split('\n');
      for (let i = 0; i < lines.length; i += 1) {
        innerCount = 0;
        if (i > 0) count += 1;
        for (let j = 0; j < lines[i].length; j += 1) {
          count += 1;
          innerCount += 1;
          if (count > y) {
            count -= 1;
            innerCount -= 1;
          }
          if (count === y) {
            track = innerCount;
            current = lines[i].length;
            if (lines[i - 1]) {
              prev = lines[i - 1].length;
            }
          }
        }
      }
      if (prev && prev >= current) {
        text.selectionStart = y - prev - 1;
        text.selectionEnd = y - prev - 1;
      } else if (prev && prev < current) {
        if (track > prev) {
          text.selectionStart = y - track - 1;
          text.selectionEnd = y - track - 1;
        } else {
          text.selectionStart = y - prev - 1;
          text.selectionEnd = y - prev - 1;
        }
      } else {
        text.selectionStart = 0;
        text.selectionEnd = 0;
      }
    }
  });

  document.body.addEventListener('mousedown', (e) => {
    let x = key.dataset.code;
    if (x === e.target.dataset.code && x === 'ArrowDown') {
      e.preventDefault();
      let text = textarea;
      let y = text.selectionStart;
      let str = text.value;
      let count = 0;
      let innerCount = 0;
      let track;
      let next;
      let current;
      let lines = str.split('\n');
      for (let i = 0; i < lines.length; i += 1) {
        innerCount = 0;
        if (i > 0) count += 1;
        for (let j = 0; j < lines[i].length; j += 1) {
          count += 1;
          innerCount += 1;
          if (count > y) {
            count -= 1;
            innerCount -= 1;
          }
          if (count === y) {
            track = innerCount;
            current = lines[i].length;
            if (lines[i + 1]) {
              next = lines[i + 1].length;
            }
          }
        }
      }
      if (next && next > current) {
        text.selectionStart = y + current + 1;
        text.selectionEnd = y + current + 1;
      } else if (next && next <= current) {
        if (track >= next) {
          text.selectionStart = y + current - track + next + 1;
          text.selectionEnd = y + current - track + next + 1;
        } else {
          text.selectionStart = y + current + 1;
          text.selectionEnd = y + current + 1;
        }
      } else {
        text.selectionStart = text.value.length;
        text.selectionEnd = text.value.length;
      }
    }
  });
}

export default addCharacter;
