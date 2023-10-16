const regionsSelect = document.getElementById("regions");
const departementsSelect = document.getElementById("departements");
const communesSelect = document.getElementById("communes");

regionsSelect.addEventListener("change", () => {
  const selectedRegionCode = regionsSelect.value;
  // Mettre en place la logique pour charger les départements correspondants ici
});

departementsSelect.addEventListener("change", () => {
  const selectedDepartementCode = departementsSelect.value;
  // Mettre en place la logique pour charger les communes correspondantes ici
});

communesSelect.addEventListener("change", () => {
  const selectedCommuneCode = communesSelect.value;
  // Mettre en place la logique pour afficher les informations de la commune ici
});
const regionsUrl = "https://geo.api.gouv.fr/regions";

fetch(regionsUrl)
  .then((response) => response.json())
  .then((data) => {
    data.forEach((region) => {
      const option1 = document.createElement("option");
      option1.value = region.code;
      option1.textContent = region.nom;
      regionsSelect.appendChild(option1);
    });
  });

// Pour charger les départements correspondants (à l'intérieur du gestionnaire onchange des régions)
const departementsUrl = `https://geo.api.gouv.fr/regions/${selectedRegionCode}/departements`;

fetch(departementsUrl)
  .then((response) => response.json())
  .then((data) => {
    data.forEach((departement) => {
      const option2 = document.createElement("option");
      option2.value = departement.code;
      option2.valueTextContent = departement.nom;
      departementsSelect.appendChild(option2);
    });
  });

// Pour charger les communes correspondantes (à l'intérieur du gestionnaire onchange des départements)
const communesUrl = `https://geo.api.gouv.fr/departements/${selectedDepartementCode}/communes`;

// Pour charger les informations de la commune (à l'intérieur du gestionnaire onchange des communes)
const communeInfoUrl = `https://geo.api.gouv.fr/communes/${selectedCommuneCode}`;

// Mettre en place la logique pour afficher les informations ici
