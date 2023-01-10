console.log("Year \t Melt rate (m) \t Sea level (mm)");
console.log("----------------------------------------");
let melt = 0.36;
let sealvl = 0;

for (let index = 2000; index <= 2019; index++) {
    if (index === 2001) {
        sealvl += melt;
    }
    console.log(index + '\t' + Math.round(melt * 100) / 100 + '\t' + '\t' + Math.round(sealvl * 1000) / 1000);
    melt += 0.01736842105;
    sealvl += melt;
}
