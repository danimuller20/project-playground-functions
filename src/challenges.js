// Desafio 1
function compareTrue(boolean1, boolean2) {
  if (boolean1 === true && boolean2 === true) {
    return true;
  }
  return false;
}
console.log(compareTrue(false, true))

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}
console.log(calcArea(30, 20))

// Desafio 3
function splitSentence(string) {
  let array = [];
  array = (string.split(' '));
  return array
}
console.log(splitSentence('Vamos nessa'))

// Desafio 4
function concatName(array) {
  let firstName = [];
  let lastName = [];
  for (let index = 0; index <= array.length; index += 1) {
    firstName = array[0];
    lastName = array[index - 1];
  }
  return firstName + ', ' + lastName;
}
console.log(concatName(['Roberta', 'Julia', 'João', 'Maria', 'Marcos']))

// Desafio 5
function footballPoints() {
  // seu código aqui
}

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
