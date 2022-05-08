import arrKey from './modules/keyboard.js';
import Tag from './modules/constructor.js';
import hoverKey from './modules/hoverKey.js';
import addCharacter from './modules/addCharacter.js';
import runOnKeys from './modules/runOnKeys.js';
import changeLanguage from './modules/changeLanguage.js';
import shift from './modules/shift.js';
import capsLock from './modules/capsLock.js';
import localLang from './modules/localLang.js';

let creater = new Tag();
const body = document.body;
const textarea = creater.create('textarea', 'textarea');
const keyboard = creater.create('div', 'keyboard');
const title = creater.create('h1', 'title');
const operating = creater.create('p', 'paragraph');
const switchLang = creater.create('p', 'paragraph');
const twolang = creater.create('p', 'twolang');
const footer = creater.create('footer', 'footer');
const github = creater.create('a', 'github');
const year = creater.create('p', 'year');
const rss = creater.create('a', 'rss');
let capslock = false;

if (!window.localStorage.getItem('lang')) {
  window.localStorage.setItem('lang', 'en');
} else if (window.localStorage.getItem('lang') === 'ru') {
  window.localStorage.setItem('lang', 'ru');
} else if (window.localStorage.getItem('lang') === 'en') {
  window.localStorage.setItem('lang', 'en');
}

textarea.autofocus = true;
textarea.value = '';

title.textContent = 'Virtual keyboard';
operating.textContent = 'The keyboard was created for Windows OS';
switchLang.textContent = 'To switch language use combination of \'Shift + Alt\'';
twolang.innerHTML = '<p>Keyboard is available on two languages: <span class=\'english\'>English</span> and <span class=\'russian\'>Russian</span></p>';
year.textContent = '2022';
github.textContent = 'mdjeee';
github.href = 'https://github.com/mDjeee';
rss.target = '_blank';
rss.href = 'https://rs.school/js/';

creater.child(title, body);
creater.child(operating, body);
creater.child(switchLang, body);
creater.child(twolang, body);
creater.child(textarea, body);
creater.child(keyboard, body);
creater.child(footer, body);
creater.child(rss, footer);
creater.child(year, footer);
creater.child(github, footer);

arrKey.forEach(item => {
  let row = creater.create('div', 'row');
  item.forEach(element => {
    let obj = element;
    let el = creater.create('div', obj.class, obj.en, obj.ru, obj.shift, obj.shiftRu, obj.code);
    el.classList.add(obj.className);
    el.textContent = obj.en;
    hoverKey(el);
    addCharacter(el, textarea);
    shift(el);
    creater.child(el, row);
  });
  creater.child(row, keyboard);
});

let ccc = document.querySelector('.capsLock');

document.body.addEventListener('keydown', (e) => {
  if (e.code === 'CapsLock') {
    if (!capslock) {
      ccc.classList.add('active');
      capslock = true;
    } else {
      ccc.classList.remove('active');
      capslock = false;
    }
  }
});

document.body.addEventListener('mousedown', (e) => {
  if (e.target.dataset.code === 'CapsLock') {
    if (!capslock) {
      ccc.classList.add('active');
      capslock = true;
    } else {
      ccc.classList.remove('active');
      capslock = false;
    }
  }
});

capsLock();

if (window.localStorage.getItem('lang') === 'ru') {
  localLang();
  document.querySelector('.russian').classList.add('textgreen');
  document.querySelector('.english').classList.remove('textgreen');
} else if (window.localStorage.getItem('lang') === 'en') {
  document.querySelector('.russian').classList.remove('textgreen');
  document.querySelector('.english').classList.add('textgreen');
}

runOnKeys(changeLanguage, 'ShiftLeft', 'AltLeft');
runOnKeys(changeLanguage, 'ShiftRight', 'AltRight');

runOnKeys(changeLanguage, 'ShiftLeft', 'AltRight');
runOnKeys(changeLanguage, 'ShiftRight', 'AltLeft');
