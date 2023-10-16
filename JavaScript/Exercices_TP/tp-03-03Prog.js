//TP 03-TABLEAUX, BOUCLES ET CONDITIONS

/*let affichageSuivant = 6;
for(i = 1; i < 11; i++){
    console.log(affichageSuivant + i);
}*/


/*let calculSomme= 10;
let somme = 0
for (let i = 0; i <= calculSomme; i++){
    somme = somme + i ;
}
console.log(somme);*/


/*let array = [1,15,-3,0,8,7,4,-2,28,7,-1,17,2,3,0,14,-4];
for (i = 0; i < array.length; i++){
    console.log(array[i]);
}
/*for ( i = array.length-1 ; i > 0 ; i--){
    let arrayCopy = array[i];
    console.log(arrayCopy);
}*/


/*let array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];
let arrayCopy = [...array];
console.log(array);

let debut = 0;
let fin = array.length - 1;

while (debut < fin) {
  let temp = arrayCopy[debut];
  arrayCopy[debut] = arrayCopy[fin];
  arrayCopy[fin] = temp;
  debut = debut + 1;
  fin = fin - 1;
}
console.log(arrayCopy);*/


let array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];
for (i = 0; i <= array.length; i++){
    if (array[i] > 3){
        console.log(array[i]);
    }
}/*
for (i = 0; i <= array.length; i++){
    if (array[i] % 2 == 0){
        console.log(array[i]);
    }
}

for (i = 0; i < array.length; i++){
    if ( i % 2 == 0){
    console.log(array[i])
}
}
for (i = 0; i < array.length; i++) {
  if (!(array[i] % 2 == 0)) {
    console.log(array[i]);
  }
}*/


/*let array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];
let max = array[0];
for(let i = 1; i < array.length; i++){
    if (array[i] > max){
        max = array[i];
    }
    
}
console.log(max);*/


/*let array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];
let min = array[0];
for(let i = 1; i < array.length; i++){
    if (array[i] < min){
        min = array[i];
    }
console.log(min);*/


/*let array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];

let moyenne = array[0]
for (let i = 1; i < array.length; i++){
    moyenne = (moyenne + array[i] / array.length);
}
console.log(moyenne);*/


/*let array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];
let array2 = [-1, 12, 17, 14, 5, -9, 0, 18, -6, 0, 4, -13, 5, 7, -2, 8, -1];
let somme = array[0];
let somme2 = array2[0];

for (let i = 1; i < array.length; i++){
    somme = somme +array[i];   
}console.log(somme);

for (let j = 1; j < array2.length; j++){
    somme2 = somme2 +array2[j];   
}console.log(somme2);

let arraySomme = [somme + somme2];
console.log(arraySomme);*/

//incomprehension de l'énoncé donc choix 1 en haut choix 2 en bas

/*let array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];
let array2 = [-1, 12, 17, 14, 5, -9, 0, 18, -6, 0, 4, -13, 5, 7, -2, 8, -1];
let arraySomme=[];

for(i = 0; i < array.length; i++){
    arraySomme[i] = array[i] + array2[i];
}console.log(arraySomme);*/


/*let array = [1, 15, -3, 8, 7, 4, -2, 28, -1, 17, 2, 3, 0, 14, -4];
let array2 = [-1, 12, 17, 14, 5, -9, 0, 18];
let longueur1 = array.length;
let longueur2 = array2.length;
let longueurMax = longueur1 > longueur2 ? longueur1 : longueur2;
let arraySommeDiff = [];
for (let i = 0; i < longueurMax; i++) {
    const somme = (array[i] || 0) + (array2[i] || 0);
    arraySommeDiff[i] = somme;
  }

console.log(arraySommeDiff);*/


/*let array1 = [1, 15, -3, 8, 7, 4, -2, 28, -1, 17, 2, 3, 0, 14, -4] ;
let array2 = [3, -8, 17, 5, -1, 4, 0, 6, 2, 11, -5, -4, 8] ;
let comparaisonTableau = 0;
for(let i = 0; i < array1.length; i++){
    for(let j= 0; j < array2.length; j++){
        if(array1[i] === array2[j]){
            comparaisonTableau = comparaisonTableau + 1;
        }
    }
}
console.log(comparaisonTableau);*/


/*let firstLast6 =[6, 15, 6, 8, 7, 4, -2, 28, -1, 17, 2, 3, 0, 14, 2];
let booleanValue ;
let longueur = firstLast6.length - 1;
for (let i = 0; i < firstLast6.length; i++){
    if (( firstLast6.length > 0 ) && (firstLast6[0] === 6 || firstLast6[longueur] === 6)){
        booleanValue = true;
} else {
    booleanValue = false;
    
}
}console.log(booleanValue);*/


/*let firstLast = [7, 15, -3, 8, 7, 4, -2, 28, -1, 17, 2, 3, 0, 14, 5];
let booleanValue;
for(let i = 0; i < firstLast.length; i++){
    if((firstLast.length >= 1) && (firstLast[0] === firstLast[firstLast.length - 1])){
        booleanValue = true;
    } else {
        booleanValue = false;
    }
} console.log(booleanValue);*/


/*let array = [2 , 6 , 9 , 22];
let rotation = array[array.length - 1];

for(let i= array.length - 1 ; i > 0; i--){  ; 
array[i] = array[i - 1];
} 

array[0] = rotation;
console.log(array);*/

/*let variableDonnées = 5;
if (variableDonnées < 1 || variableDonnées > 10){
    throw new Error("Il faut que la valeur données soit entre 1 et 10 !")
}
for (let i = 1; i <= 10; i++){
    let resultat = variableDonnées * i
    console.log(`${variableDonnées} * ${i} = ${resultat}`)
}*/






//TP 03-Progressif TABLEAUX, BOUCLES ET CONDITIONS

/*const nom="anthony";

for (i = 0; i<10;  i++){
    console.log(nom);
}

for( i = 1; i <= 10; i++){
    console.log(i);


for( i = 1; i <= 10; i++){
    if (i % 2 == 0) {
    console.log(i);
    }
}

let array=[1,15,-3,0,8,7,4,-2,28,7,-1,17,2,3,0,14,-4];
for (i = 0 ; i <= 16 ; i++ ){
   console.log(array[i]);
}

let array=[1,15,-3,0,8,7,4,-2,28,7,-1,17,2,3,0,14,-4];
for (i = 0 ; i <= 16 ; i++ ){
    if (array[i] % 2 == 0){
   console.log(array[i]);
    }
}*/

/*let n = 10;
let array= []
if(n <= 0 ){
    array;
} else if ( n === 1){
    array = [0];
} else if (n === 2){
    array = [0 , 1];
} else {
    array = [0, 1];
    for (i = 2; i < n; i++){
        array[i] = array[i -1] + array[i - 2];
    }
    console.log(array);
}*/