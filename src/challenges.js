// Desafio 1
function compareTrue(valor1, valor2) {
  if ((valor1 === true) && (valor2 === true)) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let areaT = 0;
  areaT = (base * height)/2;
}

// Desafio 3
function splitSentence(string) {
  let splitvar = string.split(' ');
}

// Desafio 4
function concatName(array) {
  let arrayCom = 0;
  let arrayCom1 = 0 ;
  for (let i = 0; i <= array.length; i+=0) {
    if(array[i] === array[0]) {
      arrayCom = array[i];
    }
    if (array[i] === array[(array.length-1)]) {
      arrayCom1 = array[i];
    }
  } 
  let final = arrayCom1 + ', ' + arrayCom;
  return final;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontosTotais = 0;
  for(let i = 0; i <= wins.length; i += 1) {
    wins += 3;
  }
  for (let j = 0; j <= ties.length; j += 1) {
    ties += 1;
  }
  return pontosTotais = wins + ties;
}

// Desafio 6
function highestCount() {
  let high = 0;
  let result = 0;
  for (let i = 0; i <= highestCount.length; i += 1) {
    if (highestCount[i] == high) {
      high = highestCount;
    } 
  }
  for (let j = 0; j <= highestCount.length; j += 1) {
    if(highestCount[j] == high) {
      result += 1;
    }
  } return result
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat = 0 ;
  if (cat1 < cat2) {
    cat = cat1;
  } else {
      cat = cat2;
  }
  if (cat1 === cat2) {
    return "os gatos trombam e o rato foge"
  }
  return cat
}

// Desafio 8
function fizzBuzz(numberArray) {
  let resultado = [];
  for(let i = 0; i <= numberArray.length; i += 1) {
    if ((numberArray[i] % 3 === 0) && (numberArray[i] % 5 === 0)) {
      resultado.push("fizzBuzz");
    } else if ((numberArray[i] % 3 === 0) && (numberArray[i] % 5 !== 0)) {
      resultado.push("fizz");
    } else if ((numberArray[i] % 5 === 0) && (numberArray[i] % 3 !== 0)) {
      resultado.push("buzz");
    } else {
      resultado.push("bug!");
    }
  } return resultado
}

// Desafio 9
function encode(string) {
  var code = 
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
