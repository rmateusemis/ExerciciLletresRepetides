/*
1. Crea una altra llista amb el teu cognom on cada posició correspongui a una lletra.
2. Fusiona les dues llistes en una sola. A més, afegeix una posició amb un espai buit entre la primera i la segona. És a dir, partim de la llista name i surname i al acabar l’execució només tindrem una que es dirà fullName
*/

var nombre = ["R", "O", "G", "E", "R"];
var apellido = ["M", "A", "T", "E", "U"];

var nombreCompleto = nombre.concat(" ",apellido);

console.log(nombreCompleto);
