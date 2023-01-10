(function () {
    "use strict";

    function centerElement (element) {
        const windowHeight = window.innerHeight;
        const windowWidth = window.innerWidth;
        const boxHeight = element.offsetHeight;
        const boxWidth = element.offsetWidth;

        element.style.top = (windowHeight - boxHeight) / 2 + "px";
        element.style.left = (windowWidth - boxWidth) / 2 + "px";
    }
    const sticky = document.getElementById('sticky');

    centerElement(sticky);

    function arrowLeft (element) {
        element.innerHTML = `<img src="img/sticky.png" alt="stickyman" width="200" height="200">`;
        const boxLeft = window.getComputedStyle(element).getPropertyValue('left');

        let size = parseInt(boxLeft, 10);
        size += -20;
        element.style.left = size + 'px';
    }
    /**
     * moves all selected in direction
     * @function arrowRight
     */
    function arrowRight (element) {
        element.innerHTML = `<img src="img/sticky2.png" alt="stickyman" width="200" height="200">`;
        const boxLeft = window.getComputedStyle(element).getPropertyValue('left');
        let size = parseInt(boxLeft, 10);
        size += 20;
        element.style.left = size + 'px';
    }
    /**
     * moves all selected in direction
     * @function arrowUp
     */
    function arrowUp (element) {
        const boxTop = window.getComputedStyle(element).getPropertyValue('top');
        let size = parseInt(boxTop, 10);
        size += -20;
        element.style.top = size + 'px';
    }
    /**
     * moves all selected in direction
     * @function arrowDown
     */
    function arrowDown (element) {
        const boxTop = window.getComputedStyle(element).getPropertyValue('top');
        let size = parseInt(boxTop, 10);
        size += 20;
        element.style.top = size + 'px';
    }

    document.addEventListener("keydown", function (event) {
        if (event.key === "ArrowLeft") {
            arrowLeft(sticky);
        }
        if (event.key === "ArrowRight") {
            arrowRight(sticky);
        }
        if (event.key === "ArrowUp") {
            arrowUp(sticky);
        }
        if (event.key === "ArrowDown") {
            arrowDown(sticky);
        }
    });
})();
