"use strict";   // accettare solo intassi aderente alle specifiche EcmaScript6
let myArray = [];       // Dichiarazione dell'array

let max=100;            // Valore massimo per il random
let min=0;              // Valore minimo per il random
let myArrayLength=5;    // Dimensione dell'array

let average;            // Conterrà il valore medio
let sum=0;              // Conterrà la somma dei valori


// Popolo (e stampo) l'array con interi casuali compresi tra max e min.
process.stdout.write(`Array: `);
for (let i = 0; i < myArrayLength ; i++)
{       
    myArray[i]=Math.round(Math.random() * (max - min) + min);
    process.stdout.write(`${myArray[i]} `);
    sum+=myArray[i];
}

// Calcolo il valore medio
average=sum / myArrayLength;
console.log("\n");
console.log("Media: "+average);

// Seleziono in valori INFERIORI alla media e li stampo
process.stdout.write(`Valori inferiori alla media: `);
for (let i = 0;i<myArrayLength;i++)
{
    if (myArray[i] < average)
    {
        process.stdout.write(`${myArray[i]} `);
    }
    
}

console.log();

// Seleziono in valori SUPERIORI alla media e li stampo
process.stdout.write(`Valori superiori alla media: `);
for (let i = 0;i<myArrayLength;i++)
{
    if (myArray[i] > average)
    {
        process.stdout.write(`${myArray[i]} `);
    }
    
}


