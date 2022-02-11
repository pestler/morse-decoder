const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};
const MORSE_CODES = {
  '10': '.',
  '11': '-',
  '**': ' ',
}
function decode(expr) {
  let min = [];
  for (let i = 0; i < expr.length; i += 10) {
    min.push(expr.slice(i, i + 10).replace(/^0+/, ''))
  }

  let world = min.map(element => {
    let value = [];
    for (let i = 0; i < element.length; i += 2) {
      value.push(element.slice(i, i + 2))
    } return value
  })
    .map(element => element
    .map(value => MORSE_CODES[value]))
    .map(element => element.join(''))
    .map(element => MORSE_TABLE[element]).join('')

  return world
}

module.exports = {
    decode
}
