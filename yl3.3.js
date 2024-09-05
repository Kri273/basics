const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`Vajalike taringute arv: `, arv => {
    for (let i = 0; i < arv; i++) {
        let suvaarv = Math.floor(Math.random() * 6)+ 1;
        console.log(suvaarv)
    }
    rl.close();
    }) 