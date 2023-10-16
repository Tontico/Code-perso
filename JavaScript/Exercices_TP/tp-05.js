//TP 05 FONCTIONS ET ROBUSTESSES

/*function clc(a, b) {
  if (a == null || b == null) {
    throw new Error("il manque un parametre");
  }

  if (isNaN(a) || isNaN(b)) {
    throw new Error("le parametre n'est pas un nombre");
  }
  return a * b + a + b;
}
console.log(clc(3, 0));*/

/*function moyenneTableau(monTableau) {
    let moyenne = 0;
    /*if (monTableau == null) {
        throw new Error("il manque un parametre");
      }
      if (!Array.isArray(monTableau)) {
        throw new Error("ce n'est pas un tableau");
      }*/
/*if (monTableau.length == 0) {
      return 0;
    }
    for (i = 0; i < monTableau.length; i++) {
      if (typeof monTableau[i] !== "number") {
          throw new Error("un élement du tableau n'est pas un nombre");
      }
      moyenne += monTableau[i];
    }
    
    return moyenne / monTableau.length;
  
}

try {
    let tableauNombre = [1, 2, 3, 4, 5];
    let resultat1 = moyenneTableau(tableauNombre);
    console.log("Moyenne du tableau de nombres :", resultat1);
} catch (erreur) {
    console.error("Erreur :", erreur.message);
}

try {
    let tableauMixte = [1, "deux", 3, "quatre", 5];
    let resultat2 = moyenneTableau(tableauMixte);
    console.log("Moyenne du tableau mixte :", resultat2);
} catch (erreur) {
    console.error("Erreur :", erreur.message);
}

try {
    let nonTableau = "ceci n'est pas un tableau";
    let resultat3 = moyenneTableau(nonTableau);
    console.log("Moyenne d'un non-tableau :", resultat3);
} catch (erreur) {
    console.error("Erreur :", erreur.message);
}*/