// Desafio 1
function compareTrue(param1, param2) {
  if (param1 === true && param2 === true){
    return true
  }
  else{
    return false
  }
  // seu código aqui
}

// Desafio 2
function calcArea(base, height) {
  let area = 0;
  area = (base * height) / 2;
  return area;
  // seu código aqui
}

// Desafio 3
function splitSentence(string1) {
  let final = string1.split(' ');
  return final
  // seu código aqui
}

// Desafio 4
function concatName(arrayN) {
  let ultPri = ""
  ultPri = arrayN[arrayN.length -1] + ", " + arrayN[0]
  return ultPri
  // seu código aqui
}
// let teste4 = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']
// console.log(concatName(teste4))
// Desafio 5
function footballPoints(wins, ties) {
  let points = 0;
  for (i= 1; i<= wins; i++){
    points += 3
  }
  for (j = 1; j<= ties; j++){
    points += 1
  }
  return points
  // seu código aqui
}
// let teste5w = 3
// let teste5t = 2
// console.log(footballPoints(teste5w, teste5t))


// Desafio 6
let teste = [7, 1,12,12,12, 2, 3, 8, 10, 31,10,31, 31, 5, 7, 11, 11, 11];
function highestCount(numbers) {
  let dicionario ={};
  let maiorN = 0;
  for (i in numbers){
        if (!( numbers[i] in dicionario)) {
            dicionario[numbers[i]] = 1
        }
        else {
            dicionario[numbers[i]] += 1
        }
    }
  // console.log(dicionario)
  for (j in dicionario){
        if (parseInt(j) > maiorN){
            maiorN = j
        }
    }
  // console.log(maiorN)
  return dicionario[maiorN];
  // seu código aqui
}
// console.log(highestCount(teste))

// Desafio 7
function catAndMouse(cat1, cat2, mouse) {
  let difCat1Mouse = Math.abs(cat1 - mouse)
  let difCat2Mouse = Math.abs(cat2 - mouse)
  if (difCat1Mouse < difCat2Mouse){
    return 'cat1'
  }
  else if (difCat2Mouse < difCat1Mouse){
    return 'cat2'
  }
  else{
    return "os gatos trombam e o rato foge"
  }
  // seu código aqui
}

// Desafio 8
let teste8 = [2, 15, 7, 9, 45];
function fizzBuzz(arrayN) {
  let bzfz = []
  for (i in arrayN){
    if (arrayN[i] % 3 == 0 && !(arrayN[i] % 5 == 0)){
      bzfz.push("fizz")
    }
    else if (arrayN[i] % 5 == 0 && !(arrayN[i] % 3 == 0)){
      bzfz.push("buzz")
    }
    else if (arrayN[i] % 3 == 0 && arrayN[i] % 5 == 0){
      bzfz.push("fizzbuzz")
    }
    // else if (!(arrayN[i] % 3 == 0) && !(arrayN[i] % 5 == 0)){
    //   bzfz.push('bug!')
    // }
    else{
      bzfz.push("bug!")
      console.log("OK")
    }
  }
  return bzfz
  // seu código aqui
}
console.log(fizzBuzz(teste8))

// Desafio 9
function encode(phrase1) {
  let new_phrase1 = "";
  let vogais = {'a':1, 'e':2, 'i':3, 'o':4, 'u':5}
  for (i in phrase1){
    if (phrase1[i] in vogais){
      new_phrase1+= vogais[phrase1[i]]
    }
    else{
      new_phrase1 += phrase1[i]
    }
  }
  return new_phrase1
  // seu código aqui
}

function decode(phrase2) {
  let new_phrase2 = "";
  let vogais = {1:'a', 2:'e', 3:'i', 'o':4, 'u':5}
  for (i in phrase2){
    if (phrase2[i] in vogais){
      new_phrase2+= vogais[phrase2[i]]
    }
    else{
      new_phrase2 += phrase2[i]
    }
  }
  return new_phrase2
  // seu código aqui
}

// Desafio 10
function techList(toLearn, name) {
  let infoList = []
  for (i in toLearn){
    infoList.push({
    "tech": toLearn[i],
    "name": name
    })
  }
  return infoList
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
