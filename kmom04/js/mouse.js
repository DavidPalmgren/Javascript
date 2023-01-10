/** @module mouseEvents */

/**
 * shrinks and ultimately removes after 2s on target
 * | adds event listener
 * @param {object} element target
 */
function dblclick (element) {
    element.addEventListener("dblclick", function (event) {
        setTimeout(() => {
            event.target.remove();
        }, 2000);
        event.target.classList.toggle("animateSize");
        event.target.classList.remove("center");
        event.target.style.width = '2px';
        event.target.style.height = '2px';
    });
}
/**
 * adds event listener | adds selected class
 * @param {object} element target
 */
function click (element) {
    element.addEventListener("click", function (event) {
        event.target.classList.toggle("selected");
        console.log(document.querySelectorAll('selected'));
    });
}

export { dblclick, click };
