const readline = require('readline');
//const io = require('console-read-write');
let strWeekDays = new Array(["lun", "mar", "mer", "gio", "ven", "sab", "dom"]);

//console.log("Inserire il numero di giorni del mese: ");
//intMonth=prompt('question', 'defaultAnswer');;
//console.log("Inserire il numero del giorno della settimana (0: lunedi): ");
//var intDay = prompt('question', 'defaultAnswer');
//console.log(strWeekDays[intDay]);

//io.write('I will echo whatever you write!');
//io.write(io.read());
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
var intMonthDays ="";
rl.question('Inserire il numero di giorni del mese: ', (intMonthDays) => {
    
    console.log(`Giorni del mese: ${intMonthDays}`);
  
    rl.close();
});

rl.question('Inserire il giorno della settimana iniziale (0: lunedi): ', (intStartDay) => {
    
    console.log(`Giorni del mese: ${intStartDay}`);
  
    rl.close();
});
//console.log(`Hai inserito ${intMonthDays}`);
