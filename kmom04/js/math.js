/** @module Math */

/**
 * prints information on the screen size and element size
 * @param {object} boxElement
 */
function print (boxElement) {
    const boxHeight = window.getComputedStyle(boxElement).getPropertyValue('height');
    const boxWidth = window.getComputedStyle(boxElement).getPropertyValue('width');

    const boxLeft = window.getComputedStyle(boxElement).getPropertyValue('left');
    const boxTop = window.getComputedStyle(boxElement).getPropertyValue('top');

    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;

    console.log('box height: ' + boxHeight);
    console.log('box width: ' + boxWidth);

    console.log('left: ' + boxLeft);
    console.log('top: ' + boxTop);

    console.log('window height: ' + windowHeight);
    console.log('window width: ' + windowWidth);
}
/**
 * centers element on y and x axis
 * @param {object} element
 */
function centerElement (element) {
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
    const boxHeight = element.offsetHeight;
    const boxWidth = element.offsetWidth;

    element.style.top = (windowHeight - boxHeight) / 2 + "px";
    element.style.left = (windowWidth - boxWidth) / 2 + "px";
}
/**
 * generates random x and y position within screen
 * @returns {array} y and x
 */
function getRandomInRange () {
    const windowHeight = window.innerHeight - 100;
    const windowWidth = window.innerWidth - 100;

    const height = (Math.random() * (windowHeight - 100) + 100).toFixed(0) * 1;
    const width = (Math.random() * (windowWidth - 100) + 100).toFixed(0) * 1;

    return [height, width];
}
/**
 * @param {int} min minimum number
 * @param {int} max maximum number
 * generates random x and y position within screen
 * @returns {float} returns random float between
 */
function getRandomNumber (min, max) {
    return Math.random() * (max - min) + min;
}

/**
 * @param {int} min minimum number
 * @param {int} max maximum number
 * generates random x and y position within screen
 * @returns {int} returns random int between min and max
 */
function getRandomInt (max) {
    return Math.floor(Math.random() * max);
}
/**
 * generates random x and y position within screen without care for box size
 * @returns {array} int and int representing a place on screen
 */
function getRandomInRange2 () {
    const winHeight = window.innerHeight;
    const winWidth = window.innerWidth;

    const randomTop = getRandomNumber(0, winHeight);
    const randomLeft = getRandomNumber(0, winWidth);

    return [randomTop, randomLeft];
}

export { print, centerElement, getRandomInRange, getRandomInRange2, getRandomInt };
