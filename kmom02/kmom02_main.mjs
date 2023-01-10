import { getRandomAnimal, addAnimal, allAnimals, removeAnimal, getAnimalsByContinent } from "./helpers.mjs";
import { filterAnimals, prettyPrint, sortAnimals } from "./report.mjs";

const Reset = "\x1b[0m";
const Red = "\x1b[31m";
const Green = "\x1b[32m";
const Yellow = "\x1b[33m";
const Magenta = "\x1b[35m";

const checkExistance = (animal) => allAnimals().indexOf(animal) > -1 ? "Yes" : "No";
const giveMeColor = (msg, check) => check === msg ? `${Green}${check}${Reset}` : `${Red}${check}${Reset}`;
const infoText = (msg) => `${Magenta}${msg}${Reset}`;
const checkContinent = (cont, arr) => {
    let result = `${Red}Not OK${Reset}`;
    let temp;
    switch (cont) {
        case "america":
            temp = arr.split(",");
            if (temp.indexOf("Florida panther") > -1 && temp.length === 10) {
                result = `${Green}OK${Reset}`;
            }
            break;
        case "africa":
            temp = arr.split(",");
            if (temp.indexOf("Ethiopian wolf") > -1 && temp.length === 10) {
                result = `${Green}OK${Reset}`;
            }
            break;
        case "europe":
            temp = arr.split(",");
            if (temp.indexOf("Lynx") > -1 && temp.length === 10) {
                result = `${Green}OK${Reset}`;
            }
            break;
    }
    return result;
};

console.log(`${Yellow}------------- getRandomAnimal -------------${Reset}`);
let rand = getRandomAnimal();
console.log(`${infoText("RANDOM 1:")} ${rand}`);
rand = getRandomAnimal();
console.log(`${infoText("RANDOM 2:")} ${rand}`);
rand = getRandomAnimal();
console.log(`${infoText("RANDOM 3:")} ${rand}`);

console.log(`\n${Yellow}--------------- addAnimal -----------------${Reset}`);
const added1 = addAnimal("america", "AMERICAN");
const added2 = addAnimal("africa", "AFRICAN");
const added3 = addAnimal("europe", "EUROPEAN");
const added4 = addAnimal("asia", "ASIAN");

console.log(`${infoText("Adding american:")} ${giveMeColor("AMERICAN added", added1)}`);
console.log(`${infoText("Adding african:")} ${giveMeColor("AFRICAN added", added2)}`);
console.log(`${infoText("Adding european:")} ${giveMeColor("EUROPEAN added", added3)}`);
console.log(`${infoText("Adding wrongful:")} ${giveMeColor("ASIAN not added", added4)}`);

console.log(`\n${Yellow}--------------- allAnimals -----------------${Reset}`);

console.log(`${infoText("Total number of animals:")} ${giveMeColor(32, allAnimals().length)}`);

console.log(`\n${Yellow}--------------- removeAnimal -----------------${Reset}`);

console.log(`${infoText("Gerfalcon exists:")} ${giveMeColor(checkExistance("Gerfalcon"), "Yes")}`);
let anim = removeAnimal("Gerfalcon");
console.log(`${infoText("Return value:")} ${giveMeColor("Gerfalcon removed", anim)}`);
console.log(`${infoText("Gerfalcon exists:")} ${giveMeColor(checkExistance("Gerfalcon"), "No")}`);

console.log(`${infoText("Giraffe exists in africa:")} ${giveMeColor(checkExistance("Giraffe"), "Yes")}`);
anim = removeAnimal("Giraffe", "africa");
console.log(`${infoText("Return value:")} ${giveMeColor("Giraffe removed", anim)}`);
console.log(`${infoText("Giraffe exists:")} ${giveMeColor(checkExistance("Giraffe"), "No")}`);

console.log(`${infoText("Bigfoot exists:")} ${giveMeColor(checkExistance("Bigfoot"), "No")}`);
anim = removeAnimal("Bigfoot");
console.log(`${infoText("Return value:")} ${giveMeColor("Bigfoot not removed", anim)}`);

console.log(`\n${Yellow}--------------- getAnimalsByContinent -----------------${Reset}`);

const american = getAnimalsByContinent("america");
const african = getAnimalsByContinent("africa");
const european = getAnimalsByContinent("europe");
const asian = getAnimalsByContinent("asia");

console.log(`${infoText("American animals:")} ${checkContinent("america", american)}`);
console.log(`${infoText("African animals:")} ${checkContinent("africa", african)}`);
console.log(`${infoText("European animals:")} ${checkContinent("europe", european)}`);
console.log(`${infoText("Error animals")} ${giveMeColor("Error", asian)}`);

console.log(`\n${Yellow}--------------- prettyPrint (africa) -----------------${Reset}`);
console.log(`${infoText("See * on each row and 'africa' in the top?:\n")}`);
console.log(prettyPrint("africa"));
console.log(`${infoText("See * on each row and 'all continents' in the top?:\n")}`);
console.log(prettyPrint());

console.log(`\n${Yellow}--------------- filterAnimals -----------------${Reset}`);

const test7 = filterAnimals(4);
console.log(`${infoText("Filter on '4':")} ${giveMeColor('Lynx', test7.join(","))}`);
console.log(`${infoText("Is it an array?:")} ${Array.isArray(test7) ? Green + 'Yes' + Reset : Red + 'No' + Reset}`);

const test10american = filterAnimals(10, "america");
console.log(`${infoText("Filter on 10, 'america':")} ${test10american.length === 0 ? Green + "OK (Empty array)" + Reset : Red + "Not OK" + Reset}`);

const test8european = filterAnimals(8, "europe");
console.log(`${infoText("Filter on 8, 'europe':")} ${test8european}`);

const test8african = filterAnimals(8, "africa");
console.log(`${infoText("Filter on 8, 'africa':")} ${test8african}`);

console.log(`\n${Yellow}--------------- sortAnimals -----------------${Reset}`);
const res = [
    'Amazon ant',
    'Blue whale',
    'Crayfish',
    'EUROPEAN',
    'European mink',
    'Golden eagle',
    'Hooded seal',
    'Long-fingered bat',
    'Lynx',
    'Polar bear'
];
const sorted = sortAnimals("europe");
console.log(`${infoText("Is it an array?:")} ${Array.isArray(sorted) ? Green + 'Yes' + Reset : Red + 'No' + Reset}`);
console.log(`${infoText("Is array sorted?:")} ${JSON.stringify(res) === JSON.stringify(sorted) ? Green + "Yes" + Reset : Red + "No" + Reset}`);
const all = sortAnimals();
console.log(`${infoText("Length of all animals sorted is 30?:")} ${all.length === 30 ? Green + 'Yes: ' + all.length + Reset : Red + 'No' + all.length + Reset}`);
