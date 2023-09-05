<!doctype html>
<html lang="fr">
  <link rel="stylesheet" href="MiseEnForme.css" type="text/css">
   <head><meta charset="utf-8" />
   <title> Liste des Tournois </title>
   </head>
   
   <body>
     <h1> Liste des Tournois </h1>
     <?php
       ini_set('display_errors', 1); error_reporting(E_ALL);
       try {
         $dsn = 'mysql:host=localhost;dbname=sports;charset=UTF8';
         $login = 'root';  // à délocaliser dans un fichier
         $password = '';  // à délocaliser dans un fichier 
         $dbh = new PDO($dsn, $login, $password);
       } catch (PDOException $e) {
         print "Impossible d'ouvrir la base de données : " . $e->getMessage() . "<br/>";
         die("On arrête tout !");
       }
	   
       $req = "SELECT * from Tournoi;";
       $res = $dbh->query($req);

       echo "<table>";
       echo "<tr><td>" . 'id_tournoi' . "</td><td>" . 'nomTournoi' . "</td><td>" . 'dateDebut' . "</td><td>" . 'duree' . "</td><td>" . 'lieu'. "</td><td>" . 'nbEquipe'. "</td><td>" . 'type' . "</td></tr>";
       foreach ($res as $enr) {
  	      echo "<tr><td>" . $enr['id_tournoi']. "</td><td>" .$enr['nomTournoi']. "</td><td>" .$enr['dateDebut']. "</td><td>" .$enr['duree']. "</td><td>" .$enr['lieu']. "</td><td>" .$enr['nbEquipe']. "</td><td>" .$enr['type']. "</td></tr>";
       } 
       echo "</table>";
       
  ?>
  </body>
  </html>
