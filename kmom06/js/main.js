import { hangman } from './hangman.js';

const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
const keyboard = document.getElementsByClassName("keyboard");
const display = document.getElementsByClassName("display");
const displayLetter = document.getElementsByClassName('letterDisplay');
const secretlen = hangman.generateSecret();
const secret = hangman.peek();
const parts = hangman.validParts;
let temp = -1;
console.log("fusk :" + secret);
/**
 * dispalys the actual letter in the display.
 * @param {obj} takes the letter and displays it in the display
 */
function showLetters (letter) {
    for (let i = 0; i < secret.length; i++) {
        if (secret.split('')[i].toUpperCase() === letter) {
            displayLetter[i].innerHTML = secret.split('')[i].toUpperCase();
        }
    }
}
/**
 * takes the letters and calculates if you won also colors the letters.
 * @param {*} event to add classes/hide/calc stuff
 */
function selector (event) {
    let temp2 = 0;
    event.target.classList.add("selected");
    event.target.removeEventListener("click", selector);
    if (secret.toUpperCase().includes(event.target.innerHTML)) {
        event.target.classList.add("correct");
        console.log("correct");
        showLetters(event.target.innerHTML);
        for (let i = 0; i < secretlen; i++) {
            if (!document.querySelectorAll("div.letterDisplay")[i].innerHTML.includes("_")) {
                temp2++;
                if (temp2 === secretlen) {
                    const removeThese = document.querySelectorAll("div.letter");
                    for (let i = 0; i < removeThese.length; i++) {
                        removeThese[i].remove();
                    }
                    const endGame = document.createElement("div");
                    endGame.className = "endScreen";
                    endGame.innerHTML = "You've won";
                    keyboard[0].appendChild(endGame);
                }
            }
        }
    } else {
        // draw figure
        temp++;
        console.log('wrong');
        hangman.show(parts[temp]);
        if (temp === 8) {
            const removeThese = document.querySelectorAll("div.letter");
            for (let i = 0; i < removeThese.length; i++) {
                removeThese[i].remove();
            }
            const endGame = document.createElement("div");
            endGame.className = "endScreen";
            endGame.innerHTML = "You Lost";
            keyboard[0].appendChild(endGame);
        }
    }
}
// init game
// initially hides the hangman
for (const part of hangman.validParts) {
    hangman.hide(part);
}
// generates keyboard
for (const letter of alphabet) {
    const temp = document.createElement("div");
    temp.className = "letter";
    temp.innerHTML = letter.toUpperCase();
    keyboard[0].appendChild(temp);
    temp.addEventListener("click", selector);
}
// generates display
for (let i = 0; i < secretlen; i++) {
    const temp = document.createElement("div");
    temp.className = "letterDisplay";
    temp.innerHTML = "_";
    temp.setAttribute('id', i);
    display[0].appendChild(temp);
}
