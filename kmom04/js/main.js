import { centerElement } from './math.js';
import { dblclick, click } from './mouse.js';
import { q, w, r, t, p, arrowLeft, arrowRight, arrowUp, arrowDown, f, y, u, i } from './keyboard.js';

const boxElement = document.getElementById('box1');
const pBox = document.createElement('div');
pBox.setAttribute("id", 'box1');
pBox.classList.add('box', 'center', 'red', 'size200'); // kunde inte clona node när jag hade deletat boxElement så fix

centerElement(boxElement);
window.addEventListener("resize", function (event) {
    centerElement(boxElement);
});
click(boxElement);
dblclick(boxElement);

document.addEventListener("keydown", function (event) {
    const selectedShapes = document.getElementsByClassName("selected");
    if (event.key === 'e') {
        for (let i = 0; i < selectedShapes.length; i++) {
            selectedShapes[i].classList.toggle('circle');
        }
    }
    if (event.key === 'q') {
        q(selectedShapes);
    }
    if (event.key === 'w') {
        w(selectedShapes);
    }
    if (event.key === 'r') {
        r(selectedShapes);
    }
    if (event.key === 't') {
        const allSelected = document.querySelectorAll('div.selected');
        t(allSelected);
    }
    if (event.key === 'y') {
        y();
    }
    if (event.key === 'u') {
        u();
    }
    if (event.key === 'i') {
        i();
    }
    if (event.key === 'p') {
        p(pBox);
    }
    if (event.key === "ArrowLeft") {
        arrowLeft();
    }
    if (event.key === "ArrowRight") {
        arrowRight();
    }
    if (event.key === "ArrowUp") {
        arrowUp();
    }
    if (event.key === "ArrowDown") {
        arrowDown();
    }
    if (event.key === 'f') {
        f();
    }
});
// copy selected 3.4
