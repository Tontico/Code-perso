//TP 04 LES FONCTIONS

/*function fonctionConstante (){
    const constante = 33;
    return constante;
}

maConstante = fonctionConstante();
console.log(maConstante);*/

/*function bonjourUntel(texte){
    return "bonjour " + texte;
}

let bonjourPrenom = bonjourUntel("Anthony");
console.log(bonjourPrenom);*/

/*function clc(a, b){

    return a*b + a + b; 
}
console.log(clc(3 , 2));
//il concacetene a + b mais ne peux pas multiplier 2 strings donc NaN;
console.log(clc(" hello ", "c'est moi"));*/

/*function controleTableau(monTableau){
    if(monTableau.length == 0 ){
        return false;
    }
     for(i = 0; i < monTableau.length; i++){
        if( typeof monTableau[i] !== "number"){
            return false;
        }
     }
     return true;
}

let array=[];
let array2 =[3, 6, 8];
let array3 = ["salut", 2]
console.log(controleTableau(array));
console.log(controleTableau(array2));
console.log(controleTableau(array3));*/

/*function moyenneTableau(monTableau) {
  let moyenne = 0;
  if (monTableau.length == 0) {
    return 0;
  }
  for (i = 0; i < monTableau.length; i++) {
    if (typeof monTableau[i] !== "number") {
        console.log("Erreur, l'élément du tableau n'est pas un nombre");
    }
    moyenne += monTableau[i];
  }
  return moyenne / monTableau.length;
}

let array= ["salut"];
console.log(moyenneTableau(array));*/

/*function fonctionMaj(texte){
    if (texte.length === 0){
        return texte;
    }
    return texte.charAt(0).toUpperCase() + texte.substring(1);
}

let text = "bonjour";
console.log(fonctionMaj(text));*/

/*function fonctionPhraseMaj(texte1) {
    if (texte1.length === 0) {
        return texte1;
    }
    texte1 = texte1.split(" ");
    for (let i = 0; i < texte1.length; i++) {
        texte1[i] = texte1[i].charAt(0).toUpperCase() + texte1[i].substring(1);
    }
    return texte1.join(" ");
}

let phrase = "salut tout le monde";
console.log(fonctionPhraseMaj(phrase));*/