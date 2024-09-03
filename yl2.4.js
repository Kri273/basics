const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`Kas soovite istekohta ise valida voi soovite loositud istekohta?(ise voi loos) `, sisestus => {
    if (sisestus == "ise") {
        rl.question(`Kas soovite aknapoolset kohta voi mitte (aken voi muu) `, koht => {
            console.log(`Valisite ise koha nimega: ${koht}`);
        })
    } else if (sisestus == "loos") {
            let loosinr = Math.floor(Math.random() * 3) + 1;
            console.log(loosinr);
            if (loosinr == 1) {
                console.log("Teile loositi istekoht akna aares")
            } else {
                console.log('Teile loositi istekoht nimega: muu')
            } rl.close();
    }
        
    
});