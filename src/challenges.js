// Aluno: Emanoel Cristhian, turma 09.

// Desafio 1
function compareTrue(comp1, comp2) {
  if (comp1 && comp2) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(string) {
  let stringSplited = string.split(' ');
  return stringSplited;
}

// Desafio 4
function concatName(arrayString) {
  return `${arrayString[arrayString.length - 1]}, ${arrayString[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  let winsPoints = 3;
  let tiesPoints = 1;
  return (wins * winsPoints) + (ties * tiesPoints);
}

// Desafio 6
function highestCount(arrayNumber) {
  let bigNumber = arrayNumber[0];
  let countNumber = 1;
  for (let index = 1; index < arrayNumber.length; index += 1) {
    if (bigNumber < arrayNumber[index]) {
      bigNumber = arrayNumber[index];
      countNumber = 1;
    } else if (bigNumber === arrayNumber[index]) {
      countNumber += 1;
    }
  }
  return countNumber;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = Math.abs(cat1 - mouse);
  let distanceCat2 = Math.abs(cat2 - mouse);

  if (distanceCat1 < distanceCat2) {
    return 'cat1';
  } else if (distanceCat1 === distanceCat2) {
    return 'os gatos trombam e o rato foge';
  }
  return 'cat2';
}
catAndMouse(0, 2, 3)

// Desafio 8
function fizzBuzz(array) {
  let arrayAnswer = [];

  for (let index = 0; index < array.length; index += 1) {
    let fizz = array[index] % 3;
    let buzz = array[index] % 5;

    if (fizz === 0 && buzz === 0) {
      arrayAnswer.push('fizzBuzz');
    } else if (fizz === 0) {
      arrayAnswer.push('fizz');
    } else if (buzz === 0) {
      arrayAnswer.push('buzz');
    } else {
      arrayAnswer.push('bug!');
    }
  }
  return arrayAnswer;
}

// Desafio 9
function encode(code) {
  let arrayLetters = code.split('');

  for (let index = 0; index < arrayLetters.length; index += 1) {
    switch (arrayLetters[index]) {
      case 'a':
        arrayLetters[index] = '1';
        break;
      case 'e':
        arrayLetters[index] = '2';
        break;
      case 'i':
        arrayLetters[index] = '3';
        break;
      case 'o':
        arrayLetters[index] = '4';
        break;
      case 'u':
        arrayLetters[index] = '5'
        break;
      default:
        break;
    }
  }
  return arrayLetters.join('');
}

function decode(code) {
  let arrayLetters = code.split('');

  for (let index = 0; index < arrayLetters.length; index += 1) {
    switch (arrayLetters[index]) {
      case '1':
        arrayLetters[index] = 'a';
        break;
      case '2':
        arrayLetters[index] = 'e';
        break;
      case '3':
        arrayLetters[index] = 'i';
        break;
      case '4':
        arrayLetters[index] = 'o';
        break;
      case '5':
        arrayLetters[index] = 'u'
        break;
      default:
        break;
    }
  }
  return arrayLetters.join('');
}

// Desafio 10
function techList(arrayTech, name) {
  let objtArray = [];
  let arrayTechSort = arrayTech.sort();

  if (!arrayTech) {
    return 'Vazio!';
  } else {
    for (let index = 0; index < arrayTechSort.length; index += 1) {
      let objt = {
        tech: arrayTechSort[index],
        name: name
      }
      objtArray.push(objt);
    }
    return objtArray;
  }
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
