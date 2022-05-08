const arrKey = [
  [
    {
      en: '`',
      ru: 'ё',
      shift: '~',
      shiftRu: 'Ё',
      className: 'letterYo',
      class: 'letter',
      code: 'Backquote'
    },
    {
      en: '1',
      ru: '1',
      shift: '!',
      shiftRu: '!',
      className: 'num1',
      class: 'letter',
      code: 'Digit1'
    },
    {
      en: '2',
      ru: '2',
      shift: '@',
      shiftRu: '"',
      className: 'num2',
      class: 'letter',
      code: 'Digit2'
    },
    {
      en: '3',
      ru: '3',
      shift: '#',
      shiftRu: '№',
      className: 'num3',
      class: 'letter',
      code: 'Digit3'
    },
    {
      en: '4',
      ru: '4',
      shift: '$',
      shiftRu: ';',
      className: 'num4',
      class: 'letter',
      code: 'Digit4'
    },
    {
      en: '5',
      ru: '5',
      shift: '%',
      shiftRu: '%',
      className: 'num5',
      class: 'letter',
      code: 'Digit5'
    },
    {
      en: '6',
      ru: '6',
      shift: '^',
      shiftRu: ':',
      className: 'num6',
      class: 'letter',
      code: 'Digit6'
    },
    {
      en: '7',
      ru: '7',
      shift: '?',
      shiftRu: '&',
      className: 'num7',
      class: 'letter',
      code: 'Digit7'
    },
    {
      en: '8',
      ru: '8',
      shift: '*',
      shiftRu: '*',
      className: 'num8',
      class: 'letter',
      code: 'Digit8'
    },
    {
      en: '9',
      ru: '9',
      shift: '(',
      shiftRu: '(',
      className: 'num9',
      class: 'letter',
      code: 'Digit9'
    },
    {
      en: '0',
      ru: '0',
      shift: ')',
      shiftRu: ')',
      className: 'num0',
      class: 'letter',
      code: 'Digit0'
    },
    {
      en: '-',
      ru: '-',
      shift: '_',
      shiftRu: '_',
      className: 'code-',
      class: 'letter',
      code: 'Minus'
    },
    {
      en: '=',
      ru: '=',
      shift: '+',
      shiftRu: '+',
      className: 'code=',
      class: 'letter',
      code: 'Equal'
    },
    {
      en: 'Backspace',
      ru: 'Backspace',
      shift: null,
      shiftRu: null,
      className: 'backspace',
      class: 'letter',
      code: 'Backspace'
    }
  ],

  [
    {
      en: 'Tab',
      ru: 'Tab',
      shift: null,
      shiftRu: null,
      className: 'tab',
      class: 'letter',
      code: 'Tab'
    },
    {
      en: 'q',
      ru: 'й',
      shift: 'Q',
      shiftRu: 'Й',
      className: 'letterQ',
      class: 'letter',
      code: 'KeyQ'
    },
    {
      en: 'w',
      ru: 'ц',
      shift: 'W',
      shiftRu: 'Ц',
      className: 'letterW',
      class: 'letter',
      code: 'KeyW'
    },
    {
      en: 'e',
      ru: 'у',
      shift: 'E',
      shiftRu: 'У',
      className: 'letterE',
      class: 'letter',
      code: 'KeyE'
    },
    {
      en: 'r',
      ru: 'к',
      shift: 'R',
      shiftRu: 'К',
      className: 'letterR',
      class: 'letter',
      code: 'KeyR'
    },
    {
      en: 't',
      ru: 'е',
      shift: 'T',
      shiftRu: 'Е',
      className: 'letterT',
      class: 'letter',
      code: 'KeyT'
    },
    {
      en: 'y',
      ru: 'н',
      shift: 'Y',
      shiftRu: 'Н',
      className: 'letterY',
      class: 'letter',
      code: 'KeyY'
    },
    {
      en: 'u',
      ru: 'г',
      shift: 'U',
      shiftRu: 'Г',
      className: 'letterU',
      class: 'letter',
      code: 'KeyU'
    },
    {
      en: 'i',
      ru: 'ш',
      shift: 'I',
      shiftRu: 'Ш',
      className: 'letterI',
      class: 'letter',
      code: 'KeyI'
    },
    {
      en: 'o',
      ru: 'щ',
      shift: 'O',
      shiftRu: 'Щ',
      className: 'letterO',
      class: 'letter',
      code: 'KeyO'
    },
    {
      en: 'p',
      ru: 'з',
      shift: 'P',
      shiftRu: 'З',
      className: 'letterP',
      class: 'letter',
      code: 'KeyP'
    },
    {
      en: '[',
      ru: 'х',
      shift: '{',
      shiftRu: 'Х',
      className: 'codeХ',
      class: 'letter',
      code: 'BracketLeft'
    },
    {
      en: ']',
      ru: 'ъ',
      shift: '}',
      shiftRu: 'Ъ',
      className: 'codeZ',
      class: 'letter',
      code: 'BracketRight'
    },
    {
      en: '\\',
      ru: '\\',
      shift: '|',
      shiftRu: '/',
      className: 'backSlash',
      class: 'letter',
      code: 'Backslash'
    },
    {
      en: 'Del',
      ru: 'Del',
      shift: null,
      shiftRu: null,
      className: 'delete',
      class: 'letter',
      code: 'delete'
    }
  ],
  [
    {
      en: 'Caps Lock',
      ru: 'Caps Lock',
      shift: null,
      shiftRu: null,
      className: 'capsLock',
      class: 'letter',
      code: 'CapsLock'
    },
    {
      en: 'a',
      ru: 'ф',
      shift: 'A',
      shiftRu: 'Ф',
      className: 'letterA',
      class: 'letter',
      code: 'KeyA'
    },
    {
      en: 's',
      ru: 'ы',
      shift: 'S',
      shiftRu: 'Ы',
      className: 'letterS',
      class: 'letter',
      code: 'KeyS'
    },
    {
      en: 'd',
      ru: 'в',
      shift: 'D',
      shiftRu: 'В',
      className: 'letterD',
      class: 'letter',
      code: 'KeyD'
    },
    {
      en: 'f',
      ru: 'а',
      shift: 'F',
      shiftRu: 'А',
      className: 'letterD',
      class: 'letter',
      code: 'KeyF'
    },
    {
      en: 'g',
      ru: 'п',
      shift: 'g',
      shiftRu: 'П',
      className: 'letterG',
      class: 'letter',
      code: 'KeyG'
    },
    {
      en: 'h',
      ru: 'р',
      shift: 'H',
      shiftRu: 'Р',
      className: 'letterD',
      class: 'letter',
      code: 'KeyH'
    },
    {
      en: 'j',
      ru: 'о',
      shift: 'J',
      shiftRu: 'О',
      className: 'letterJ',
      class: 'letter',
      code: 'KeyJ'
    },
    {
      en: 'k',
      ru: 'л',
      shift: 'K',
      shiftRu: 'Л',
      className: 'letterK',
      class: 'letter',
      code: 'KeyK'
    },
    {
      en: 'l',
      ru: 'д',
      shift: 'L',
      shiftRu: 'Д',
      className: 'letterL',
      class: 'letter',
      code: 'KeyL'
    },
    {
      en: ';',
      ru: 'ж',
      shift: ':',
      shiftRu: 'Ж',
      className: 'semicolon',
      class: 'letter',
      code: 'Semicolon'
    },
    {
      en: '\'',
      ru: 'э',
      shift: '"',
      shiftRu: 'Э',
      className: 'quotation',
      class: 'letter',
      code: 'Quote'
    },
    {
      en: 'Enter',
      ru: 'Enter',
      shift: null,
      shiftRu: null,
      className: 'codeEnter',
      class: 'letter',
      code: 'Enter'
    }
  ],
  [
    {
      en: 'Shift',
      ru: 'Shift',
      shift: null,
      shiftRu: null,
      className: 'codeShift',
      class: 'letter',
      code: 'ShiftLeft'
    },
    {
      en: 'z',
      ru: 'я',
      shift: 'Z',
      shiftRu: 'Я',
      className: 'letterZ',
      class: 'letter',
      code: 'KeyZ'
    },
    {
      en: 'x',
      ru: 'ч',
      shift: 'X',
      shiftRu: 'Ч',
      className: 'letterX',
      class: 'letter',
      code: 'KeyX'
    },
    {
      en: 'c',
      ru: 'с',
      shift: 'C',
      shiftRu: 'С',
      className: 'letterC',
      class: 'letter',
      code: 'KeyC'
    },
    {
      en: 'v',
      ru: 'м',
      shift: 'V',
      shiftRu: 'М',
      className: 'letterV',
      class: 'letter',
      code: 'KeyV'
    },
    {
      en: 'b',
      ru: 'и',
      shift: 'B',
      shiftRu: 'И',
      className: 'letterB',
      class: 'letter',
      code: 'KeyB'
    },
    {
      en: 'n',
      ru: 'т',
      shift: 'N',
      shiftRu: 'Т',
      className: 'letterN',
      class: 'letter',
      code: 'KeyN'
    },
    {
      en: 'm',
      ru: 'ь',
      shift: 'M',
      shiftRu: 'Ь',
      className: 'letterM',
      class: 'letter',
      code: 'KeyM'
    },
    {
      en: ',',
      ru: 'б',
      shift: '<',
      shiftRu: 'Б',
      className: 'comma',
      class: 'letter',
      code: 'Comma'
    },
    {
      en: '.',
      ru: 'ю',
      shift: '>',
      shiftRu: 'Ю',
      className: 'dot',
      class: 'letter',
      code: 'Period'
    },
    {
      en: '/',
      ru: '.',
      shift: '?',
      shiftRu: ',',
      className: 'slash',
      class: 'letter',
      code: 'Slash'
    },
    {
      en: 'Shift',
      ru: 'Shift',
      shift: null,
      shiftRu: null,
      className: 'codeShift',
      class: 'letter',
      code: 'ShiftRight'
    },
    {
      en: '\u2191',
      ru: '\u2191',
      shift: null,
      shiftRu: null,
      className: 'uparrow',
      class: 'letter',
      code: 'ArrowUp'
    }
  ],
  [
    {
      en: 'Ctrl',
      ru: 'Ctrl',
      shift: null,
      shiftRu: null,
      className: 'ctrl',
      class: 'letter',
      code: 'ControlLeft'
    },
    {
      en: 'Win',
      ru: 'Win',
      shift: null,
      shiftRu: null,
      className: 'win',
      class: 'letter',
      code: 'MetaLeft'
    },
    {
      en: 'Alt',
      ru: 'Alt',
      shift: null,
      shiftRu: null,
      className: 'alt',
      class: 'letter',
      code: 'AltLeft'
    },
    {
      en: 'Space',
      ru: 'Пробел',
      shift: null,
      shiftRu: null,
      className: 'space',
      class: 'letter',
      code: 'Space'
    },
    {
      en: 'Alt',
      ru: 'Alt',
      shift: null,
      shiftRu: null,
      className: 'alt',
      class: 'letter',
      code: 'AltRight'
    },
    {
      en: 'Ctrl',
      ru: 'Ctrl',
      shift: null,
      shiftRu: null,
      className: 'ctrl',
      class: 'letter',
      code: 'ControlRight'
    },
    {
      en: '\u2190',
      ru: '\u2190',
      shift: null,
      shiftRu: null,
      className: 'leftarrow',
      class: 'letter',
      code: 'ArrowLeft'
    },
    {
      en: '\u2193',
      ru: '\u2193',
      shift: null,
      shiftRu: null,
      className: 'downarrow',
      class: 'letter',
      code: 'ArrowDown'
    },
    {
      en: '\u2192',
      ru: '\u2192',
      shift: null,
      shiftRu: null,
      className: 'rightarrow',
      class: 'letter',
      code: 'ArrowRight'
    }
  ]
];

export default arrKey;
