/** RAFAEL GERONIMO | TRYBE | #VQV */
// Desafio 1
function compareTrue(bool1, bool2) {
  if (bool1 === true && bool2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(phrase) {
  return words = phrase.split(' ');
}

// Desafio 4
function concatName(names) {
  let firstAndLast = '';
  return firstAndLast = firstAndLast.concat(`${names[names.length - 1]} , ${names[0]}`);
}

// Desafio 5
function footballPoints(wins, ties) {
  return points = (wins * 3) + ties;
}

// Desafio 6
function highestCount(numbers) {
  let count = 0;
  let highestNumber = numbers.reduce(function (a , b) {
    return Math.max(a , b)
  })
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] === highestNumber) {
      count += 1
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1Dist = Math.max(mouse, cat1) - Math.min(mouse, cat1);
  let cat2Dist = Math.max(mouse, cat2) - Math.min(mouse, cat2);
  if (cat1Dist < cat2Dist) {
    return 'cat1';
  } else if (cat1Dist > cat2Dist) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(numbers) {
  let fizzBuzz = [];
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 3 === 0 && numbers[index] % 5 === 0) {
      fizzBuzz = fizzBuzz.concat('fizzBuzz');
    } else if (numbers[index] % 3 !==0 && numbers[index] % 5 === 0) {
      fizzBuzz = fizzBuzz.concat('buzz');
    } else if (numbers[index] % 3 === 0 && numbers[index] % 5 !==0) {
      fizzBuzz = fizzBuzz.concat('fizz');
    } else {
      fizzBuzz = fizzBuzz.concat('bug!');
    }
  }
  return fizzBuzz;
}

// Desafio 9
function encode(phrase) {
  let encoded = '';
  for (let index = 0; index < phrase.length; index += 1) {
    switch (phrase[index]) {
      case 'a':
        encoded = encoded.concat('1');
        break;
      case 'e':
        encoded = encoded.concat('2');
        break;
      case 'i':
        encoded = encoded.concat('3');
        break;
      case 'o':
        encoded = encoded.concat('4');
        break;
      case 'u':
        encoded = encoded.concat('5');
        break;
      default:
        encoded = encoded.concat(phrase[index]);
        break;
    }
  }
  return encoded;
}

function decode(phrase) {
  let decoded = '';
  for (let index = 0; index < phrase.length; index += 1) {
    switch (phrase[index]) {
      case '1':
        decoded = decoded.concat('a');
        break;
      case '2':
        decoded = decoded.concat('e');
        break;
      case '3':
        decoded = decoded.concat('i');
        break;
      case '4':
        decoded = decoded.concat('o');
        break;
      case '5':
        decoded = decoded.concat('u');
        break;
      default:
        decoded = decoded.concat(phrase[index]);
        break;
    }
  }
  return decoded;
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
