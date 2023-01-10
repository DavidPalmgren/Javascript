/** @module keyboardEvents */

import { getRandomInRange, getRandomInt } from './math.js';
import { click, dblclick } from './mouse.js';

/**
 * enlargens all with selected class
 * @function
 * @param {classList} selectedShapes to be targeted
 */
function q (selectedShapes) {
    for (let i = 0; i < selectedShapes.length; i++) {
        selectedShapes[i].style.width = (selectedShapes[i].offsetWidth + 10) + 'px';
        selectedShapes[i].style.height = (selectedShapes[i].offsetHeight + 10) + 'px';

        const topValue = window.getComputedStyle(selectedShapes[i]).getPropertyValue('top');
        const topValue2 = window.getComputedStyle(selectedShapes[i]).getPropertyValue('left');
        let size = parseInt(topValue, 10);
        let size2 = parseInt(topValue2, 10);
        size += -5;
        size2 += -5;
        console.log(size);

        selectedShapes[i].style.top = size + 'px';
        selectedShapes[i].style.left = size2 + 'px';
    }
}
/**
 * shrinks all with selected class
 * @function
 * @param {classList} selectedShapes to be targeted
 */
function w (selectedShapes) {
    for (let i = 0; i < selectedShapes.length; i++) {
        selectedShapes[i].style.width = (selectedShapes[i].offsetWidth - 10) + 'px';
        selectedShapes[i].style.height = (selectedShapes[i].offsetHeight - 10) + 'px';

        const failsafe = window.getComputedStyle(selectedShapes[i]).getPropertyValue('width'); // om den inte kan bli mindre så bryts illusionen att den växer på stället
        const topValue = window.getComputedStyle(selectedShapes[i]).getPropertyValue('top');
        const topValue2 = window.getComputedStyle(selectedShapes[i]).getPropertyValue('left');
        let size = parseInt(topValue, 10);
        let size2 = parseInt(topValue2, 10);
        size += 5;
        size2 += 5;
        console.log(size);
        if (failsafe !== '0px') {
            selectedShapes[i].style.top = size + 'px';
            selectedShapes[i].style.left = size2 + 'px';
        }
    }
}

const red = 'rgb(255, 0, 0)';
const orange = 'rgb(255, 165, 0)';
const yellow = 'rgb(255, 255, 0)';
const green = 'rgb(0, 128, 0)';
const blue = 'rgb(0, 0, 255)';
const indigo = 'rgb(75, 0, 130)';
const violet = 'rgb(238, 130, 238)';

const palette = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
/**
 * a color loop which changes the color to the next
 * @function r
 * @param {classList} selectedShapes to be targeted
 */
function r (selectedShapes) {
    for (let i = 0; i < selectedShapes.length; i++) {
        const currentColor = window.getComputedStyle(selectedShapes[i]).backgroundColor;
        console.log(currentColor);
        if (currentColor === red) {
            selectedShapes[i].style.backgroundColor = 'orange';
        }
        if (currentColor === orange) {
            selectedShapes[i].style.backgroundColor = 'yellow';
        }
        if (currentColor === yellow) {
            selectedShapes[i].style.backgroundColor = 'green';
        }
        if (currentColor === green) {
            selectedShapes[i].style.backgroundColor = 'blue';
        }
        if (currentColor === blue) {
            selectedShapes[i].style.backgroundColor = 'indigo';
        }
        if (currentColor === indigo) {
            selectedShapes[i].style.backgroundColor = 'violet';
        }
        if (currentColor === violet) {
            selectedShapes[i].style.backgroundColor = 'red';
        }
    }
}
/**
 * duplicates all selected
 * @function t
 * @param {classList} selectedShapes to be targeted
 */
function t (allSelected) {
    for (let i = 0; i < allSelected.length; i++) {
        console.log('test');
        const coordinates = getRandomInRange();
        const newElement = allSelected[i].cloneNode(true);
        newElement.style.left = `${coordinates[1]}px`;
        newElement.style.top = `${coordinates[0]}px`;
        document.body.appendChild(newElement);
        click(newElement);
        dblclick(newElement);
    }
}
/**
 * removes all selected
 */
function y () {
    const allDelete = document.querySelectorAll('div.selected');
    for (let i = 0; i < allDelete.length; i++) {
        document.body.removeChild(allDelete[i]);
    }
}
/**
 * removes selected class from all
 */
function u () {
    const allUnselect = document.querySelectorAll('div.selected');
    for (let i = 0; i < allUnselect.length; i++) {
        allUnselect[i].classList.toggle("selected");
    }
}
/**
 * adds selected class to all
 */
function i () {
    const selectAll = document.querySelectorAll('div.center');
    for (let i = 0; i < selectAll.length; i++) {
        selectAll[i].classList.add('selected');
    }
}

/**
 * generates a random shape color and position for a new element
 * @function p
 * @param {classList} boxElement for clone
 */
function p (boxElement) {
    const randomShape = getRandomInt(2);
    const randomColor = getRandomInt(8);
    console.log(randomColor);
    const color = palette[randomColor];
    const coordinates = getRandomInRange();
    const newElement = boxElement.cloneNode(true);
    if (randomShape === 0) {
        newElement.classList.add('circle');
    }
    newElement.style.backgroundColor = color;

    newElement.style.left = `${coordinates[1]}px`;
    newElement.style.top = `${coordinates[0]}px`;
    document.body.appendChild(newElement);
    click(newElement);
    dblclick(newElement);
}
/**
 * moves all selected in direction
 * @function arrowLeft
 */
function arrowLeft () {
    const allMove = document.querySelectorAll('div.selected');
    console.log(allMove);
    for (let i = 0; i < allMove.length; i++) {
        const boxLeft = window.getComputedStyle(allMove[i]).getPropertyValue('left');
        let size = parseInt(boxLeft, 10);
        size += -10;
        allMove[i].style.left = size + 'px';
    }
}
/**
 * moves all selected in direction
 * @function arrowRight
 */
function arrowRight () {
    const allMove = document.querySelectorAll('div.selected');
    console.log(allMove);
    for (let i = 0; i < allMove.length; i++) {
        const boxLeft = window.getComputedStyle(allMove[i]).getPropertyValue('left');
        let size = parseInt(boxLeft, 10);
        size += 10;
        allMove[i].style.left = size + 'px';
    }
}
/**
 * moves all selected in direction
 * @function arrowUp
 */
function arrowUp () {
    const allMove = document.querySelectorAll('div.selected');
    console.log(allMove);
    for (let i = 0; i < allMove.length; i++) {
        const boxTop = window.getComputedStyle(allMove[i]).getPropertyValue('top');
        let size = parseInt(boxTop, 10);
        size += -10;
        allMove[i].style.top = size + 'px';
    }
}
/**
 * moves all selected in direction
 * @function arrowDown
 */
function arrowDown () {
    const allMove = document.querySelectorAll('div.selected');
    console.log(allMove);
    for (let i = 0; i < allMove.length; i++) {
        const boxTop = window.getComputedStyle(allMove[i]).getPropertyValue('top');
        let size = parseInt(boxTop, 10);
        size += 10;
        allMove[i].style.top = size + 'px';
    }
}
/**
 * my function of choice for krav 4
 * i random a coordinate that the selected shapes move to and add transition it's alot of fun
 * moves all shapes to random part of screen
 * @function f
 */
function f () {
    const allMove = document.querySelectorAll('div.selected');
    for (let i = 0; i < allMove.length; i++) {
        const coordinates = getRandomInRange();
        allMove[i].classList.add("falling");

        allMove[i].style.left = `${coordinates[1]}px`;
        allMove[i].style.top = `${coordinates[0]}px`;
    }
}

export { q, w, r, t, p, arrowDown, arrowLeft, arrowRight, arrowUp, f, y, u, i };
