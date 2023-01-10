/** @module helpers */

/**
 * generates the selection options from 1900-2019 sets unique value that i use for index position 0-119
 */
function selection () {
    const selectbox = document.getElementById("selectbox");
    let b = 0;
    for (let i = 1900; i < 2020; i++) {
        const option = document.createElement('option');
        option.text = i;
        option.value = b;
        selectbox.add(option);
        b++;
    }
}
/**
 * fetches all data from github creates the table and does simple math to determine 'winner'
 * @param {int} date takes the index position and uses it to generate the wanted table set
 */
async function generateTable (date) {
    const swedenResponse = await fetch('https://raw.githubusercontent.com/dbwebb-se/js-v2/master/example/co2-json/sweden.json');
    const sweden = await swedenResponse.json();

    const norwayResponse = await fetch('https://raw.githubusercontent.com/dbwebb-se/js-v2/master/example/co2-json/norway.json');
    const norway = await norwayResponse.json();

    const denmarkResponse = await fetch("https://raw.githubusercontent.com/dbwebb-se/js-v2/master/example/co2-json/denmark.json");
    const denmark = await denmarkResponse.json();

    const dataAll = [norway, sweden, denmark];

    dataAll.forEach((element) => {
        let temp = "";
        temp += "<tr>";
        temp += "<td>" + element.country + "</td>";
        temp += `<td id=${element.country}year>` + element.data[date].year + "</td>";
        temp += `<td id=${element.country}co2>` + element.data[date].co2 + "</td>";
        temp += `<td id=${element.country}co2grwthp>` + element.data[date].co2_growth_prct + "</td>";
        temp += `<td id=${element.country}co2grwtha>` + element.data[date].co2_growth_abs + "</td>";
        temp += `<td id=${element.country}pop>` + element.data[date].population + "</td></tr>";
        document.getElementById("data").innerHTML += temp;
    });
    const nor1 = norway.data[date].co2;
    const swe1 = sweden.data[date].co2;
    const den1 = denmark.data[date].co2;

    const nor2 = norway.data[date].co2_growth_prct;
    const swe2 = sweden.data[date].co2_growth_prct;
    const den2 = denmark.data[date].co2_growth_prct;

    const nor3 = norway.data[date].co2_growth_abs;
    const swe3 = sweden.data[date].co2_growth_abs;
    const den3 = denmark.data[date].co2_growth_abs;

    const resultco2 = Math.min(swe1, nor1, den1);
    const resultco2p = Math.min(swe2, nor2, den2);
    const resultco2a = Math.min(swe3, nor3, den3);
    console.log(resultco2a);
    console.log(resultco2p);
    console.log(resultco2);

    // skulle jag kunna få se en modell som fungerar bättre en det som jag använde?
    // det känns väldigt återupprepande och tycker det måste finnas ett bättre och snabbare sätt,
    // men jag kunde inte hitta det just nu

    if (resultco2 === nor1) {
        const temp = document.getElementById("Norwayco2");
        temp.style.backgroundColor = "green";
    }
    if (resultco2 === den1) {
        const temp = document.getElementById("Denmarkco2");
        temp.style.backgroundColor = "green";
    }
    if (resultco2 === swe1) {
        const temp = document.getElementById("Swedenco2");
        temp.style.backgroundColor = "green";
    }
    if (resultco2p === nor2) {
        const temp = document.getElementById("Norwayco2grwthp");
        temp.style.backgroundColor = "green";
    }
    if (resultco2p === den2) {
        const temp = document.getElementById("Denmarkco2grwthp");
        temp.style.backgroundColor = "green";
    }
    if (resultco2p === swe2) {
        const temp = document.getElementById("Swedenco2grwthp");
        temp.style.backgroundColor = "green";
    }
    if (resultco2a === nor3) {
        const temp = document.getElementById("Norwayco2grwtha");
        temp.style.backgroundColor = "green";
    }
    if (resultco2a === den3) {
        const temp = document.getElementById("Denmarkco2grwtha");
        temp.style.backgroundColor = "green";
    }
    if (resultco2a === swe3) {
        const temp = document.getElementById("Swedenco2grwtha");
        temp.style.backgroundColor = "green";
    }
}
// Create y

export { selection, generateTable };
