/*
Bucle do...while:
Escribe un bucle do...while que imprima un número aleatorio entre 1 y 10 hasta que obtenga un número mayor a 8.
*/

let numero;

do {
  // Generar un número aleatorio entre 1 y 10
  numero = Math.floor(Math.random() * 10) + 1;   //El número es un random entre 0 y 1 pero necesito que sea de 1 a 10, por eso multiplico por 10 y l3 sumo 1 al final
  console.log(`Número generado: ${numero}`);   //Me aroja el número random
} while (numero <= 8);   //Condición del while

console.log("¡Se generó un número mayor a 8! Fin del bucle.");   //Lo que pasa cuando se cumple con la condición del while