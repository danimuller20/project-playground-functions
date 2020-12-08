
// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true
  }
  return false
}

// Desafio 2
function calcArea(base, altura) {
  let area = (base * altura) / 2;
  return area
}

// Desafio 3
function splitSentence(sentence) {
  return sentence.split('')
}

// Desafio 4
function concatName(namesArray) {
  return '$namesArray[namesArray.length -1]}, ${namesArray[0]}'
}
// Desafio 5
function footballPoints(wins, ties) {
  let total = (wins * 3) + ties;
  return total
}

// Desafio 6
function highestCount(array) {
  let highNumber = Math.max(...array);
  let repeatNumber = 0;
  for (let cont = 0; cont < array.length; cont += 1) {
    if (array[cont] === highNumber) {
      repeatNumber += 1;
    }
  }
  return repeatNumber
}
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let winner = '';
  let distancia1 = Math.abs(mouse - cat1);
  let distancia2 = Math.abs(mouse - cat2);
  if (distancia1 > distancia2) {
    winner = 'cat2';
  } else if (distancia2 > distancia1) {
    winner = 'cat1';
  } else {
    winner = 'os gatos trombam e o rato foge';
  }
  return winner
}
// Desafio 8
function fizzBuzz(numberArray) {
  let finalArray = [];
  for (let cont of numberArray) {
    switch (true) {
    case cont %3 === 0 && cont % 5 === 0 :
    finalArray.push('fizzBuzz');
    break;
    case cont % 5 === 0:
    finalArray.push('buzz');
    break;
    case cont %3 === 0:
    finalArray.push('fizz');
    break;
    default:
    finalArray.push('bug!');
    }
  }
  return finalArray
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
