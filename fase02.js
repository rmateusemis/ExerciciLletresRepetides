/*
Al bucle, si la lletra és una vocal imprimeix a la consola: ‘He trobat la VOCAL: __’. Sinó, imprimeix: ‘He trobat la CONSONTANT: __’.
Si trobes un número, mostra per pantalla: ‘Els noms de persones no contenen el número: __’
*/

var letters = ["R", "O", "111", "G", "E", "R"];

console.log(letters);

for (var i = 0; i < letters.length; i++) {

  if ((letters[i] == "A") || (letters[i] == "E") || (letters[i] == "I") || (letters[i] == "O") || (letters[i] == "U")) {
    console.log("He trobat la VOCAL: "+letters[i]);

  } else if (isNaN(letters[i]) == false) {
    console.log("Els noms de persones no contenen el número: "+letters[i]);

  } else {
    console.log("He trobat la CONSONANT: "+letters[i]);
  }
}
