/*
Crear un objeto:
Crea un objeto llamado persona con propiedades como nombre, edad y ocupacion.
Imprime en consola cada una de las propiedades del objeto.
*/
let persona={nombre:"Esteban", edad:17, ocupacion:"estudiante"};
console.log(persona);

/*
Añadir y modificar propiedades:
Añade una nueva propiedad pais al objeto persona.
Modifica la propiedad edad para aumentar en 1 y vuelve a imprimir el objeto.
*/

persona.pais="colombia";
persona.edad=(persona.edad+1);
console.log(persona);