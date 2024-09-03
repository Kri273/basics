const { log } = require('node:console');
const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`Mis on su nimi? `, nimi => {
    rl.question(`Mis oli lubatud kiirus? `, lkiirus => {
        rl.question( `Mis oli tegelik kiirus? `, tkiirus => {
            let trahv = (tkiirus - lkiirus) * 3;
            if (trahv > 190) {
                console.log(`${nimi} kiiruse ületamise eest määratakse teile trahv 190 eurot`);
            } else {
                console.log(`${nimi} kiiruse ületamise eest määratakse teile trahv ${trahv} eurot`);
            }rl.close();
            
        
        })
    })
});