// #VQV

// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  } return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  let phrase = ' ';
  phrase = string.split(' ');
  return phrase;
}

// Desafio 4
function concatName(arrayString) {
  return arrayString[arrayString.length-1] + arrayString[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + ties;
  return points;
}

// Desafio 6
function highestCount(numbers) {
  let contRepeated= 0;
  let contNumber = 0;
  let indexNumberRepeated = 0;
  for (let index in numbers) {
    let verificaNumero = numbers[index];
    for (let index2 in numbers) {
      if (verificaNumero === numbers[index2]) {
        contNumber += 1;
      }
    }
    if (contNumber > contRepeated) {
      contRepeated = contNumber;
      indexNumberRepeated = index;
    }
    contNumber = 0;
  }
  return numbers[indexNumberRepeated];
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  generatePhoneNumber,
  techList,
  highestCount,
  hydrate,
  splitSentence,
  triangleCheck,
};
