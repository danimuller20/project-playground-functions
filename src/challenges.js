//  Cheguei na NAVE, Trybers!! VAMOS QUE VAMOS!

// Desafio 1
  function compareTrue(valorOne, valorTwo) {
  if(valorOne === true && valorTwo === true) {
    return true;
  } else {
    return false; 
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) /2
}

// Desafio 3
function splitSentence(go, trybe) {
  return ['go' , 'trybe']
}

// Desafio 4
function concatName(arrayName) {
let arrayName = [];
return arrayName[arrayName.length-1] + ',' + arrayName[0];
}

// Desafio 5
function footballPoints(wins, ties) {
let totalWins = wins*3;
let totalTies = ties*1;
let resultTables = totalWins + totalTies;
return resultTables;
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
