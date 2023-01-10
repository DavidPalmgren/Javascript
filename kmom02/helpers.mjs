/**
 * @module helpers
 */
import * as animals from './animals.mjs';

export function add (a, b) {
    return a + b;
}

/*
export function prettyPrint(continent) {
    console.log("--- REPORT ---\n"+
        "Animals in "+continent+"\n\n"+
        "* <animal>\n"+
        "* <animal>\n"+
        "* <animal>\n"+
        "* <animal>\n"+
        "* <animal>\n"+
        "* <animal>\n"+
        "* <animal>\n"+
        "...")
}
*/
/**
 * Add an animal to a specific array
 * @function addAnimal
 * @param {string} continent (america|africa|europe) - Represents the array to add to
 * @param {string} animal specifying what string to add
 * @returns {string} string saying string added
 * */
export function addAnimal (continent, animal) {
    if (continent === 'africa') {
        animals.africanAnimals.push(animal);
        const addedAnimal = animal + " added";
        return addedAnimal;
    }
    if (continent === 'europe') {
        animals.europeanAnimals.push(animal);
        const addedAnimal = animal + " added";
        return addedAnimal;
    }
    if (continent === 'america') {
        animals.americanAnimals.push(animal);
        const addedAnimal = animal + " added";
        return addedAnimal;
    } else {
        return animal + " not added";
    }
}
/**
 * Get all animals concatinated to one array
 * @function allAnimals
 * @returns {array} concactinates all arrays in animals.mjs
 * */
export function allAnimals () {
    const allAnimalArray = animals.africanAnimals.concat(animals.europeanAnimals, animals.americanAnimals);
    return allAnimalArray;
}

/*
export function getAnimalsByContinent(continent) {
    if (continent === 'europe') {
        let continent2 = 'europeanAnimals';
        const animalString = String(animals[continent2]);
        return animalString;
    }
    else if (continent === 'africa') or (continent === 'america') {
        let continent2 = continent + "nAnimals";
        const animalString = String(animals[continent2]);
        return animalString;
    }

}

*/
/**
 * Get all animals from specific continent
 * @function getAnimalsByContinent
 * @param {string} continent specifying what array to use
 * @returns {array} returns specified array or error if not specified
 * */
export function getAnimalsByContinent (continent) {
    if (continent === 'europe') {
        const animalString = String(animals.europeanAnimals);
        console.log(animalString);
        return animalString;
    }
    if (continent === 'africa') {
        const animalString = String(animals.africanAnimals);
        console.log(animalString);
        return animalString;
    }
    if (continent === 'america') {
        const animalString = String(animals.americanAnimals);
        console.log(animalString);
        return animalString;
    } else {
        return "Error";
    }
}

/**
 * Get a randomized animal from any of the three animal arrays
 * @function getRandomAnimal
 * @returns {string} returns random string from animal.mjs
 * */
export function getRandomAnimal () {
    const randomInt = Math.floor(Math.random() * 3);
    if (randomInt === 0) {
        const continent = 'africanAnimals';
        const randAnimal = animals[continent][Math.floor(Math.random() * animals[continent].length)];
        return randAnimal;
    }
    if (randomInt === 1) {
        const continent = 'americanAnimals';
        const randAnimal = animals[continent][Math.floor(Math.random() * animals[continent].length)];
        return randAnimal;
    }
    if (randomInt === 2) {
        const continent = 'europeanAnimals';
        const randAnimal = animals[continent][Math.floor(Math.random() * animals[continent].length)];
        return randAnimal;
    }
}
/**
 * Removes an animal from an array
 * @function removeAnimal
 * @param {string} animal specifying what animal to remove
 * @param {string} [continent] specifying what array of animals to use
 * @returns {string} string saying varAnimal removed
 * */
export function removeAnimal (animal, continent) {
    if (continent === 'africa') {
        const index = animals.africanAnimals.indexOf(animal);
        if (index > -1) { // bara splica om den finns
            animals.africanAnimals.splice(index, 1); // pos av index tar väck bara en
            return animal + " removed";
        }
    }
    if (continent === 'europe') {
        const index = animals.europeanAnimals.indexOf(animal);
        if (index > -1) {
            animals.europeanAnimals.splice(index, 1);
            return animal + " removed";
        }
    }
    if (continent === 'america') {
        const index = animals.americanAnimals.indexOf(animal);
        if (index > -1) {
            animals.americanAnimals.splice(index, 1);
            return animal + " removed";
        }
    } else {
        const index1 = animals.africanAnimals.indexOf(animal);
        if (index1 > -1) { // bara splica om den finns
            animals.africanAnimals.splice(index1, 1); // tar väck bara en
            return animal + " removed";
        }
        const index2 = animals.europeanAnimals.indexOf(animal);
        if (index2 > -1) {
            animals.europeanAnimals.splice(index2, 1);
            return animal + " removed";
        }
        const index3 = animals.americanAnimals.indexOf(animal);
        if (index3 > -1) {
            animals.americanAnimals.splice(index3, 1);
            return animal + " removed";
        } else {
            return animal + " not removed";
        }
    }
}
