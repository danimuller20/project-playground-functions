// Segundo projeto! #VQV
// Desafio 1

function compareTrue(param1, param2) {
  if (param1 === true && param2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) /2);
}

// Desafio 3
function splitSentence(sentence) {
  result = sentence.split(' ');
  return result;
}

// Desafio 4
function concatName(nomes) {
  result = nomes[nomes.length -1] + ', ' + nomes[0]
  return result;
}

// Desafio 5
function footballPoints(wins, ties) {
  result = (wins * 3) + ties
  return result;
}

// Desafio 6
/*Escreva uma função chamada highestCount que, ao receber uma array de números, retorne a quantidade
de vezes que o maior deles se repete. Exemplo: caso o parâmetro de highestCount seja uma array com
valores [9, 1, 2, 3, 9, 5, 7], a função deverá retornar 2, que é a quantidade de vezes que o número 9
(maior número do array) se repete.*/

const numbers = [9, 1, 1, 9, 3, 9, 5, 7, 7, 9, 9, 9, 13, 13, 13, 15];

function highestCount(param) {
  let current = param[0];
  let count = 0;
  let bigNumberRepeat;

  for (let index = 0; index < param.length; index += 1) {
    if (param[index] === bigNumberRepeat) {
      current = bigNumberRepeat;
      count = 1;
      bigNumberRepeat = 0;
    }
    if (param[index] > current) {
      bigNumberRepeat = param[index];
    }
    if (param[index] === current) {
      count += 1;
    }
  }
  return count;
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
