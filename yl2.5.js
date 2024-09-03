const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`Sisestage kirja suurus megabaitides: `, suurus => {
    rl.question(`Sisestage teema pealkiri: `, pealkiri => {
        rl.question(`Kas kirjaga on kaasas fail?("jah" voi "ei" `, fail => {
            if (suurus > 1 && fail == "jah" || pealkiri == "") {
                console.log("Kiri on spamm");

            } else {
                console.log("Kiri ei ole spamm");
            }
        rl.close();
        })
    })
});