const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`Sisesta Leedu perekonnanimi: `, nimi => {
    if (nimi.slice(-2) == "ne") {
        console.log("Abielus");
    } else if (nimi.slice(-2) == "te") {
        console.log("Vallaline");
    } else if (nimi.slice(-1) == "e") {
        console.log("maaramata");
    } else {
        console.log("Pole leedulanna perekonnanimi");
    } rl.close();
    
});