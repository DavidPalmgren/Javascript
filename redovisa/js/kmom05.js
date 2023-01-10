console.log("JavaScript ready.");

function rotate (event) {
    counter.style.fontSize = "150px";
    if (isNaN(parseInt(counter.innerHTML))) {
        counter.innerHTML = 0;
    }
    const rand = Math.floor(Math.random() * 6) + 1;
    let old = parseInt(counter.innerHTML);
    const newVal = old += rand;
    counter.innerHTML = newVal;
    element.innerHTML = rand;
    if (rand === 1) {
        // const name = prompt("Please enter your name");
        // highscore.innerHTML += `<tr><td>${name}</td><td>${newVal}</td></tr>`;
        console.log(newVal);
        counter.style.fontSize = "25px";
        counter.innerHTML = `total score ${newVal}`;
    }
}

function newGame (event) {
    const name = prompt("Please enter your name");
    const score = parseInt(counter.innerHTML);
    highscore.innerHTML += `<tr><td>${name}</td><td>${score}</td></tr>`;
    counter.innerHTML = 0;
    element.innerHTML = 0;
}

function save (event) {
    sessionStorage.setItem("value", counter.innerHTML);
    sessionStorage.setItem("value2", highscore.innerHTML);
    sessionStorage.setItem("value3", element.innerHTML);
}

const highscore = document.getElementById("data");
const element = document.getElementById("dice");
const throwBtn = document.getElementById("throw");
const newGameBtn = document.getElementById("newgame");
const resetBtn = document.getElementById("reset");
const counter = document.getElementById("counter");

highscore.innerHTML = sessionStorage.getItem("value2") || "";
counter.innerHTML = sessionStorage.getItem("value") || 0;
element.innerHTML = sessionStorage.getItem("value3") || 0;

throwBtn.style.backgroundColor = 'lightblue';
throwBtn.innerHTML = 'Roll the die';

resetBtn.addEventListener("click", function () {
    sessionStorage.clear();
    highscore.innerHTML = "";
    counter.innerHTML = 0;
    element.innerHTML = 0;
    console.log('clear');
});

window.addEventListener("unload", save);
throwBtn.addEventListener("click", rotate);
newGameBtn.addEventListener("click", newGame);

console.log(sessionStorage);
