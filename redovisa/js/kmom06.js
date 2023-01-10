
const person = {
    name: "",
    title: "",
    romanEquivalent: "",
    init: function (name, title, romanEquivalent) {
        this.name = name;
        this.title = title;
        this.romanEquivalent = romanEquivalent;
    },
    create: function () {
        let temp = "";
        temp += "<tr>";
        temp += "<td>" + this.name + "</td>";
        temp += "<td>" + this.title + "</td>";
        temp += "<td>" + this.romanEquivalent + "</td>";
        temp += "</tr>";
        document.getElementById("data").innerHTML += temp;
    }
};

const artemis = Object.create(person);
const ares = Object.create(person);
const hestia = Object.create(person);

artemis.init("Artemis", "Goddess of the hunt", "Diana");
ares.init("Ares", "God of war", "Mars");
hestia.init("Hestia", "Goddess of the hearth", "Vesta");

const all = [artemis, ares, hestia];

all.forEach((element) => {
    element.create();
});
