import { init } from './helpers.js';

const startBtn1 = document.getElementById("startBtn1");
startBtn1.addEventListener("click", function (event) {
    startBtn1.classList.add("test1");
    startBtn1.addEventListener("click", init());
});

/*
for (let i = 1; i < 101; i++) {
    if (i % 15 === 0) console.log("FizzBuzz");
    else if (i % 3 === 0) console.log("Fizz");
    else if (i % 5 === 0) console.log("Buzz");
    else console.log(i);
}
*/
