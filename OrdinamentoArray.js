let casuali = [];   // Dichiarazione dell'array
let comodo = [];
var max=100;
var min=0;

// Popolo l'array con interi casuali compresi tra max e min.
for (let i =0;i<10;i++)
{       
    casuali[i]=Math.round(Math.random() * (max - min) + min);
}

// Inversione
for (let i=0;i<10;i++)
{
    comodo[10-i-1]=casuali[i];      // 10 -i -1 è l'indice dell'ultimo elemento dell'array comodo
}

// Stampo il contenuto dell'array
for (let i = 0;i<10;i++)
{
    process.stdout.write(`${casuali[i]} `);
}
console.log('\n');

for (let i = 0;i<10;i++)
{
    process.stdout.write(`${comodo[i]} `);
}
console.log('\n');