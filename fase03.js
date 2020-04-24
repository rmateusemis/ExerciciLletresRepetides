/*
Emmagatzemar en un Map tant les lletres de la llista (o array) com el nombre de vegades que apareixen
*/
/*
function enviar(){

var letters = ["R", "0", "G", "E", "R"];

// Aplicamos reduce() al array letters
// Param1: countLetter es el objeto donde guardo la cantidad de veces que se repite una letra
// Param2: letter representa cada elemento del array.
var numLetters = letters.reduce(function(countLetter, letter){
  countLetter[letter] = (countLetter[letter] || 0) + 1; // Inicia en 0 y suma 1 por iteracion
  return countLetter; // Retornamos el valor de countLetter
}, {}); // countLetter es un array vacío

console.log(numLetters);
}
*/

function enviar(){

var letters = ["R", "0", "G", "E", "R"];

var numLetters = letters.reduce(function(countLetter, letter){
  countLetter[letter] = (countLetter[letter] || 0) + 1;
  return countLetter;
}, {})

console.log(numLetters);
}
