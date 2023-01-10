
/**
* @module hangman
*/

/**
* @name hangman
* @description Base object for hangman
*/
let secret = "";
const hangman = {

    /**
    * @type {object}
    * @name partAsElement
    * @description All parts as html elements
    */

    partAsElement: {
        hill: document.getElementById('hang_hill'),
        gallow: document.getElementById('hang_construction'),
        body: document.getElementById('hang_body'),
        rightarm: document.getElementById('hang_rightarm'),
        leftarm: document.getElementById('hang_leftarm'),
        rightleg: document.getElementById('hang_rightleg'),
        leftleg: document.getElementById('hang_leftleg'),
        rope: document.getElementById('hang_rope'),
        head: document.getElementById('hang_head')
    },
    /**
    * @type {Array}
    * @name wordlist
    * @description All words to random from
    */
    wordlist: function () {
        const wordlist = ['Sweden', 'Japan', 'England', 'Wales', 'Canada'];
        return wordlist;
    },
    /**
    * i någon paranoid idea av att inte returnera själva ordet så returnerade jag längen ist vet inte vad jag gjorde
    * @type {function}
    * @name generateSecret
    * @description generates the secret overwrites secret=""
    * @returns wordlen
    */
    generateSecret: function () {
        const listan = this.wordlist();
        secret = listan[Math.floor(Math.random() * listan.length)];
        const wordLen = secret.length;
        return wordLen;
    },
    /**
     * returnerar ordet
     * @returns {string} secret
     */
    peek: function () {
        return secret;
    },
    /**
     * printar listan
     */
    printWords: function () {
        const listan = this.wordlist();
        console.log(listan);
    },

    /**
    * @type {Array}
    * @name validParts
    * @description All valid parts as strings
    */
    validParts: [
        "hill",
        "gallow",
        "body",
        "rightarm",
        "leftarm",
        "rightleg",
        "leftleg",
        "rope",
        "head"
    ],

    /**
     * @function isValid
     * @description Check if part a valid part, writes error message to console if the part is invalid.
     * @param {string} part Name of the part to check.
     * @returns boolean true if valid part, else false.
     */
    isValid: function (part) {
        if (hangman.validParts.indexOf(part) === -1) {
            return false;
        }
        return true;
    },

    /**
     * @function hide
     * @description Hide a part.
     * @param {string} part Name of the part to hide.
     * @returns void.
     */
    hide: function (part) {
        if (hangman.isValid(part)) {
            hangman.partAsElement[part].style.display = "none";
        }
    },

    /**
     * @function show
     * @description Show a part.
     * @param {string} part Name of the part to show.
     * @returns void.
     */
    show: function (part) {
        if (hangman.isValid(part)) {
            hangman.partAsElement[part].style.display = "inline";
        }
    }
};
export { hangman };
