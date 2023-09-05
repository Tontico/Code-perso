
<?php

//1)
/*. pour concaterner une chaine de caractère
$prenom = 'Marc';
$nom = 'Doe';
$note1 = 10;
$note2 = 20;
$moyenne = ($note1+$note2)/2;
echo 'Bonjour' .$prenom .''. $nom . ' vous avez eu ' . $moyenne. 'de moyenne';
echo "\nBonjour $prenom $nom vous avez eu $moyenne de moyenne";*/

//2)
/*$eleve  =[  
            'nom' => 'Doe', 
            'prenom' => 'Marc',
            'notes' => [10,20,15]
];
$eleve ['prenom'] = 'Jean';
$eleve ['notes'][3] = 16;
//$notes = [10 , 20 , 10 , 9 , 8]; 
//$notes = array (10 , 20); // même notation que tab
print_r( $eleve ['notes']);

$classe = [
    [

    'nom' => 'Doe',
    'prenom' => 'Jean',
    'notes' =>  [16 , 16 ,16]

    ],

    [
        
    'nom' => 'Doe',
    'prenom' => 'Jane',
    'notes' => [12 , 15 , 17 ]
    
    ]
];
//on recupère la 2eme note du 2eme élève
echo $classe [1]['notes'][1];*/

//3)
/* $heure = (int)readline ('Entre votre heure '); // readline permet de entrez une valeur dans le terminal
if ((9 > $heure || $heure > 12) && (14 > $heure || $heure > 17)) {
    echo 'le magasin sera ouvert';
} else {
    echo 'le magasin sera fermé';
}

*/
/*int permet de convertir la chaine de caract en int
$action = (int)readline ('Entre votre action : (1: ataquer, 2: défendre, 3: passer mon tour  '); // readline permet de entrez une valeur dans le terminal
switch ($action) {
    case 1:
        echo 'jattaque';
        break;
    case 2:
        echo 'je defends';
        break;
    case 3:
        echo 'je ne fait rien';
        break;
         default:
        echo 'commande inconnue';
}*/

//4)
/*$chiffre = null;

 while ($chiffre !== 10) {
    $chiffre = (int)readline('Entrez une valeur :');
}
echo 'bravo vous avez gagné!';

for ($i = 0; $i <10; i++) {
    echo "- $i \n";
} 
$notes = array (10,15,16);
for ($i = 0; $i < 3; $i++) {
    echo '-' . $notes[$i];
}*/
$notes = array (10,15,20);

// $notes est la variable que l'on veut itérer et on créer une var $note qui contiendras chaque valeur
//Pour chaques notes dans la var note
foreach ( $notes as $note) {
    echo "- $note \n";
}