/** @module helpers */
const myQuestions = [
    {
        question: "Vilken är Sveriges tredje största sjö?",
        alt0: 'Hjälmaren',
        alt1: 'Mälaren',
        alt2: 'Storsjön',
        answer: 'Mälaren'
    },
    {
        question: "När skapades Facebook?",
        alt0: '2004',
        alt1: '1994',
        alt2: '2011',
        answer: '2004'
    },
    {
        question: "Hur lång är en tum?",
        alt0: '2,54 cm',
        alt1: '1,54 cm',
        alt2: '1 m',
        answer: '2,54 cm'
    },
    {
        question: "Hur gammal blev Drottning Elizabeth?",
        alt0: '96 år',
        alt1: '98 år',
        alt2: '94 år',
        answer: '96 år'
    },
    {
        question: "Vilken av följande öl härstammar från Nederländerna?",
        alt0: 'Heineken',
        alt1: 'Tuborg',
        alt2: 'Becks',
        answer: 'Heineken'
    }
];

const startBtn1 = document.getElementById("startBtn1");
const topDisplay = document.getElementById("topDisplay");
const botDisplay = document.getElementById("botDisplay");
const midDisplay = document.getElementById("midDisplay");
let score = 0;
let score2 = 0;
let score3 = 0;
let score4 = 0;
let score5 = 0;
const questionCount = 5;
let currentQuestion = 0;
let currentQuestion2 = 0;
let currentPart = 0;
let correct = 0;
let currentPicture = 0;
let visualReadingCurrent = 0;
let guesses = 0;

window.reset = function () {
    console.log("currentPart is: " + currentPart);
    if (currentPart === 1) {
        currentPart--;
        const temp = botDisplay.querySelectorAll("button");
        const stuff = temp.length;
        if (startBtn1) {
            startBtn1.remove();
        }
        if (temp) {
            for (let i = 0; i < stuff; i++) {
                botDisplay.removeChild(temp[i]);
                console.log(temp[i] + " is removed");
            }
        }
        currentQuestion = 0;
        score = 0;
        quizz(0);
    }
    if (currentPart === 2) {
        currentPart--;
        const temp = botDisplay.querySelectorAll("button");
        const stuff = temp.length;
        if (startBtn1) {
            startBtn1.remove();
        }
        if (temp) {
            for (let i = 0; i < stuff; i++) {
                botDisplay.removeChild(temp[i]);
                console.log(temp[i] + " is removed");
            }
        }
        currentQuestion2 = 0;
        correct = 0;
        score2 = 0;
        fizzBuzz();
    }
    if (currentPart === 3) {
        currentPart--;
        const temp = document.querySelectorAll("button");
        const stuff = temp.length;
        currentQuestion++;
        if (temp) {
            for (let i = 0; i < stuff; i++) {
                temp[i].remove();
                console.log(temp[i] + " is removed");
            }
        }
        score3 = 0;
        currentPicture = 0;
        memory();
    }
    if (currentPart === 4) {
        currentPart--;
        const startBtn2 = document.getElementById("startBtn2");
        if (startBtn2) {
            startBtn1.remove();
        }
        const temp = midDisplay.querySelectorAll("div");
        const stuff = temp.length;
        currentQuestion++;
        if (temp) {
            for (let i = 0; i < stuff; i++) {
                temp[i].remove();
                console.log(temp[i] + " is removed");
            }
        }
        score4 = 0;
        guesses = 0;
        visualReadingCurrent = 0;
        visualReading();
    }
    if (currentPart === 5) {
        score5 = 0;
        currentPart--;
        counter = 0;
        comprehension();
    }
};
function init () {
    topDisplay.innerHTML = "<h2>Tipsfrågor</h2>" + "<p>Första delen består av simpla quizz frågor med 3 alternativ, svara genom att klicka på ett av alternativen.</p>";
    startBtn1.addEventListener("click", function (event) {
        startBtn1.classList.add("test1");
        startBtn1.addEventListener("click", quizz(0));
    });
}
/**
 *
 * @param {int} ceiling
 * @returns random int from 0 to ceiling
 */
function randomInt (ceiling) {
    return Math.floor(Math.random() * ceiling);
}
// del 1
/**
 * takes event and runs target.innerHTML to see if the clicked button matches the answer
 * @param {obj} event
 */
function selected (event) {
    const allB = document.getElementsByClassName("button");
    if (event.target.innerHTML === myQuestions[currentQuestion].answer) {
        event.target.style.backgroundColor = "#70e000";
        score += 3;
    } else {
        event.target.style.backgroundColor = "#bf0603";
    }
    for (let i = 0; i < allB.length; i++) {
        if (allB[i].innerHTML === myQuestions[currentQuestion].answer) {
            allB[i].style.backgroundColor = "#70e000";
        }
    }
    delay();
}
/**
 * del 1 generar quizz med 3 alternativ från myQuestions listan
 * @param {int} count pointer from where to take the questions
 */
function quizz (count) {
    const startBtn1 = document.getElementById("startBtn1");
    if (startBtn1) {
        startBtn1.remove();
    }
    if (currentQuestion < questionCount) {
        for (let i = 0; i < 3; i++) {
            const startBtn1 = document.createElement('button');
            startBtn1.setAttribute("id", 'startBtn' + i);
            startBtn1.innerHTML = "text";
            startBtn1.classList.add("button");
            startBtn1.addEventListener("click", selected);
            botDisplay.appendChild(startBtn1);
        }

        topDisplay.innerHTML = myQuestions[count].question;
        for (let i = 0; i < 3; i++) {
            const temp = document.getElementById(`startBtn${i}`);
            temp.innerHTML = myQuestions[count][`alt${i}`];
        }
    } else {
        topDisplay.innerHTML = "current score is: " + score + "/" + 15;
        console.log("current score is: " + score + "/" + 15);
        nextPart(fizzBuzz);
    }
}
/**
 * sets a delay so you can see the correct answer before new buttons are generated
 */
function delay () {
    setTimeout(() => {
        const temp = document.getElementsByClassName("button");
        currentQuestion++;
        if (temp) {
            for (let i = 0; i < temp.length; i++) {
                temp[i].remove();
            }
        }

        quizz(currentQuestion, myQuestions);
    }, 500);
}
/**
 * sets a delay so you can see the correct answer before new buttons are generated
 */
function delay2 () {
    setTimeout(() => {
        const temp = document.querySelectorAll("button");
        const stuff = temp.length;
        currentQuestion++;
        if (temp) {
            for (let i = 0; i < stuff; i++) {
                temp[i].remove();
                console.log(temp[i] + " is removed");
            }
        }

        fizzBuzz();
    }, 500);
}
/**
 * navigates what part of the quizz you're currently on, and sets correct explanation for next part and shows score from previous test
 * @param {int} gamePart
 */
function nextPart (gamePart) {
    const topHTML = [
        "<h2>Fizz Buzz</h2> \n I denna leken så ska du gissa om fizz eller buzz kommer som nästa nummer i sekvensen. Fizz är ett nummer delbart av 3 som t.ex. 3/6/9 och Buzz ett nummer delbart av 5 t.ex. 5/10/15" + "<h2>\n your score on last part was: " + score + "/15 </h2>",
        "<h2>Minne</h2> \n 9 bilder kommer att visas up under 5sekunder försök att komma ihåg så många som du kan och sedan klicka på dem i rätt ordning enligt listan" + "<h2>\n your score on last part was: " + score2 + "/15 </h2>",
        "<h2>Visuell förmåga och läsförståelse</h2 \n Du kommer att få se 10st olika objekt med olika former/färger följ listan och klicka på dem i rätt ordning, du får 15sekunder!" + "<h2>\n your score on last part was: " + score3 + "/9 </h2>",
        "<h2>Uppfattningsförmåga</h2> \n Detta testet provar din uppfattningsförmåga genom att visa upp ett objekt under 1sekund och du ska välja att klick på det eller ej, om du klickar rätt får du +1 poäng annars -1, följ dessa instruktionerna när du klickar på objekt: 1. Har en annan färg än röd 2. Har en annan form än kvadrat 3. eller är en röd kvadrat" + "<h2>\n your score on last part was: " + score4 + "/10    </h2>"
    ];
    topDisplay.innerHTML = topHTML[currentPart];
    currentPart++;
    const startBtn1 = document.createElement("button");
    startBtn1.setAttribute("id", 'startBtn2');
    startBtn1.innerHTML = "start";
    startBtn1.classList.add("button");
    startBtn1.addEventListener("click", function () {
        // start fizzbuzz
        startBtn1.remove();
        gamePart();
    });
    botDisplay.appendChild(startBtn1);
}
// FizzBuzz del 2
/**
 * fizzBuzz game, uses randomInt to get a starting point which then adds more to make a sequence words are replaced with fizz/buzz when appropriate you're supposed to guess the next number fizz or buzz.
 */
function fizzBuzz () {
    const startBtn1 = document.getElementById("startBtn1");
    const temp = document.getElementsByClassName("button");
    const stuff = temp.length;
    currentQuestion++;
    if (startBtn1) {
        startBtn1.remove();
    }
    if (temp) {
        for (let i = 0; i < stuff; i++) {
            temp[i].remove();
            console.log(temp[i] + " is removed");
        }
    }
    const startingPoint = randomInt(99);
    topDisplay.innerHTML = "";
    if (currentQuestion2 < questionCount) {
        currentQuestion2++; // top text display
        for (let i = startingPoint; i <= startingPoint + 3; i++) {
            if (i % 15 === 0) {
                topDisplay.innerHTML += "FizzBuzz ";
            } else if (i % 3 === 0) {
                topDisplay.innerHTML += "Fizz ";
            } else if (i % 5 === 0) {
                topDisplay.innerHTML += "Buzz ";
            } else {
                topDisplay.innerHTML += i + " ";
            }
        }
        correct = startingPoint + 4;
        if (correct % 15 === 0) {
            correct = "FizzBuzz";
        } else if (correct % 5 === 0) {
            correct = "Buzz";
        } else if (correct % 3 === 0) {
            correct = "Fizz";
        } else {
            correct = startingPoint + 4;
        }
        console.log("correct is: " + correct);
        const stuff = startingPoint + 4;
        makeFizzBuzzButtons(stuff);
    } else {
        console.log("end of fizzbuzz");
        console.log("your score as of part 2 is :" + score2);
        nextPart(memory);
    }
}
/**
 * creates the buttons for the fizzBuzz game
 * @param {int} correct is the last int of the game which is "manually" put there
 */
function makeFizzBuzzButtons (correct) {
    for (let i = 0; i < 4; i++) {
        const fizzBuzzButton = document.createElement("button");
        fizzBuzzButton.classList.add("button");
        fizzBuzzButton.setAttribute("id", 'startBtn' + i);
        fizzBuzzButton.addEventListener("click", selectedFizzBuzz);
        if (i === 0) {
            fizzBuzzButton.innerHTML = "Fizz";
            botDisplay.appendChild(fizzBuzzButton);
        }
        if (i === 1) {
            fizzBuzzButton.innerHTML = "Buzz";
            botDisplay.appendChild(fizzBuzzButton);
        }
        if (i === 2) {
            fizzBuzzButton.innerHTML = "FizzBuzz";
            botDisplay.appendChild(fizzBuzzButton);
        }
        if (i === 3) {
            fizzBuzzButton.innerHTML = correct.toString();
            console.log("correct type is :" + typeof correct);
            botDisplay.appendChild(fizzBuzzButton);
        } else if (i >= 4) {
            console.log("too much");
        }
    }
}
/**
 * takes event and runs target.innerHTML to see if the clicked button matches the answer
 * @param {obj} event
 */
function selectedFizzBuzz (event) {
    const allC = document.getElementsByClassName("button");
    console.log("event targets innerHTML is: " + event.target.innerHTML);
    console.log("event targets type is: " + typeof event.target.innerHTML);
    for (let i = 0; i < allC.length; i++) {
        console.log(allC[i]);
        console.log(correct);
        if (allC[i].innerHTML === correct.toString()) {
            allC[i].style.backgroundColor = "#70e000";
        }
    }
    if (event.target.innerHTML === correct.toString()) {
        console.log("correct you got the green style");
        event.target.style.backgroundColor = "#70e000";
        score2 += 3;
    } else if (event.target.innerHTML !== correct) {
        event.target.style.backgroundColor = "#bf0603";
        console.log("innerhtml is: " + event.target.innerHTML);
        console.log("WRONG, correct was supposedly :" + correct);
    }
    delay2();
}
// memory del 3
/**
 * takes event and runs target.innerHTML to see if the clicked button matches the answer
 * adds the picture to the card when clicked, ends the game if 9 attempts were made
 * @param {obj} event
 */
function memoryGuess (event) {
    const temp = document.createElement("div");
    temp.classList.add("box");
    midDisplay.appendChild(temp);
    event.target.innerHTML = pictures[parseInt(event.target.id)];
    console.log("pict: " + picturesCorrectAnswer[currentPicture] + "event id is: " + parseInt(event.target.id));
    if (parseInt(event.target.id) === picturesCorrectAnswer[currentPicture]) {
        console.log("correct");
        document.getElementsByClassName("box")[0].innerHTML = "&#x2713";
        score3++;
    } else {
        console.log("wrong");
        document.getElementsByClassName("box")[0].innerHTML = "&#10005";
        document.getElementsByClassName("box")[0].style.backgroundColor = "red";
    }
    currentPicture++;
    if (currentPicture > 8) {
        topDisplay.innerHTML = "your score is: " + score3;
        endMemory();
    }
    setTimeout(() => {
        event.target.innerHTML = "?";
        document.getElementsByClassName("box")[0].remove();
        document.getElementsByClassName("counter")[0].innerHTML = currentPicture + 1;
    }, 500);
}
const pictures = [
    '<img src="img/äpple.png" alt="pic" width="150" height="150">',
    '<img src="img/druvor.png" alt="pic" width="150" height="150">',
    '<img src="img/hamburgare.png" alt="pic" width="150" height="150">',
    '<img src="img/körsbär.png" alt="pic" width="150" height="150">',
    '<img src="img/kyckling.png" alt="pic" width="150" height="150">',
    '<img src="img/ost.png" alt="pic" width="150" height="150">',
    '<img src="img/päron.png" alt="pic" width="150" height="150">',
    '<img src="img/vatten.png" alt="pic" width="150" height="150">',
    '<img src="img/vin.png" alt="pic" width="150" height="150">'
];
const picturesCorrectAnswer = [
    3,
    1,
    2,
    0, // var är 2an ...
    5,
    6,
    7,
    8,
    4
];
/**
 * memory game generates 9 buttons with the pictures after 5sec async is called and removes them
 */
function memory () {
    const temp = document.createElement("div");
    temp.classList.add("counter");
    temp.innerHTML = 1;
    midDisplay.appendChild(temp);
    const startBtn1 = document.getElementById("startBtn1");
    if (startBtn1) {
        startBtn1.remove();
    }
    topDisplay.innerHTML = "1. körsbär \n 2. druvor \n 3. hamburgare \n 4. äpple \n 5. ost \n 6. päron \n 7. vatten \n 8. vin/dryck \n 9. kyckling ";
    for (let i = 0; i < 9; i++) {
        console.log(i);
        const memoryButton = document.createElement("button");
        memoryButton.classList.add("memoryBtn");
        memoryButton.style.fontSize = "100px";
        memoryButton.setAttribute("id", 'memory' + i);

        memoryButton.innerHTML = pictures[i];
        memoryButton.setAttribute("id", i);
        botDisplay.appendChild(memoryButton);
        setTimeout(() => {
            for (let i = 0; i < 9; i++) {
                memoryButton.innerHTML = "?";
                memoryButton.addEventListener("click", memoryGuess);
            }
        }, 5000);
    }
}
/**
 * end the memory game by removing all buttons and calling nextPart
 */
function endMemory () {
    const temp = document.querySelectorAll("button");
    const stuff = temp.length;
    currentQuestion++;
    if (temp) {
        for (let i = 0; i < stuff; i++) {
            temp[i].remove();
            console.log(temp[i] + " is removed");
        }
    }
    document.getElementsByClassName("counter")[0].remove();
    nextPart(visualReading);
    // create next part button here perhaps
}
// Visual/reading  del 4
const shapes = [
    "circle",
    "square",
    "triangle",
    "circle",
    "square",
    "triangle",
    "circle",
    "square",
    "triangle",
    "circle"
];
const colors = [
    "red",
    "blue",
    "green",
    "blue",
    "green",
    "red",
    "green",
    "red",
    "blue",
    "purple"
];
const visualReadingAnswers = [
    5,
    3,
    6,
    1,
    4,
    2,
    9,
    0,
    7,
    8
];
/**
 * takes event and runs target.innerHTML to see if the clicked button matches the answer
 * made a counter so i know which part im on.
 * made a correct display, box will be green if guess is correct otherwise red.
 * @param {obj?} event
 */
function visualReadingGuess (event) {
    if (guesses < 8) {
        const temp = document.createElement("div");
        temp.classList.add("box");
        botDisplay.appendChild(temp);
        console.log("shape" + visualReadingAnswers[visualReadingCurrent]);
        if (event.target.id === "shape" + visualReadingAnswers[visualReadingCurrent]) {
            document.getElementsByClassName("box")[0].innerHTML = "&#x2713";
            console.log("correct");
            score4++;
        } else {
            document.getElementsByClassName("box")[0].innerHTML = "&#10005";
            document.getElementsByClassName("box")[0].style.backgroundColor = "red";
            console.log("wrong");
        }
        visualReadingCurrent++;
        setTimeout(() => {
            document.getElementsByClassName("box")[0].remove();
        }, 500);
        guesses++;
    }
}
/**
 * ends visualReading test removes all leftovers etc, calls nextPart
 */
function endVisualReading () {
    // topDisplay.innerHTML = "your score is: " + score4 + "/10";
    const temp = midDisplay.querySelectorAll("div");
    const stuff = temp.length;
    currentQuestion++;
    if (temp) {
        for (let i = 0; i < stuff; i++) {
            temp[i].remove();
            console.log(temp[i] + " is removed");
        }
    }
    nextPart(comprehension);
    // create next part button here perhaps
}
/**
 * makes 10 shape/color combos addsevent listener visualReadingGuess, game ends after 15s
 */
function visualReading () {
    topDisplay.innerHTML = "1.röd-triangel, 2.blå-cirkel, 3.grön-cirkel, 4.blå-fyrkant, 5.grön-fyrkant, 6.grön-triangel, 7.lila-cirkel, 8.röd-cirkel, 9.röd-fyrkant, 10.blå-triangel.";
    const startBtn1 = document.getElementById("startBtn1");
    if (startBtn1) {
        startBtn1.remove();
    }
    for (let i = 0; i < 10; i++) {
        const temp = document.createElement("div");
        temp.classList.add(shapes[i]);
        temp.classList.add("game");
        if (shapes[i] === "triangle") {
            temp.style.borderBottomColor = colors[i];
        } else {
            temp.style.backgroundColor = colors[i];
        }
        temp.setAttribute("id", 'shape' + i);
        temp.addEventListener("click", visualReadingGuess);
        midDisplay.appendChild(temp);
    }
    setTimeout(() => {
        endVisualReading();
    }, 15000);
}
// Uppfattningsförmåga del 5
let counter = 0;
/**
 * takes your event.target checks if it matches and gives you correct or wrong same as all above guess/selected but made for this specific one like all the others
 * @param {obj} event
 */
function comprehensionGuess (event) {
    event.target.removeEventListener("click", comprehensionGuess);
    if (event.target.style.backgroundColor !== "red") {
        if (!event.target.classList.contains("square")) {
            if (event.target.style.borderBottomColor !== "red") {
                console.log("correct");
                score5++;
            } else if (event.target.style.borderBottomColor === "red") {
                console.log("wrong");
                score5--;
            }
        } else if (event.target.classList.contains("square")) {
            console.log("wrong");
            score5--;
        }
    } else if (event.target.style.backgroundColor === "red") {
        if (event.target.classList.contains("square")) {
            console.log("that's a red square correct");
            score5++;
        } else if (!event.target.classList.contains("square")) {
            console.log("wrong");
            score5--;
        }
    } else {
        console.log("wrong by end else");
        score5--;
    }
}
/**
 * generates 10 objects click they show for 1s then 1s dead time then next repeats untill all objects are made.
 */
function comprehension () {
    if (startBtn1) {
        startBtn1.remove();
    }
    const random = randomInt(9);
    const random2 = randomInt(9);
    const temp = document.createElement("div");
    temp.classList.add(shapes[random]);
    temp.classList.add("game");
    if (shapes[random] === "triangle") {
        temp.style.borderBottomColor = colors[random2];
    } else {
        temp.style.backgroundColor = colors[random2];
    }
    temp.setAttribute("id", 'shape');
    temp.addEventListener("click", comprehensionGuess);
    midDisplay.appendChild(temp);
    if (counter > 8) {
        setTimeout(() => {
            endOfTest();
        }, 1000);
        console.log("end of test func called");
    }
    setTimeout(() => {
        midDisplay.removeChild(temp);
        counter++;
        if (counter < 10) {
            setTimeout(() => {
                comprehension();
            }, 1000);
        }
    }, 1000);
}
/**
 * ends the test, displays your final score
 */
function endOfTest () {
    currentPart++;
    const totalScore = score + score2 + score3 + score4 + score5;
    console.log("you made it to end of test");
    topDisplay.innerHTML = " <ul><li>Quizz: " + score + "</li><li> FizzBuzz: " + score2 + "</li><li> Memory: " + score3 + "</li><li> Visuell förmåga och läsförståelse: " + score4 + "</li><li> Uppfattningsförmåga: " + score5 + "</li><li> total poäng: " + totalScore + "</li></ul>";
}
export { init };
