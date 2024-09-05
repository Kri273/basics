const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`Kella helisemise arv: `, helisemine => {
    for (let i = 0; i < helisemine; i++) {
        console.log('Touse ja sara!')
        rl.close()
    } 
    }) 
    