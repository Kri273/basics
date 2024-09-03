const { log } = require('node:console');
const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`Ainepunktide arv `, ainepunktid => {
    rl.question(`Nadalate arv `, nadalad => {
        let tunnid = (ainepunktid * 26);
        let ajakulu = (tunnid / 10);
        console.log(Math.round(ajakulu));
        rl.close();
        })                 
})