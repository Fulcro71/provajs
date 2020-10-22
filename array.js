/*
*   16/10/2020
*   Scrivere un programma che inserisca valori interi casuali in un array di dimensione prefisssata.
*   Stampare gli elementi dell'array prima in ordine di indice crescente, poi decrescente.
*/

let mioArray = new Array();                          // dichiaro una variabile di tipo array. Non specifico la dimensione.
// questo codice è bellissimo
// Inserisco 5 valori casuali in un array
for (i = 0; i < 5; i++)
{   
    value=Math.floor((Math.random() * 100) + 1);     // inizializzo una variabile con un valore casuale tra 1 e 100
    mioArray[i]=value;                               // e lo inserisco nell'elemento di indice i dell'array
}

// stampo il contenuto dell'array in ordine corretto.
console.log("\nStampa in ordine corretto:");
for (i = 0; i < 5; i++)
{  
    process.stdout.write(`${mioArray[i]} `);          // uso questa istruzione per stampare sulla stessa linea (backtick da EcmaScript2015)
}

// stampo ilcontenuto dell'array in ordine inverso
console.log("\n\nStampa in ordine inverso:");
for (i = mioArray.length-1; i >= 0; i--)
{ 
    process.stdout.write(`${mioArray[i]} `);          // uso questa istruzione per stampare sulla stessa linea (backtick da EcmaScript2015)
}

console.log(`\n\nL\'array ha ${mioArray.length} elementi.`);