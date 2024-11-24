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
