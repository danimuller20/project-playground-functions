// Aluno: Emanoel Cristhian, turma 09.

// Desafio 1
function compareTrue(comp1, comp2) {
  if (comp1 && comp2) {
    return true;
  }
  return false;
}
compareTrue(1,1);

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}
// calcArea(3,5);

// Desafio 3
function splitSentence(string) {
  let stringSplited = string.split(' ');
  return stringSplited;
}
// splitSentence("go trybe");

// Desafio 4
function concatName(arrayString) {
  return `${arrayString[arrayString.length - 1]}, ${arrayString[0]}`;
}
// let array =  ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
// concatName(array);

// Desafio 5
function footballPoints(wins, ties) {
  let winsPoints = 3;
  let tiesPoints = 1;
  return (wins * winsPoints) + (ties * tiesPoints);
}
// footballPoints(1,1);

// Desafio 6
function highestCount() {
  // seu código aqui
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
}
