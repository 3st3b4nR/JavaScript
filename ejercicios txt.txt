/* 
¿Qué es JavaScript?
JavaScript es un lenguaje de programación usado principalmente para desarrollo WEB junto con HTML
y CSS. Es muy versátil, puesto que puede ser usado tanto en el front como en el backend.

Origen
JavaScript fue creado en 1995 por Brendan Eich,un programador de Netscape Communications 
Corporation. El objetivo de JavaScript es permitir a los desarrolladores agregar interactividad a
las páginas web de manera sencilla.

Aplicaciones
-Desarrollo web del lado del cliente (Frontend)
-Desarrollo del lado del servidor (Backend)
-Desarrollo de aplicaciones móviles
-Desarrollo de aplicaciones de escritorio
-Desarrollo de videojuegos
-Desarrollo de inteligencia artificial y machine learning
-Automatización de pruebas y tareas
-Desarrollo de chatbots y asistentes virtuales

Variables "let", "const" y "var"

var
Esta función es la más antigua de todas y sirve para declarar variables. Las variables declaradas 
con "var" tienen un alcance de función o global si se declaran fuera de una función. No respeta el 
alcance de bloque (sentencias if, for, etc.).

Esta función se puede reasignar sin ningún error.  Las declaraciones con var son elevadas (hoisted)
al inicio del ámbito. Esto significa que puedes usar una variable antes de declararla, aunque su
valor sea undefined hasta que se ejecute la asignación.

let
Se usa para declarar variables que pueden cambiar de valor pero es más predecible y seguro que 
"var". Estas tienen un alcance de bloque, osea, son accesibles dentro de un if, for, etc.

Se pueden reasignar pero no se pueden redeclarar en el mismo ámbito.  Aunque las declaraciones let
son elevadas (hoisted), no están disponibles hasta que el código las alcanza. Si  intentas usarlas 
antes de la declaración, obtendrás un error de referencia (esto se llama "zona muerta temporal").

const
Se usa para declarar constantes, osea, no se pueden cambiar. Su alcance es de bloque como "let". Las 
variables declaradas con "const" no se pueden reasignar.

No se pueden redeclarar en el mismo ámbito. Sin embargo, en el caso de objetos y arreglos, const no 
hace que los objetos o arreglos sean completamente inmutables. Puedes modificar las propiedades de un 
objeto o los elementos de un arreglo, pero no puedes reasignar la variable a un nuevo objeto o 
arreglo.

Igual que "let", const es elevado (hoisted), pero no está accesible antes de su declaración debido a 
la zona muerta temporal.
*/

var x=1;   //defino la variable
 x=2   //reasigno la variable
console.log(x)   //imprime 2
var x=3;    //se puede redeclarar
console.log(x)   //imprime 3
console.log(typeof(x))   //Imprime el tipo de dato de la variable "number"

let y=1;   //defino la variable
let y=2;   //redeclaro
console.log(y)   //me arroja error porque no se puede redeclarar

let z=1;   //defino la variable
z=2;   //reasigno la variable
console.log(z)   //imprime 2

const a=1;   //defino la variable
const a=2;   //redeclaro la variable
console.log(a)   //me sale error porque no puedo redeclarar ni reasignar

const b=1;
console.log(b)   //en este caso me imprime 1 porque es constante
console.log(typeof(b))   //me imprime "number" porque ese es el tipo de dato de la variable

/*
Tipos de datos

String
Representa texto delimitado por comillas.

Number
Números enteros y flotantes (JavaScript no hace diferencia entre estos).

Boolean
Solo tienen valores "True" o "False".

Null
Indica ausencia de un valor.

Undefined
Indica que la variable ha sido declarada pero no se le ha asignado un valor.

Object
Es una colección de propiedades.

Array
Almacena múltiples valores en una sola variable, se define usando corchetes "[]".

Symbol
Se usa para rear identificadores únicos para propiedades de objetos.

BigInt
Permite representar números enteros más grandes que el límite de "Numbrer".
*/

const saludo="hola";   //definimos la variable
console.log(saludo)   //imprime "hola"
console.log(typeof(saludo))  //imprime "string" que es el tipo de dato de la variable

let esMayorDeEdad = true;   //definimos la variable
console.log(esMayorDeEdad)   //imprime "true"
console.log(typeof(esMayorDeEdad))   //imprime "boolean"

//La variable "number" ya la habíamos probado en los primeros ejercicios

let ValorNulo= null;   //defino la variable
console.log(ValorNulo)  //imprime "null"
console.log(typeof(ValorNulo))   //imprime "object" porque null es "object" por un error

let Indefinido;   //defino la variable
console.log(Indefinido)   //me arroja "undefined"
console.log(typeof(Indefinido))   //me imprime "undefined"

let persona= {nombre:"Esteban", edad:17};   //defino la variable
console.log(persona)   //imprime "{nombre:"Esteban", edad:17}" con los corchetes para mostrar que es un "object"
console.log(typeof(persona))   //imprime "object"

//Para que no me salgan los {}

let persona= {nombre:"Esteban", edad:17};   
console.log("Nombre:" ,persona.nombre, "Edad: "  ,persona.edad)   
console.log(typeof(persona))  

let Lenguajes=["phyton", "JavaScript", "HTML", "GO" ];   //defino la variable
console.log(Lenguajes)   //imprime "["phyton", "JavaScript", "HTML", "GO" ]"
console.log(typeof(Lenguajes))   ///imprime "object" porque el "array" es considerado como tal

/*
Operadores básicos

Aritméticos
(+)Suma
(-)Resta
(*)Multiplicación
(/)División
(%)Módulo = No me da el cociente, sino el residuo.
*/
const n1=3;   //defino la variable
const n2=4;   //defino la otra variable
const suma=n1+n2;   //defino la operación (suma)
console.log(suma)   //me imprime "7"

const n1=1;   //defino la variable
const n2=2;   //defino la otra variable
const resta=n1-n2;   //defino la operación (resta)
console.log(resta)   //me imprime "-1"

const n1=5;   //defino la variable
const n2=2;   //defino la otra variable
const multiplicacion=n1*n2;   //defino la operación (multiplicación)
console.log(multiplicacion)   //me imprime "10"

const n1=10;   //defino la variable
const n2=2;   //defino la otra variable
const division=n1/n2;   //defino la operación (división)
console.log(division)   //me imprime "5"

const n1=10;   //defino la variable
const n2=2;   //defino la otra variable
const modulo=n1%n2;   //defino la operación (módulo)
console.log(modulo)   //me imprime "0"

/*
De asignación
(=)Le da un valor a una variable o a una operación
(+=)Hace una suma a la variable con el valor que se le dé después del "="
(-=)Hace una resta a la variable con el valor que se le dé después del "="
*/

let x=10;   //defino la variable e implícitamente ya le hice la asignación con el "="
console.log(x)   //me imprime"10"

let x=1;   //defino la variable
x+=2;   //le asigno la suma 
console.log(x)   //me imprime"3"

let x=1;   //defino la variable
x-=1;   //le asigno la resta
console.log(x)   //me imprime"0"

/*
Comparación
(==) Compara dos valores y verifica si son iguales pero no tiene en cuenta el tipo de dato
(===) Compara dos valores si son iguales, incluyendo el tipo de dato
(!=) Verifica si dos valores son diferentes pero no tiene en cuenta el tipo de dato
(!==) Verifica si dos valores son diferentes, incluyendo el tipo de dato
(<) comprueba si la variable a la derecha es menor a la de la izquierda
(>) comprueba si la variable a la derecha es mayor a la de la izquierda
(<=) comprueba si la variable a la derecha es menor o igual a la de la izquierda
(>=) comprueba si la variable a la derecha es mayor o igual a la de la izquierda
*/

const x=1;   //defino la variable
const y=true;   //defino la otra variable
console.log(x==y)   //me da "true" porque true=1 y false=0 y la comparación débil no tiene en cuenta el tipo de dato

const x=1;   //defino la variable
const y=true;   //defino la otra variable
console.log(x===y)   //me da "false" porque la comparación fuerte tiene en cuenta el tipo de dato

const x=1;   //defino la variable
const y="1";   //defino la otra variable
console.log(x!=y)   //me da "false" porque no toma en cuenta el tipo de dato y los ve iguales

const x=1;   //defino la variable
const y="1";   //defino la otra variable
console.log(x!==y)   //me da "True" porque toma en cuenta el tipo de dato, el cual es diferente cada uno

const x=1;   //defino la variable
const y=2;   //defino la otra variable
console.log(x<y)   //me da "True" 

const x=1;   //defino la variable
const y=2;   //defino la otra variable
console.log(x>y)   //me da "False" 

const x=1;   //defino la variable
const y=1;   //defino la otra variable
console.log(x<=y)   //me da "True" 

const x=1;   //defino la variable
const y=3;   //defino la otra variable
console.log(x>=y)   //me da "False"  

