// Desafio 1
function compareTrue(bool1, bool2) {
  if (bool1 === true && bool2 === true) {
    return true;
  }
  return false;
}
// console.log(compareTrue(true, true));

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}
// console.log(calcArea(35, 58));

// Desafio 3
function splitSentence(phrase) {
  let wordArray = [];
  let word = '';
  for (let index = 0; index <= phrase.length; index += 1) {
    if (phrase[index] !== ' ' && index < phrase.length) {
      word += phrase[index];
    } else {
      wordArray.push(word);
      word = '';
    }
  }
  return wordArray;
}
// console.log(splitSentence('Go Trybe'));

// Desafio 4
function concatName(names) {
  let last = names.pop();
  let first = names.shift();
  return `${last}, ${first}`;
}
// console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  return ((wins * 3) + ties);
}
// console.log(footballPoints(5, 3));

// Desafio 6 test
function highestCount(numbers) {
  let higher = 0;
  let times = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] === higher) {
      times += 1;
    } else if (numbers[index] > higher) {
      higher = numbers[index];
      times = 1;
    }
  }
  return times;
}
// console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  cat1 = Math.abs(mouse - cat1);
  cat2 = Math.abs(mouse - cat2);
  if (cat1 === cat2) {
    return 'os gatos trombam e o rato foge';
  } else if (cat1 < cat2) {
    return 'cat1';
  }
  return 'cat2';
}
// console.log(catAndMouse(8, 12, 4))

// Desafio 8
function fizzOrBuzz(num) {
  if (num % 15 === 0) {
    return 'fizzBuzz';
  } else if (num % 3 === 0) {
    return 'fizz';
  } else if (num % 5 === 0) {
    return 'buzz';
  }
  return 'bug!';
}

function fizzBuzz(numbers) {
  for (let index = 0; index < numbers.length; index += 1) {
    numbers[index] = fizzOrBuzz(numbers[index]);
  }
  return numbers;
}
// console.log(fizzBuzz([2, 15, 7, 9, 45]));

// Desafio 9
function encode(text) {
  let wordKey = ['1', '2', '3', '4', '5'];
  let putCode = ['a', 'e', 'i', 'o', 'u'];
  let encodedText = '';
  for (let index = 0; index < text.length; index += 1) {
    let letterCoded = false;
    for (let indexCode = 0; indexCode < wordKey.length; indexCode += 1) {
      if (text[index] === putCode[indexCode]) {
        encodedText += wordKey[indexCode];
        letterCoded = true;
        break;
      }
    }
    if (letterCoded === false) {
      encodedText += text[index];
    }
  }
  return encodedText;
}
// console.log(encode('hi there!'));

function decode(codedText) {
  let key = ['1', '2', '3', '4', '5'];
  let uncode = ['a', 'e', 'i', 'o', 'u'];
  let uncodedText = '';
  for (let index = 0; index < codedText.length; index += 1) {
    let letterUncoded = false;
    for (let indexCode = 0; indexCode < key.length; indexCode += 1) {
      if (codedText[index] === key[indexCode]) {
        uncodedText += uncode[indexCode];
        letterUncoded = true;
        break;
      }
    }
    if (letterUncoded === false) {
      uncodedText += codedText[index];
    }
  }
  return uncodedText;
}
// console.log(decode('h3 th2r2!'));

// Desafio 10
function techList(technology, name) {
  // seu código aqui
  technology.sort(); // ordena o array passado por parâmetro
  let arrayTech = [];
  if (technology.length > 0) {
    for (let index = 0; index < technology.length; index += 1) {
      arrayTech[index] = {
        tech: technology[index],
        name
      };
    }
    return arrayTech;
  } return 'Vazio!';
}
// console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"] ,"Lucas"));

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
