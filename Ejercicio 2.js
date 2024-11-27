/* 
1. Estructuras de Control: Condicionales

IF - ELSE - ELSE IF

IF
Es el condicional más básico. Evalúa una condición y ejecuta el bloque de código si esta es verdadera.
*/
let edad = 18;

if (edad >= 18) 
  {console.log("Eres mayor de edad.");}
//Si la condición es verdadera (edad >= 18), se ejecuta el bloque.
//Si es falsa, no pasa nada (a menos que haya un else).
 
/*
ELSE
Permite manejar dos caminos: uno para cuando la condición es verdadera y otro para cuando es falsa.
*/
let edad = 16;

if (edad >= 18) 
  {console.log("Eres mayor de edad.");} 
else
 {console.log("Eres menor de edad.");}
//Si edad >= 18, imprime "Eres mayor de edad."
//Si no, imprime "Eres menor de edad."

/* 
ELSE IF
Para manejar múltiples condiciones.
*/
let nota = 85;

if (nota >= 90) 
  {console.log("Excelente");} 
else if (nota >= 70) 
  {console.log("Bueno");} 
else 
  {console.log("Necesitas mejorar");}

//La primera condición verdadera se ejecuta.
//Si ninguna condición se cumple, se ejecuta el bloque else.

/*
SWITCH
Se usa para evaluar una variable con múltiples valores posibles.
*/
let dia = "lunes";

switch (dia) {
  case "lunes":
    console.log("Inicio de semana.");
    break;
  case "viernes":
    console.log("¡Fin de semana casi aquí!");
    break;
  case "sábado":
  case "domingo":
    console.log("Es fin de semana.");
    break;
  default:
    console.log("Es un día normal.");
}

//case: verifica si la variable tiene un valor específico.
//break: detiene la ejecución para evitar que se ejecuten otros casos.
//default: se ejecuta si ninguna de las condiciones es verdadera.

/*
Operador ternario (condición ? valorSiTrue : valorSiFalse)
es una forma concisa de escribir una estructura condicional tipo if...else. 
Es muy útil cuando necesitas evaluar una condición y asignar un valor o ejecutar algo dependiendo del resultado.
*/
let edad = 20;

let mensaje = edad >= 18 ? "Eres mayor de edad" : "Eres menor de edad";

console.log(mensaje);

//Si es true, se asigna "Eres mayor de edad" a la variable mensaje.
//Si es false, se asigna "Eres menor de edad".

//-------------------------Ejercicios---------------------//
/*
Condicionales básicas:
Crea un script que pida al usuario un número (usando prompt() en un entorno de navegador o simulando la entrada con una variable).
Si el número es mayor que 10, imprime "Mayor que 10". Si es igual a 10, imprime "Igual a 10". Si es menor, imprime "Menor que 10".
*/
let numero=8;

if (numero<10)
  {console.log("El número es menor a 10");}
else if (numero===10)
  {console.log("El número es igual a 10");}
else
  {console.log("El número es mayor a 10");}
//Me arroja que es menor


let numero=10;

if (numero<10)
  {console.log("El número es menor a 10");}
else if (numero===10)
  {console.log("El número es igual a 10");}
else
  {console.log("El número es mayor a 10");}
//Me arroja que es igual


let numero=20;

if (numero<10)
  {console.log("El número es menor a 10");}
else if (numero===10)
  {console.log("El número es igual a 10");}
else
  {console.log("El número es mayor a 10");}
//Me arroja que es mayor

/*
Operador ternario:
Escribe un código que evalúe si un número es par o impar usando el operador ternario.
*/
let numero=15;

let mensaje= numero%2===0? "Es par": "Es impar";

console.log(mensaje);

/*
Switch:
Crea un script que tome una variable de tipo cadena (por ejemplo, el nombre de una fruta)
e imprima un mensaje diferente para "manzana", "banana", "naranja" y "otras frutas" utilizando un switch. 
*/

let fruta="manzana";

switch (fruta)
{ case "manzana":
    console.log("Come una manzana");
    break;
  case "banana":
    console.log("Come una banana");
    break;
  case "naranja":
    console.log("Come una naranja");
    break;
  default:
    console.log("Come otra fruta");}

/*
Ver en que casos se puede usar cada uno o cuando usar uno de los condicionales anteriores.

--En el caso del if, else, else if se pueden usar con cualquier tipo de condicional

--En cuanto a switch se usa para variables que pueden cambiar de valor y por ende se presentan los casos

--Los operadores ternarios son un tipo más compacto de if, else, else if pero se usan preferiblemente cuando
la condición es simple y no tiene más derivaciones de la misma
*/



/*
TIPOS DE BUCLES (FOR, WHILE, DO FOR)

FOR(bucle definido)
Se usa cuando conoces de antemano el número de iteraciones.

SINTAXIS:
for (inicialización; condición; actualización) {
  // Código a ejecutar
}
*/

for (let i = 0; i < 5; i++) {
  console.log(`Iteración número: ${i}`);
}
// Salida: 0, 1, 2, 3, 4
//inicialización: Se inicializa la variable de control (en este caso, let i = 0).
//condición: Evalúa si el bucle debe continuar (mientras i < 5).
//actualización: Cambia el valor de la variable de control (aumenta i en 1).


/*
WHILE (bucle indefinido)
Se usa cuando no sabes cuántas iteraciones necesitas, pero sabes la condición.

SINTAXIS:
while (condición) {
  // Código a ejecutar
}
*/

let contador = 0;

while (contador < 3) {
  console.log(`Contador: ${contador}`);
  contador++;
}
// Salida: 0, 1, 2
//condición: Evalúa si el bucle debe continuar (contador < 3).
//Si la condición nunca se cumple, el bucle no se ejecuta.


/*
DO...WHILE (bucle que siempre ejecuta al menos una vez)
Es similar a while, pero garantiza que el código dentro del bloque se ejecute al menos una vez.

SINTAXIS:
do {
  // Código a ejecutar
} while (condición);
*/

let contador = 5;

do {
  console.log(`Contador: ${contador}`);
  contador++;
} while (contador < 3);
// Salida: 5 (el código se ejecuta al menos una vez)


//-------------------------BUCLES ADICIONALES------------------------//
/*
FOR...IN (para recorrer propiedades de un objeto)
Se utiliza para iterar sobre las propiedades (claves) de un objeto.
*/

let persona = { nombre: "Juan", edad: 25, ciudad: "Madrid" };

for (let clave in persona) {
  console.log(`${clave}: ${persona[clave]}`);
}
// Salida:
// nombre: Juan
// edad: 25
// ciudad: Madrid

/*
FOR...OF (para recorrer elementos de un array o iterable)
Se usa para recorrer los valores de un array, string o cualquier estructura iterable.
*/

//Ejemplo con un Array
let numeros = [10, 20, 30];

for (let numero of numeros) {
  console.log(numero);
}
// Salida: 10, 20, 30

//Ejemplo con un string
let palabra = "Hola";

for (let letra of palabra) {
  console.log(letra);
}
// Salida: H, o, l, a

//----------------CONTROL DEL FLUJO DENTRO DE UN BUCLE---------------------//

//break: Detiene el bucle inmediatamente.
for (let i = 0; i < 5; i++) {
  if (i === 3) break;
  console.log(i);
}
// Salida: 0, 1, 2

//continue: Salta a la siguiente iteración del bucle.
for (let i = 0; i < 5; i++) {
  if (i === 2) continue;
  console.log(i);
}
// Salida: 0, 1, 3, 4


//-----------------------Ejercicios---------------------//
/*
Bucle for:
Crea un bucle for que imprima los números del 1 al 5 en consola.
*/

for(let i=1; i<=5; i++){   //Condiciones
  console.log(i);   //Imprime 1 2 3 4 5
}

//Modifica el bucle para que imprima solo los números pares del 1 al 10.
for (let i=2; i<=10; i++){
  if(i%2!=0)continue;
  console.log(i)
}

/*
Bucle while:
Crea un bucle while que imprima números del 1 al 3 en consola.
*/

let numero = 1;

while (numero <= 3) {   //Condición
  console.log(numero);   // Imprime el numero
  numero++;   //Después de imprimir le suma 1 al número para que siga avanzando hasta que coja la condición
}

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


/*
FUNCIONES EN JAVASCRIPT

FUNCIONES DECLARATIVAS
Las funciones declarativas son las que se crean usando la palabra clave function seguida del nombre de la función.
Este tipo de función se carga en memoria antes de que se ejecute el código

SINTAXIS
function nombreDeLaFuncion() {
  // Código que ejecuta la función
}
*/

function saludar() {
  console.log("¡Hola, mundo!");
}

saludar(); // ¡Hola, mundo!

/*
FUNCIONES EXPRESADAS
Las funciones expresadas son aquellas que se asignan a una variable. Estas funciones no tienen nombre (funciones anónimas) o pueden tenerlo. 
A diferencia de las declarativas, no están disponibles antes de su definición debido a que no son hoisted.

SINTAXIS
const nombreDeLaVariable = function() {
  // Código de la función
};
*/

const despedir = function() {
  console.log("¡Adiós, mundo!");
};

despedir(); // ¡Adiós, mundo!

/*
PARÁMETROS Y ARGUMENTOS
Los parámetros son los nombres de las variables que defines en la función para recibir datos. Los argumentos son los valores que pasas a la función cuando la llamas.
*/

function sumar(a, b) {
  // `a` y `b` son parámetros
  return a + b;
}

let resultado = sumar(5, 3); // 5 y 3 son argumentos
console.log(resultado); // 8

/*
VALORES DE RETORNO (RETURN)
El valor de retorno es el resultado que devuelve la función al terminar su ejecución. 
Esto se hace con la palabra clave return. Una función puede devolver cualquier tipo de dato (número, cadena, objeto, etc.).

SINTAXIS
function nombreDeLaFuncion() {
  return valor; // Devuelve un valor
}
*/

function obtenerNombreCompleto(nombre, apellido) {
  return `${nombre} ${apellido}`;
}

let nombreCompleto = obtenerNombreCompleto("Ana", "Pérez");
console.log(nombreCompleto); // Ana Pérez


//---------------------NOTA ADICIONAL-----------------------//
/*
Para funciones más compactas y modernas, puedes usar funciones flecha (arrow functions). Estas son equivalentes a las expresadas, pero más concisas.
*/
const multiplicar = (a, b) => a * b;

console.log(multiplicar(4, 5)); // 20


//------------------------Ejercicios-----------------------//
/*
Funciones declarativas:
Crea una función llamada saludar que tome un parámetro nombre y muestre un saludo en consola.
*/

function saludar(nombre)
{console.log(`Hola ${nombre}`);}

saludar("Esteban"); 

/*
Funciones expresadas:
Escribe una función expresada que tome dos números y devuelva su suma.
*/

let suma=function(x,y)
{console.log(`La suma es ${x+y}`);};

suma(1,2);

/*
Parámetros y valores de retorno:
Crea una función que tome un número y devuelva su cuadrado.
*/

const cuadrado= function(numero)
{return(numero**2);};

console.log(`El cuadrado de 4 es ${cuadrado(4)}`);


//-------------------------NOTA------------------------//
/*
Cuando la función sea expresada se le pone un ";" al final ya que esta, por así decirlo, es una variable.

También cuando se va a llamar a la función.
*/

/*
ARRAYS
Un array es una estructura de datos que almacena una colección de elementos (valores o referencias) en un único lugar. 
Los elementos se ordenan por índices que comienzan desde 0.
*/

//Ejemplo: 

let frutas = ["manzana", "banana", "naranja"];
// Índices:      0          1          2

//------------¿Cómo crear un Array?----------------//

//Notación literal:
let numeros = [1, 2, 3, 4, 5];

//Constructor Array:
let colores = new Array("rojo", "verde", "azul");

/*
MÉTODOS BÁSICOS DE ARRAYS

push(): Añadir un elemento al final
Este método agrega uno o más elementos al final del array.
*/

let frutas = ["manzana", "banana"];
frutas.push("naranja");
console.log(frutas); // ["manzana", "banana", "naranja"]

/*
pop(): Eliminar el último elemento
Este método elimina el último elemento del array y lo devuelve.
*/

let frutas = ["manzana", "banana", "naranja"];
let eliminado = frutas.pop();
console.log(frutas); // ["manzana", "banana"]
console.log(eliminado); // "naranja"

/*
shift(): Eliminar el primer elemento
Este método elimina el primer elemento del array y desplaza los índices hacia la izquierda. Devuelve el elemento eliminado.
*/

let frutas = ["manzana", "banana", "naranja"];
let eliminado = frutas.shift();
console.log(frutas); // ["banana", "naranja"]
console.log(eliminado); // "manzana"

/*
unshift(): Añadir un elemento al inicio
Este método agrega uno o más elementos al inicio del array.
*/

let frutas = ["banana", "naranja"];
frutas.unshift("manzana");
console.log(frutas); // ["manzana", "banana", "naranja"]

/*
PROPIEDAD LENGTH
El array tiene una propiedad llamada length que devuelve el número de elementos.
*/

let frutas = ["manzana", "banana", "naranja"];
console.log(frutas.length); // 3

/*
ACCESO POR ÍNDICE
Puedes acceder a los elementos de un array usando sus índices.
*/

let frutas = ["manzana", "banana", "naranja"];
console.log(frutas[0]); // "manzana"
console.log(frutas[2]); // "naranja"


//También se pueden modificar los elementos directamente:

frutas[1] = "fresa";
console.log(frutas); // ["manzana", "fresa", "naranja"]


//--------------------------------Ejericios---------------------------//

/*
Crear un array:
Crea un array con 5 números e imprímelo en consola.
*/

let arreglo=[10, 20, 30, 40, 50];
console.log(arreglo);

/*
Manipulación básica:
Usa push() para añadir un número al final del array y unshift() para añadir uno al inicio.
*/

arreglo.push(60);
console.log(arreglo);
arreglo.unshift(0);
console.log(arreglo);

//Luego, usa pop() y shift() para eliminar el último y primer elemento respectivamente.
//Imprime el array en cada paso para ver los cambios.

arreglo.pop();
console.log(arreglo);
arreglo.shift();
console.log(arreglo);


/*
OBJETOS BÁSICOS EN JAVASCRIPT
Un objeto en JavaScript es una colección de propiedades y métodos, donde cada propiedad es un par clave-valor.
Los objetos te permiten agrupar datos y funciones relacionadas para organizarlos mejor.

Crear un objeto
Puedes crear un objeto en JavaScript de varias maneras, pero la más común es usar notación literal.
*/
//Ejemplo:
let persona = {
  nombre: "Ana",
  edad: 30,
  ciudad: "Madrid"
};

/*
Acceder a las propiedades
*/

//Notación de punto (dot notation):
console.log(persona.nombre); // "Ana"
console.log(persona.edad);   // 30

//Notación de corchetes (bracket notation):
console.log(persona["ciudad"]); // "Madrid"

//La notación de corchetes es útil si el nombre de la propiedad es dinámico o contiene caracteres no válidos para la notación de punto.

/*
 Modificar propiedades
Puedes actualizar el valor de una propiedad existente o agregar nuevas propiedades.
*/

//Actualizar propiedades:
persona.edad = 31;
console.log(persona.edad); // 31

//Agregar nuevas propiedades:
persona.profesion = "Ingeniera";
console.log(persona.profesion); // "Ingeniera"

/*
Métodos en objetos
Un método es una función que pertenece a un objeto. Se define igual que una propiedad, pero su valor es una función.
*/

let persona = {
  nombre: "Ana",
  saludar: function() {
    console.log(`¡Hola! Me llamo ${this.nombre}`);
  }
};

persona.saludar(); // ¡Hola! Me llamo Ana

//this: Hace referencia al objeto actual (persona).

/*
Eliminar propiedades
Puedes eliminar una propiedad de un objeto usando la palabra clave delete.
*/

delete persona.edad;
console.log(persona); // { nombre: "Ana", ciudad: "Madrid" }

/*
Recorrer las propiedades de un objeto
Puedes usar el bucle for...in para iterar sobre las propiedades de un objeto.
*/
let persona = {
  nombre: "Ana",
  edad: 30,
  ciudad: "Madrid"
};

for (let clave in persona) {
  console.log(`${clave}: ${persona[clave]}`);
}
// Salida:
// nombre: Ana
// edad: 30
// ciudad: Madrid

//-----------------------------Ejercicios------------------------//

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
persona.edad=(persona.edad+1)


