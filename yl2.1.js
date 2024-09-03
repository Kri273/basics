const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`Sisestage ohutempertuur: `, temp => {
    if (temp > 4.0) {
        console.log("Ei ole jaatumise ohtu");
    } else if (temp <= 4.0) {
        console.log("On jaatumise oht");
    } rl.close();
    
});