// Desafio 1
function compareTrue(value1, value2) {
  // seu código aqui
  if(value1 && value2 === true) {
    return true
  } else {
    return false
  }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  let separator = ' ';
  let stringSeparated = string.split(separator);
  return stringSeparated;
}

// Desafio 4
function concatName(arrayStrings) {
  // seu código aqui
  return arrayStrings[arrayStrings.length -1] + ', ' + arrayStrings[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let result = (wins * 3) + ties;
  return result;
}

// Desafio 6
function highestCount(arrayNumbers) {
  // seu código aqui
  let repeat = 0;
  for (let index = 0; index < arrayNumbers; index += 1) {
    if(arrayNumbers[index] > arrayNumbers.length - index {
      
    }
  } 
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  if ((mouse - cat1) < (mouse - cat2)) {
    return 'cat1';
  } else if ((mouse - cat2) < (mouse - cat1)) {
    return 'cat2';
  } else (cat1 === cat2) 
    return 'os gatos trombam e o rato foge';
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
