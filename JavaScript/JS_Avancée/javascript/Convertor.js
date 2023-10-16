/*const form = document.createElement("form");
const inputEuro = document.createElement("input");
inputEuro.setAttribute("type", "number");
const inputFrancSuisse = document.createElement("input");
inputFrancSuisse.setAttribute("type", "number");
const labelEuro = document.createElement("label");
const labelFrancSuisse = document.createElement("label");
labelEuro.textContent = "Euro";
labelFrancSuisse.textContent = "Franc Suisse";

document.body.appendChild(form);
form.appendChild(labelEuro);
form.appendChild(inputEuro);
form.appendChild(labelFrancSuisse);
form.appendChild(inputFrancSuisse);

inputEuro.addEventListener("input", function (event) {
  event.preventDefault();
  const euro = parseFloat(inputEuro.value);

  if (!isNaN(euro)) {
    const euroConverted = euro * 1.06;
    inputFrancSuisse.value = euroConverted.toFixed(2);
  } else {
    inputFrancSuisse.value = " ";
  }
});

inputFrancSuisse.addEventListener("input", function (event) {
  event.preventDefault();
  const francSuisse = parseFloat(inputFrancSuisse.value);

  if (!isNaN(francSuisse)) {
    const francSuisseConverted = francSuisse / 1.06;
    inputEuro.value = francSuisseConverted.toFixed(2);
  } else {
    inputEuro.value = " ";
  }
});*/

//Refaire cet exo avec classes

//affiche du convertisseur 

import Convertor from "./components/convertor.js";

new Convertor(1.06);