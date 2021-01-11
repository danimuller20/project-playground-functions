/* Projeto: Playground Functions;
   Aluno: Julio Henrique Thosi;
   Turma: 09; */
// Desafio 1
function compareTrue(vD1_1,vD1_2) {
  if (vD1_1 === true && vD1_2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height)/2;
  return area;
}

// Desafio 3
function splitSentence(vD3) {
  return vD3.split(' ');
}

// Desafio 4
function concatName(vD4) {
  return vD4[vD4.length-1] + ', ' + vD4[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  let teamPoints = (wins * 3) + ties;
  return teamPoints;
}

// Desafio 6
function highestCount(countRepetition) {
  let maior = 0;
  let qtdeMaior = 0;
  for (let index = 0; index < 8; index += 1) {
    if(maior < countRepetition[index]) {
      maior = countRepetition[index];
    }
  }
  for (index = 0; index < 8; index += 1) {
    if (maior === countRepetition[index]) {
      qtdeMaior += 1;
    }
  }
  return qtdeMaior;
}

// Desafio 7
function catAndMouse(mouse,cat1,cat2) {

  let distIgual = 'os gatos trombam e o rato foge';
  let cat1s = Math.abs (cat1 - mouse);
  let cat2s = Math.abs (cat2 - mouse);
  let phrase = '';

  if (cat1s < cat2s) {
  phrase = 'cat1';
  return phrase;
  }

  else if (cat1s > cat2s) {
  phrase = 'cat2';
  return phrase;
  }

  else {
    return distIgual;
  }
}

// Desafio 8
function fizzBuzz(vd8) {

  let result = [];

  for (let index = 0; index < vd8.length; index += 1) {

    if ((vd8[index] % 3) === 0 && (vd8[index] % 5) === 0)
    result.push ('fizzBuzz');
    else if((vd8[index] % 3) === 0)
    result.push ('fizz');
    else if ((vd8[index] % 5) === 0)
    result.push ('buzz');
    else
    result.push ('bug!');
  }
  return result;
}

// Desafio 9
function encode(phrase) {
  phrase = phrase.replace(/a/gi, '1');
  phrase = phrase.replace(/e/gi, '2');
  phrase = phrase.replace(/i/gi, '3');
  phrase = phrase.replace(/o/gi, '4');
  phrase = phrase.replace(/u/gi, '5');
  return phrase;
}

function decode(phrase) {
  phrase = phrase.replace(/1/gi, 'a');
  phrase = phrase.replace(/2/gi, 'e');
  phrase = phrase.replace(/3/gi, 'i');
  phrase = phrase.replace(/4/gi, 'o');
  phrase = phrase.replace(/5/gi, 'u');
  return phrase;
}

// Desafio 10
function techList(technologies, name) {
  technologies.sort();
  let techObjects = [];
  for (let index in technologies) {
    techObjects.push({
      tech: technologies[index],
      name: name,
    })
  }
  if (technologies.length === 0) {
    return 'Vazio!';
  }
  return techObjects;
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
