(function () {
    'use strict';
    /** @module moduleMain */
    const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
    const persons = [
        "Nelson Mandela",
        "John F. Kennedy",
        "Ifti Nasim",
        "Malcolm X",
        "Sojourner Truth",
        "Eleanor Roosevelt",
        "Rosa Parks"
    ];
    const years = [
        "1918 - 2013",
        "1917 - 1963",
        "1946 - 2011",
        "1925 - 1965",
        "1797 - 1883",
        "1884 - 1962",
        "1913 - 2005"
    ];
    const myBtn = document.getElementById("start");
    myBtn.style.backgroundColor = 'red';
    myBtn.innerHTML = 'Nelson Mandela';
    let i = 0;
    /**
    * @function removeContent
    * @param {event} click opens prompt
    * @param {string} promtu takes prompt if answer is yes passes if check
    * @listens document#click - propmts deletion of clicked event.target
    */
    function removeContent (event) {
        const promptu = prompt("destruction? yes / no"); // undrar hur prompts är säkerhetsmässigt?
        if (promptu === "yes") {
            event.target.parentElement.remove(); ;
        }
    }

    const all = document.getElementsByClassName("square");
    /**
    * @function addContent
    * @param {event} click selects target then executes stuff
    * @listens document#click - appends inserts styles various content for the squares on the target square
    */
    function addContent (event) {
        // alert(event.target.id);
        event.target.addEventListener("click", removeContent);
        const image = document.createElement("img");
        image.src = "img/logo.png";
        image.className = "img";
        event.target.style.border = "thick solid black";
        event.target.appendChild(image);
        event.target.insertAdjacentText('afterbegin', persons[event.target.id]);
        event.target.insertAdjacentText('beforeend', years[event.target.id]);

        event.target.removeEventListener("click", addContent);
        // event.target.addEventListener("click", removeContent);
    }
    /**
    * @function myBtn is not really a named function idk how to jsdoc this and jsdoc in general i find hard to understand
    * @param {event} click creates a div with class square and increasing id starting at 0
    * @listens document#click -creates and styles the div square appends to body
    */
    myBtn.addEventListener("click", function (event) {
        myBtn.style.backgroundColor = colors[all.length + 1];
        myBtn.textContent = ('afterbegin', persons[i + 1]);
        console.log(all.length);
        const element = document.createElement("div");
        element.setAttribute("id", i);
        element.className = "square";
        element.style.backgroundColor = colors[i];
        element.addEventListener("click", addContent);
        document.body.appendChild(element);
        // asd

        i++;
        console.log(i);
        if (i === 7) {
            console.log("Oh no");
            myBtn.style.visibility = "hidden";
        }
        element.addEventListener('mouseenter', mEnter);
        element.addEventListener('mouseleave', mLeave);
        /**
        * this is removed after click along with mLeave
        * @function mEnter
        * @param {event} mouseenter selects target then executes stuff
        * @listens document#mouseenter - styles a border on mouseenter
        */
        function mEnter (event) {
            event.target.style.border = "thick solid black";
            element.addEventListener("click", function (event) {
                event.target.removeEventListener("mouseenter", mEnter);
                event.target.removeEventListener("mouseleave", mLeave);
            });
        }
        /**
         * this is removed after click along with mEnter
        * @function mLeave
        * @param {event} mouseleave selects target then executes stuff
        * @listens document#mouseleave - sets the style of a border to null on mouseleave
        */
        function mLeave (event) {
            event.target.style.border = null;
        }
    });

    console.log(colors);
    console.log(persons);
    console.log(years);
    console.log("Script ready!");
})();
