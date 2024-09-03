const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`Sisestage vanus: `, vanus => {
    rl.question(`Sisestage sugu(m voi n): `, sugu => {
        rl.question(`Sisestage treeningu tyyp (1 - tervisetreening, 2 - p]hivastupidavuse treening, 3 - aeroobne treening): `, treening => {
            let mpulss = 220 - vanus;
            let npulss = 206 - ((88 * vanus) / 100)
            if (sugu == "m" || sugu == "M") {
                if (treening == 1) {
                    let minpulss = ((50 * mpulss) / 100);
                    let maxpulss = ((70 * mpulss) / 100);
                    console.log(`vahim pulss ${Math.round(minpulss)}, suurim pulss ${Math.round(maxpulss)}`);
                } else if (treening == 2) {
                    let minpulss = ((70 * mpulss) / 100);
                    let maxpulss = ((80 * mpulss) / 100);
                    console.log(`vahim pulss ${Math.round(minpulss)}, suurim pulss ${Math.round(maxpulss)}`);
                } else if (treening == 3) {
                    let minpulss = ((80 * mpulss) / 100);
                    let maxpulss = ((87 * mpulss) / 100);
                    console.log(`vahim pulss ${Math.round(minpulss)}, suurim pulss ${Math.round(maxpulss)}`);
                } rl.close();
            
            } else if (sugu == "n" || sugu == "N") {
                if (treening == 1) {
                    let minpulss = ((50 * npulss) / 100);
                    let maxpulss = ((70 * npulss) / 100);
                    console.log(`vahim pulss ${Math.round(minpulss)}, suurim pulss ${Math.round(maxpulss)}`);
                } else if (treening == 2) {
                    let minpulss = ((70 * npulss) / 100);
                    let maxpulss = ((80 * npulss) / 100);
                    console.log(`vahim pulss ${Math.round(minpulss)}, suurim pulss ${Math.round(maxpulss)}`);
                } else if (treening == 3) {
                    let minpulss = ((80 * npulss) / 100);
                    let maxpulss = ((87 * npulss) / 100);
                    console.log(`vahim pulss ${Math.round(minpulss)}, suurim pulss ${Math.round(maxpulss)}`);
                } rl.close();
            }
        })
    })
}); 

