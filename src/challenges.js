// Desafio 1
function compareTrue(value1, value2) {
  return (value1 === true && value2 === true);
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// General loop function
function loopThroughIn(contextObject, applyFunction) {
  for (let index in contextObject.input) {
    if (Object.prototype.hasOwnProperty.call(contextObject.input, index)) {
      contextObject.currentIndex = index;
      contextObject.currentValue = contextObject.input[index];
      contextObject = applyFunction(contextObject);
    }
  }
  return contextObject;
}

// Desafio 3
function handlePushing(context) {
  if (context.isLastChar) {
    context.currentWord += context.currentValue;
  }
  context.sentenceArray.push(context.currentWord);
  context.currentWord = '';
  return context;
}

function handleSplitSentence(context) {
  let isCharSpace = (context.currentValue === ' ');
  let isLastChar = (context.currentIndex === context.lastIndex);
  let caseToPush = (isCharSpace || isLastChar);
  if (caseToPush) {
    context.isLastChar = isLastChar;
    context = handlePushing(context);
  } else {
    context.currentWord += context.currentValue;
  }
  return context;
}

function splitSentence(sentence) {
  let contextObject = loopThroughIn(
    {
      input: sentence,
      sentenceArray: [],
      currentWord: [],
      lastIndex: (sentence.length - 1).toString(),
    },
    handleSplitSentence,
  );
  return contextObject.sentenceArray;
}

// Desafio 4
function concatName(inputArray) {
  const firstName = inputArray[0];
  const lastName = inputArray[inputArray.length - 1];
  return `${lastName}, ${firstName}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function countNumber(context) {
  let numberNotCounted = (!(context.currentValue in context.counts));
  if (numberNotCounted) {
    context.counts[context.currentValue] = 1;
  } else {
    context.counts[context.currentValue] += 1;
  }
  return context;
}

function handleHighestCount(context) {
  let noHighestNumber = (context.highestNumber === null);
  let numberHigherThanHighest = (context.currentValue > context.highestNumber);
  if (noHighestNumber || numberHigherThanHighest) {
    context.highestNumber = context.currentValue;
  }
  context = countNumber(context);
  return context;
}

function highestCount(inputArray) {
  const contextObject = loopThroughIn(
    {
      input: inputArray,
      counts: {},
      highestNumber: null,
    },
    handleHighestCount,
  );
  return contextObject.counts[contextObject.highestNumber];
}

// Desafio 7
function getCatDistance(catPosition, mousePosition) {
  return Math.abs(mousePosition - catPosition);
}

function getClosestCat(first, second) {
  let closest = first.name;
  if (first.distance > second.distance) {
    closest = second.name;
  }
  return closest;
}

function catAndMouse(mouse, cat1, cat2) {
  let outcome = '';
  cat1 = { name: 'cat1', distance: getCatDistance(cat1, mouse) };
  cat2 = { name: 'cat2', distance: getCatDistance(cat2, mouse) };
  if (cat1.distance === cat2.distance) {
    outcome = 'os gatos trombam e o rato foge';
  } else {
    outcome = getClosestCat(cat1, cat2);
  }
  return outcome;
}

// Desafio 8
function checkIfIsDivider(number, divider) {
  return ((number % divider) === 0);
}

function getFizzBuzz(context) {
  let output = 'fizz';
  if (context.isBuzz) {
    output = 'buzz';
  }
  if (context.isFizz && context.isBuzz) {
    output = 'fizzBuzz';
  }
  return output;
}

function handleFizzBuzz(context) {
  let value;
  context.isFizz = checkIfIsDivider(context.currentValue, 3);
  context.isBuzz = checkIfIsDivider(context.currentValue, 5);
  context.isFizzOrBuzz = (context.isFizz || context.isBuzz);
  if (!(context.isFizzOrBuzz)) {
    value = 'bug!';
  } else {
    value = getFizzBuzz(context);
  }
  context.input[context.currentIndex] = value;
  return context;
}

function fizzBuzz(inputArray) {
  const contextObject = loopThroughIn(
    {
      input: inputArray,
    },
    handleFizzBuzz,
  );
  return contextObject.input;
}

// Desafio 9
function encode(text) {
  // Code here
}

function decode(text) {
  // Code here
}

// Desafio 10
function techList(array, name) {
  // Code here
}

// Desafio 11
function generatePhoneNumber(array) {
  // Code here
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // Code here
}

// Desafio 13
function hydrate(text) {
  // Code here
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
