/*
Emmagatzemar en un Map tant les lletres de la llista (o array) com el nombre de vegades que apareixen
*/

var letters = ["R", "0", "G", "E", "R"];

var numLetters = letters.reduce(function(countLetter, letter){
  countLetter[letter] = (countLetter[letter] || 0) + 1;
  return countLetter;
}, {});

console.log(numLetters);
