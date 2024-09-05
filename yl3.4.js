const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let x = 0;
ounad = 14;

rl.question(`Mitu poialpoissi tahavad õunu: `, arv => {
    for (let i = 0; i < arv; i++) {
        const suvaarv = Math.floor(Math.random() * 2)+ 1;
        console.log(suvaarv)
        x += suvaarv
    } 
    console.log(`Lumivalgukesele jääb ${ounad - x} õuna ` )
    
    
    rl.close();
    }) 