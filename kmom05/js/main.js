import { selection, generateTable } from './helpers.js';

const select = document.getElementById('selectbox');

select.addEventListener("change", function (event) {
    document.getElementById("data").innerHTML = "";
    const year = parseInt(event.target.value);
    generateTable(year);
});

selection();
