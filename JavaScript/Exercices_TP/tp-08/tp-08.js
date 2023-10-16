//TP-08 MANIPULATION DU DOM
/*function calculer(){
let firstNumberElemById = document.getElementById("nombre1");
let secondNumberElemById = document.getElementById("nombre2");
let resultatElem = document.getElementById("resultat")

let nombre1 = parseFloat(firstNumberElemById.value); // permet de recup les valeurs de champs de saisies et les convertir en nbr
let nombre2 = parseFloat(secondNumberElemById.value);

if (isNaN(nombre1) || isNaN(nombre2)){
    alert("Vous devez saisir un nombre"); // permet d'afficher un message dans la page d'erreur
    firstNumberElemById.style.backgroundColor = "red";
    secondNumberElemById.style.backgroundColor = "red";
}  else {
    let resultat = nombre1 + nombre2;
    resultatElem.textContent = "le resultat de l'addition est :" + resultat;
}

}

let calculerId = document.getElementById("calculer");
calculerId.addEventListener("click", calculer);//permet d'ajouter un evenement lorsque on click sur le boutton et permet de calculer*/



/*function operation(){
    let firstNumberElemById = document.getElementById("nombre1");
    let secondNumberElemById = document.getElementById("nombre2");
    let resultatElem = document.getElementById("resultat")
    let operateurSelect = document.getElementById("operateur")


    let nombre1 = parseFloat(firstNumberElemById.value); // permet de recup les valeurs de champs de saisies et les convertir en nbr
    let nombre2 = parseFloat(secondNumberElemById.value);
    let operateur = operateurSelect.value;

    if (!isNaN(nombre1) && !isNaN(nombre2)){
        
    let resultat;
//switch permet de choisir parmis les differents cas d'operateurs
    switch (operateur){
        case "+":
        resultat = nombre1 + nombre2;
        operateur = "addition";
        break;
        case "-":
        resultat = nombre1 - nombre2;
        operateur = "soustraction";
        break;
        case "*":
        resultat = nombre1 * nombre2;
        operateur = "multiplication";
        break;
        case "/":
            if (nombre2 / 0){
                resultat = nombre1 / nombre2;
                operateur = "division";
            } else {
                resultatElem.textContent = " division par 0 impossible";
            }
        break;
    }
    resultatElem.textContent = "le resultat de la " + operateur + " = " + resultat;
} else {
    alert("Vous devez saisir un nombre");
    firstNumberElemById.style.backgroundColor = "red"; // on applique background color a input nombre 1 et 2
    secondNumberElemById.style.backgroundColor = "red";
}
}    
let calculerId = document.getElementById("calculer");
calculerId.addEventListener("click", operation);*/

