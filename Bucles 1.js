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
  