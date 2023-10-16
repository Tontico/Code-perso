//TP 07 Dates

/*function plusGrandeDate(date1 , date2){
    if (date1 > date2) 
    return date1;
    else {
        return date2 
    }
}

let date = new Date('2016-01-01');
let datte = new Date('2014-01-02')
console.log(plusGrandeDate(date, datte));*/

/*function calculerAge(dateNaissance) {
  let dateActuelle = new Date();
  let anneeDeNaissance = dateNaissance.getFullYear();
  let anneeActuelle = dateActuelle.getFullYear();
  let moisDeNaissance = dateNaissance.getMonth();
  let moisActuelle = dateActuelle.getMonth();
  let age = anneeActuelle - anneeDeNaissance;
  let month = moisActuelle - moisDeNaissance;
  if (moisActuelle < moisDeNaissance){
    age--;
    month= 12 - moisDeNaissance + moisActuelle;
  }
  return { annee: age, mois: month };
}

let naissance = new Date("1968-09-02");
const Age = calculerAge(naissance);
console.log(`vous avez  ${Age.annee} ans  et  ${Age.mois} mois`);*/