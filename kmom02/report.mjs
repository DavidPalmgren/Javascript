/**
 * @module report
 */

import * as animals from './animals.mjs';
import * as functions from './helpers.mjs';
/*
export function filterAnimals (amount, continent) {
    if (continent === 'africa') {
        var filterArray = [];
        for (var i = 0; i <= animals.africanAnimals.length - 1; i++) {
            if (animals.africanAnimals[i].length > amount) {
                filterArray.push(animals.africanAnimals[i]);
                console.log(animals.africanAnimals[i] + ' added')
            }

        }
        return filterArray;
    }
}
*/
/**
 * Filter animal names on a specified amount of characters (not letters)
 * @function filterAnimals
 * @param {number} amount for checking length of string
 * @param {string} [continent] (america | africa | europe) Specifies continent to use - or all
 * @returns {array} An array containing the result
 * */
export function filterAnimals (amount, continent) {
    if (continent === 'africa') {
        const result = animals.africanAnimals.filter((n) => n.length === amount);
        return result;
    }
    if (continent === 'europe') {
        const result = animals.europeanAnimals.filter((n) => n.length === amount);
        return result;
    }
    if (continent === 'america') {
        const result = animals.americanAnimals.filter((n) => n.length === amount);
        return result;
    } else {
        console.log('else');
        let allAnimals = functions.allAnimals();
        allAnimals = allAnimals.filter((n) => n.length === amount);
        return allAnimals;
    }
}

/**
 * prints prettily
 * @function prettyPrint
 * @param {string} [string] (america | africa | europe) The continent to print - or all
 * @returns {string} string containing items in specified array with some shazzas
 * */
export function prettyPrint (continent) {
    if (continent === 'africa') {
        let ppAnimals = '--- REPORT ---\nAnimals in africa \n\n';
        for (let i = 0; i <= animals.africanAnimals.length - 1; ++i) {
            ppAnimals += "* " + animals.africanAnimals[i] + '\n';
        }
        if (continent === 'africa') {
            return ppAnimals;
        }
    }
    if (continent === 'europe') {
        let ppAnimals = '--- REPORT ---\nAnimals in europe \n\n';
        for (let i = 0; i <= animals.europeanAnimals.length - 1; ++i) {
            ppAnimals += "* " + animals.europeanAnimals[i] + '\n';
        }
        if (continent === 'europe') {
            return ppAnimals;
        }
    }
    if (continent === 'america') {
        let ppAnimals = '--- REPORT ---\nAnimals in america \n\n';
        for (let i = 0; i <= animals.americanAnimals.length - 1; ++i) {
            ppAnimals += "* " + animals.americanAnimals[i] + '\n';
        }
        if (continent === 'america') {
            return ppAnimals;
        }
    } else {
        let ppAnimals = '--- REPORT ---\nAnimals in all continents \n\n';
        const allAnimals = functions.allAnimals();
        for (let i = 0; i <= allAnimals.length - 1; ++i) {
            ppAnimals += "* " + allAnimals[i] + '\n';
        }
        return ppAnimals;
    }
}
/**
 * Sort the animals alphabetically and ascending order
 * @function sortAnimals
 * @param {string} [continent] (america | africa | europe) Specifies continent to use - or all
 * @returns {array} The sorted array
 * */
export function sortAnimals (continent) {
    if (continent === 'africa') {
        let sortedA = animals.africanAnimals;
        sortedA = sortedA.sort();
        return sortedA;
    }
    if (continent === 'europe') {
        let sortedA = animals.europeanAnimals;
        sortedA = sortedA.sort();
        return sortedA;
    }
    if (continent === 'america') {
        let sortedA = animals.americanAnimals;
        sortedA = sortedA.sort();
        return sortedA;
    } else {
        let allAnimals = functions.allAnimals();
        allAnimals = allAnimals.sort();
        return allAnimals;
    }
}
