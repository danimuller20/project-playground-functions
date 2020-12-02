// Desafio 1
function compareTrue(boolean1 , boolean2) {
  if (boolean1 && boolean2 === true) {
    return true
  } else {
    return false
  }
}

// Desafio 2
function calcArea(base , height) {
  let resultCalc = (base * height) / 2
  return resultCalc
}

// Desafio 3
function splitSentence(string) {
  let array = string.split(" " , )
  return array
}

// Desafio 4
function concatName() {
  // seu código aqui
}

// Desafio 5
function footballPoints(wins , ties) {
  let totalPoints = (wins *3) + ties
  return totalPoints
}

// Desafio 6
function highestCount(array) {
  let maior = ''
  let result = 0
  for (let index = 0 ; index < array.length ; index += 1) {
    if (maior < array[index]) {
      maior = array[index]
    }
  }
  console.log(maior)
    
  for (let index = 0 ; index < array.length ; index += 1) {
    if (maior === array[index]) {
      result = result + 1
    }
  }
  return result
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz(array) {
  let result = []
  
  for (let index = 0 ; index < array.length ; index += 1) {
    if ((array[index] % 3 === 0) && (array[index] % 5 === 0)) {
      result.push('fizzBuzz')
    } else if ((array[index] % 3) === 0) {
      result.push('fizz')
    } else if ((array[index] % 5) === 0) {
      result.push('buzz')
    } else {
      result.push('bug!')
    }

  }
  return result
}

// Desafio 9
function encode(string) {
  let array = []
  
  // 1º Parte: Verificar se a letra é minuscula, realizar a troca se necessário e por fim criar o array.
  for (let index = 0 ; index < string.length ; index += 1){
    if(string[index] === string.toUpperCase()) {
      array.push(string[index])
    } else if (string[index] === 'a') {
      array.push(1)
    } else if (string[index] === 'e') {
      array.push(2)
    } else if (string[index] === 'i') {
      array.push(3)
    } else if (string[index] === 'o') {
      array.push(4)
    } else if (string[index] === 'u') {
      array.push(5)
    } else {
      array.push(string[index])
    }
  }

  array = array.join("")

  return array
}

function decode(string) {
  let array = []
  
  // 1º Parte: Verificar se é um número, se sim, retornar a letra.
  for (let index = 0 ; index < string.length ; index += 1){
    if(string[index] == '1') {
      array.push('a')
    } else if (string[index] === '2') {
      array.push('e')
    } else if (string[index] === '3') {
      array.push('i')
    } else if (string[index] === '4') {
      array.push('o')
    } else if (string[index] === '5') {
      array.push('u')
    } else {
      array.push(string[index])
    }
  }

  array = array.join("")

  return array
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

// Extra Functions


function biggestElement(array) {
  let maior = ''
  
  for (let index = 0 ; index < array.length ; index += 1) {
    if (maior < array[index]) {
      maior = array[index]
    }
  }
  console.log(maior)
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
