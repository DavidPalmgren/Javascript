/**
 * A function to wrap it all in.
 */
(function () {
    "use strict";

    console.log("JavaScript ready.");

    function rotate (event) {
        let rand = Math.floor(Math.random() * 6);
        rand += 1;
        element.textContent = ('afterbegin', rand);
    }
    const element = document.getElementById("uno");
    const myBtn = document.getElementById("start");
    myBtn.style.backgroundColor = 'lightblue';
    myBtn.innerHTML = 'Roll the die';
    myBtn.addEventListener("click", rotate);
})();
