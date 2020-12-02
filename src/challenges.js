// #VQV turma 09!
// Desafio 1
function compareTrue(value1, value2) {
  let result = value1 === true && value2 === true;
  return result;
}

// Desafio 2
function calcArea(base, height) {
  let triangleArea = (base * height) / 2;
  return triangleArea;
}

// Desafio 3
// Used the split method contained in the documentation <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split>
function splitSentence(phrase) {
  let words = phrase.split(' ');
  return words;
}

// Desafio 4
function concatName(nameList) {
  let firstAndLast = `${nameList[nameList.length - 1]}, ${nameList[0]}`;
  return firstAndLast;
}

// Desafio 5
function footballPoints(wins, ties) {
  let score = (wins * 3) + ties;
  return score;
}

// Desafio 6
function highestNumber(numberList) {
  let highest = 0;
  for (let index in numberList) {
    if (highest < numberList[index]) {
      highest = numberList[index];
    }
  }
  return highest;
}

function highestCount(numberList) {
  let countMode = 0;
  let highest = highestNumber(numberList);
  for (let index in numberList) {
    if (highest === numberList[index]) {
      countMode += 1;
    }
  }
  return countMode;
}

// Desafio 7
// Used this explanation <https://medium.com/@migcoder/reflection-get-variable-name-in-javascript-64ed595701eb> to figure out how to display a variable name
function catAndMouse(mouse, cat1, cat2) {
  let positions = {
    mouse,
    cat1,
    cat2,
  }
  let message = '';
  let distanceCat1 = Math.abs(positions.mouse - positions.cat1);
  let distanceCat2 = Math.abs(positions.mouse - positions.cat2)
  if (distanceCat1 < distanceCat2) {
    message = 'cat1';
  } else if (distanceCat1 > distanceCat2) {
    message = 'cat2';
  } else {
    message = 'os gatos trombam e o rato foge';
  }
  return message;
}
console.log(catAndMouse(0, 3, 2));
// Desafio 8
// switch  if() to switch()
function fizzBuzz(numberList) {
  let answer = [];
  for (let index in numberList) {
    if (numberList[index] % 3 === 0 && numberList[index] % 5 === 0) {
      answer.push('fizzBuzz');
    } else if (numberList[index] % 3 === 0) {
      answer.push('fizz');
    } else if (numberList[index] % 5 === 0) {
      answer.push('buzz');
    } else {
      answer.push('bug!');
    }
  }
  return answer;
}

// Desafio 9
function encode(word) {
  let codedWord = '';
  for (let index in word) {
    switch (word[index]) {
      default:
        codedWord += word[index];
        break;
      case 'a':
        codedWord += '1';
        break;
      case 'e':
        codedWord += '2';
        break;
      case 'i':
        codedWord += '3';
        break;
      case 'o':
        codedWord += '4';
        break;
      case 'u':
        codedWord += '5';
    }
  }
  return codedWord;
}

function decode(codedWord) {
  let decodedWord = '';
  for (let index in codedWord) {
    switch (codedWord[index]) {
      default:
        decodedWord += codedWord[index];
        break;
      case '1':
        decodedWord += 'a';
        break;
      case '2':
        decodedWord += 'e';
        break;
      case '3':
        decodedWord += 'i';
        break;
      case '4':
        decodedWord += 'o';
        break;
      case '5':
        decodedWord += 'u';
    }
  }
  return decodedWord;
}

// Desafio 10
function techList(tech, name) {
  // receive an array and a string
  // if array is empty, return 'Vazio!'
  // sort the array
  // put each name and array index in an object sorted by the array index
  // put all objects in one array ordered by the latter sorted array
  if (tech.length === 0) {
    let answer = 'Vazio!';
    return answer;
  }
  tech.sort();
  let arrayReturn = [];
  for (let index in tech) {
    let objectTech = new Object();
    objectTech['tech'] = tech[index];
    objectTech['name'] = name;
    arrayReturn.push(objectTech);
  }
  return arrayReturn;
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
