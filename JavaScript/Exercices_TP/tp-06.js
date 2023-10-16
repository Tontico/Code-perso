//TP 06 JSON

/*const infosSocieteJson = {
  Nom: "Google",
  "Siège social": "Googleplex, Mountain View, California, United States",
  Fondateurs: [
    {
      Nom: "Larry Page",
      "Date de naissance": "26/03/1973",
      "Lieu de naissance": "East Lansing, Michigan",
    },
    {
      Nom: "Sergey Brin",
      "Date de naissance": "21/08/1973",
      "Lieu de naissance": "Moscou, Union Soviétique",
    },
  ],
  "Chiffre d’affaires en milliards de $": {
    2008: 16.49,
    2012: 37.97,
    2016: 89.46,
    2018: 136.2,
  },
};

console.log(infosSocieteJson);

const fondateurs = infosSocieteJson.Fondateurs;
const nomFondateurs = [];
for (let i = 0; i < fondateurs.length; i++) {
  const fondateur = fondateurs[i];
  nomFondateurs[i] = fondateur.Nom;
  console.log(`- Nom : ${fondateur.Nom}`);
  console.log(`  Date de naissance : ${fondateur["Date de naissance"]}`);
  console.log(`  Lieu de naissance : ${fondateur["Lieu de naissance"]}`);
}

const chiffresAffaires =
  infosSocieteJson["Chiffre d’affaires en milliards de $"];
for (const annee in chiffresAffaires) {
  const chiffre = chiffresAffaires[annee];
  console.log(`- Année ${annee} : ${chiffre} milliards de $`);
}
*/