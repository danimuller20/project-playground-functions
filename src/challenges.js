// Playground Functions - Henrique Brito Elias
// Desafio 1
function compareTrue(firstValue, secondValue) {
  if (firstValue === true && secondValue === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(sentence) {
  return sentence.split(' ');
}

// Desafio 4
function concatName(names) {
  return (names[names.length - 1] + ', ' + names[0]);
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = 0;
  for (let index = 1; index <= wins; index += 1) {
    points += 3;
  }
  for (let index = 1; index <= ties; index += 1) {
    points += 1;
  }
  return points;
}

// Desafio 6
function highestCount(numbers) {
  // seu código aqui
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (mouse - cat1 < mouse - cat2) {
    return 'cat1';    
  } else if(mouse - cat2 < mouse - cat1) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge'
  }
}

// Desafio 8
function fizzBuzz() {
  let newArray = [];
  for (let index in numbers) {
    if (numbers[index] % 3 === 0 && numbers[index] % 5 === 0) {
      newArray.push('fizzBuzz');
    } else if (numbers[index] % 5 === 0) {
      newArray.push('buzz');
    } else if (numbers[index] % 3 === 0 ) {
      newArray.push('fizz');
    } else {
      newArray.push('bug!');
    }
  }
  return newArray;
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
