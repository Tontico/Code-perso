-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Client :  127.0.0.1
-- Généré le :  Mer 31 Mars 2021 à 15:25
-- Version du serveur :  5.6.17
-- Version de PHP :  5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données :  `sports`
--

-- --------------------------------------------------------

--
-- Structure de la table `equipe`
--

CREATE TABLE IF NOT EXISTS `equipe` (
  `id_equipe` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nomEquipe` varchar(30) DEFAULT NULL,
  `niveau` tinyint(4) DEFAULT NULL,
  `adresseMail` varchar(50) DEFAULT NULL,
  `numeroTel` int(11) DEFAULT NULL,
  `idCapitaine` smallint(6) DEFAULT NULL,
  `sport` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`id_equipe`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=9 ;

--
-- Contenu de la table `equipe`
--

INSERT INTO `equipe` (`id_equipe`, `nomEquipe`, `niveau`, `adresseMail`, `numeroTel`, `idCapitaine`, `sport`) VALUES
(1, 'GunnersFc', 2, 'Gunnersfc@hotmail.fr', 606033685, NULL, '2'),
(2, 'La Drink Team', 1, 'boisson.lol@gmail.fr', 698566335, NULL, '1'),
(3, 'Fnatic ', 3, 'fnatic@orange.fr', 648249568, NULL, '4'),
(4, 'BallSquad', 2, 'baller.blancnoir@gmail.com', 609087895, NULL, '7'),
(5, 'FC Pantoufles', 4, 'pantoufle.savate@live.fr', 603366558, NULL, '5'),
(6, 'TeamPanda', 4, 'panda.blancnoir@gmail.com', 789945886, NULL, '0'),
(7, 'Cacabouda', 6, 'cacabouda@gmail.com', 634892349, 3, '3'),
(8, 'Equipe', 3, 'adresse.mail@mail.fr', 678549382, 3, '5');

-- --------------------------------------------------------

--
-- Structure de la table `listeequipe`
--

CREATE TABLE IF NOT EXISTS `listeequipe` (
  `idListeEquipe` int(11) NOT NULL AUTO_INCREMENT,
  `idMatch` int(11) DEFAULT NULL,
  `idEquipe` int(11) DEFAULT NULL,
  `score` smallint(6) DEFAULT NULL,
  PRIMARY KEY (`idListeEquipe`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Structure de la table `listegestionnaire`
--

CREATE TABLE IF NOT EXISTS `listegestionnaire` (
  `idGestionnaire` int(11) NOT NULL AUTO_INCREMENT,
  `idUtilisateur` int(11) DEFAULT NULL,
  `idTournoi` int(11) DEFAULT NULL,
  PRIMARY KEY (`idGestionnaire`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Structure de la table `membreequipe`
--

CREATE TABLE IF NOT EXISTS `membreequipe` (
  `idMembreEquipe` int(11) NOT NULL AUTO_INCREMENT,
  `idUtilisateur` int(11) DEFAULT NULL,
  `idEquipe` int(11) DEFAULT NULL,
  PRIMARY KEY (`idMembreEquipe`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=7 ;

--
-- Contenu de la table `membreequipe`
--

INSERT INTO `membreequipe` (`idMembreEquipe`, `idUtilisateur`, `idEquipe`) VALUES
(1, 1, 1),
(2, 1, 3),
(3, 5, 4),
(4, 8, 6),
(5, 2, 2),
(6, 10, 4);

-- --------------------------------------------------------

--
-- Structure de la table `participequipe`
--

CREATE TABLE IF NOT EXISTS `participequipe` (
  `idParticipEquipe` int(11) NOT NULL AUTO_INCREMENT,
  `idEquipe` int(11) DEFAULT NULL,
  `idTounoi` int(11) DEFAULT NULL,
  PRIMARY KEY (`idParticipEquipe`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

--
-- Contenu de la table `participequipe`
--

INSERT INTO `participequipe` (`idParticipEquipe`, `idEquipe`, `idTounoi`) VALUES
(1, 1, 2);

-- --------------------------------------------------------

--
-- Structure de la table `participmatch`
--

CREATE TABLE IF NOT EXISTS `participmatch` (
  `idPartcipMatch` int(11) NOT NULL AUTO_INCREMENT,
  `idMatch` int(11) DEFAULT NULL,
  `idTournoi` int(11) DEFAULT NULL,
  PRIMARY KEY (`idPartcipMatch`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=3 ;

--
-- Contenu de la table `participmatch`
--

INSERT INTO `participmatch` (`idPartcipMatch`, `idMatch`, `idTournoi`) VALUES
(1, 2, 1),
(2, 1, 2);

-- --------------------------------------------------------

--
-- Structure de la table `rencontre`
--

CREATE TABLE IF NOT EXISTS `rencontre` (
  `id_match` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `dateHoraire` datetime DEFAULT NULL,
  `idGagnant` int(11) DEFAULT NULL,
  `poule` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`id_match`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=8 ;

--
-- Contenu de la table `rencontre`
--

INSERT INTO `rencontre` (`id_match`, `dateHoraire`, `idGagnant`, `poule`) VALUES
(1, '2021-06-11 15:00:00', 2, 6),
(2, '2021-05-04 16:15:00', 5, 3),
(3, '2021-07-01 17:45:00', 18, 1),
(4, '2021-11-30 12:30:00', 22, 5),
(5, '2021-03-14 15:00:00', 12, 2),
(6, '2021-05-26 08:00:00', 9, 1),
(7, '2021-09-18 16:10:00', 11, 9);

-- --------------------------------------------------------

--
-- Structure de la table `role`
--

CREATE TABLE IF NOT EXISTS `role` (
  `id_role` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nomRole` enum('Administrateur','Gestionnaire','Joueur','Arbitre','Entraineur') DEFAULT NULL,
  PRIMARY KEY (`id_role`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=6 ;

--
-- Contenu de la table `role`
--

INSERT INTO `role` (`id_role`, `nomRole`) VALUES
(1, 'Administrateur'),
(2, 'Gestionnaire'),
(3, 'Joueur'),
(4, 'Arbitre'),
(5, 'Entraineur');

-- --------------------------------------------------------

--
-- Structure de la table `roleutilisateur`
--

CREATE TABLE IF NOT EXISTS `roleutilisateur` (
  `idUtilisateurRole` int(11) NOT NULL AUTO_INCREMENT,
  `idUtilisateur` int(11) DEFAULT NULL,
  `idRole` int(11) DEFAULT NULL,
  PRIMARY KEY (`idUtilisateurRole`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=19 ;

--
-- Contenu de la table `roleutilisateur`
--

INSERT INTO `roleutilisateur` (`idUtilisateurRole`, `idUtilisateur`, `idRole`) VALUES
(1, 1, 1),
(2, 1, 2),
(3, 3, 4),
(4, 3, 5),
(5, 2, 5),
(6, 10, 3),
(7, 6, 2),
(8, 8, 1),
(9, 6, 2),
(10, 7, 5),
(11, 7, 3),
(12, 3, 3),
(13, 10, 3),
(14, 1, 2),
(15, 6, 2),
(16, 5, 2),
(17, 11, 2),
(18, 8, 2);

-- --------------------------------------------------------

--
-- Structure de la table `sport`
--

CREATE TABLE IF NOT EXISTS `sport` (
  `id_sport` int(11) NOT NULL AUTO_INCREMENT,
  `nomSport` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`id_sport`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=11 ;

--
-- Contenu de la table `sport`
--

INSERT INTO `sport` (`id_sport`, `nomSport`) VALUES
(1, 'BasketBall'),
(2, 'FootBall'),
(4, 'HandBall'),
(5, 'VolleyBall'),
(6, 'Rugby'),
(7, 'Tennis'),
(8, 'Petanque'),
(9, 'Boxe Anglaise');

-- --------------------------------------------------------

--
-- Structure de la table `sportutilisateur`
--

CREATE TABLE IF NOT EXISTS `sportutilisateur` (
  `id_sportUtilisateur` int(11) NOT NULL AUTO_INCREMENT,
  `idSport` int(11) DEFAULT NULL,
  `idUtilisateur` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_sportUtilisateur`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=3 ;

--
-- Contenu de la table `sportutilisateur`
--

INSERT INTO `sportutilisateur` (`id_sportUtilisateur`, `idSport`, `idUtilisateur`) VALUES
(1, 4, 1),
(2, 6, 1);

-- --------------------------------------------------------

--
-- Structure de la table `tournoi`
--

CREATE TABLE IF NOT EXISTS `tournoi` (
  `id_tournoi` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nomTournoi` varchar(100) DEFAULT NULL,
  `dateDebut` date DEFAULT NULL,
  `duree` int(11) DEFAULT NULL,
  `lieu` varchar(30) DEFAULT NULL,
  `nbEquipe` tinyint(4) DEFAULT NULL,
  `type` enum('coupe','championnat','tournoiATour') NOT NULL,
  PRIMARY KEY (`id_tournoi`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=7 ;

--
-- Contenu de la table `tournoi`
--

INSERT INTO `tournoi` (`id_tournoi`, `nomTournoi`, `dateDebut`, `duree`, `lieu`, `nbEquipe`, `type`) VALUES
(1, 'Bidule', '2021-03-31', 3403, 'Paris', 12, 'coupe'),
(2, 'Loulou', '2020-09-07', 12, 'Amsterdamm', 23, 'coupe'),
(3, 'Coca', '2021-03-27', 16, 'Bali', 14, 'coupe'),
(4, 'WordChampionship', '2002-12-09', 21, 'Paris', 14, 'coupe'),
(5, 'Babouin', '2020-12-19', 34, 'New-York', 15, 'coupe'),
(6, 'Mon tournoi', '2021-03-28', 12, 'Montpellier-Stade de la Mosson', 20, 'championnat');

-- --------------------------------------------------------

--
-- Structure de la table `utilisateur`
--

CREATE TABLE IF NOT EXISTS `utilisateur` (
  `id_utilisateur` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `adresseMail` varchar(50) DEFAULT NULL,
  `nomUtilisateur` varchar(50) DEFAULT NULL,
  `prenomUtilisateur` varchar(50) DEFAULT NULL,
  `motDePasse` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`id_utilisateur`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=23 ;

--
-- Contenu de la table `utilisateur`
--

INSERT INTO `utilisateur` (`id_utilisateur`, `adresseMail`, `nomUtilisateur`, `prenomUtilisateur`, `motDePasse`) VALUES
(1, 'pompidor@lirm.fr', 'POMPIDOR', 'Pierre', 'motdepasse'),
(2, 'chocolat@gmail.com', 'BLANC', 'Chocolat', '1234'),
(3, 'tartiflette@yahoo.fr', 'COULANTE', 'Tartiflette', '4321'),
(4, 'mpatate@outlook.fr', 'PATATE', 'Monsieur', 'mdp'),
(5, 'martin.excalibur@lirmm.fr', 'EXCALIBUR', 'Martin', '0987'),
(6, 'merlin.enchanteur@coucou.fr', 'ENCHANTEUR', 'Merlin', '7890'),
(7, 'adel.dirf@etu.umontpellier.fr', 'DRIF', 'Adel', 'adeldrif'),
(8, 'wassim.mecheri@etu.umontpellier.fr', 'MECHERI', 'Wassim', 'jesuisdésolépourl''ortographe'),
(9, 'anthony.suraci@etu.umontpellier.fr', 'SURACI', 'Anthony', 'encoredésolé'),
(10, 'rayan.benyahia@etu.umontpellier.fr', 'BENYAHIA', 'Rayan', 'javouejairegardercommentcasecr'),
(11, 'gabrielle.pointeau@etu.umontpellier.fr', 'POINTEAU', 'Gabrielle', 'bonpourmooicava'),
(12, 'batman@gmail.com', 'BATMAN', 'Batman', 'batmanleseul'),
(13, 'charlotte.aufraise@outlook.fr', 'AU FRAISE', 'Charlotte', 'charlotte'),
(14, 'charlotte.batman@outlook.fr', 'BATMAN', 'Charlotte', 'batcharlotte'),
(15, 'ordianteur.fixe@outlook.fr', 'Ordinateur', 'Fixe', 'ordinateur'),
(16, 'chocolat.vanilla@outlook.fr', 'Chocolat', 'Vannilla', 'chocovani'),
(17, 'miss.vanilla@outlook.fr', 'miss', 'Vannilla', 'missvani'),
(18, 'mister.chocolat@outlook.fr', 'mister', 'Chocolat', 'misterchoco'),
(19, 'manger.savoyarde@gmail.com', 'Manger', 'Savoyarde', 'mangersavoyarde'),
(20, 'boire.picross@gamil.com', 'Boire', 'Picross', 'boirepicross'),
(21, 'lily.roma@gmail.com', 'Roma', 'Lily', 'lilyroma'),
(22, 'adresse.mail@mail.fr', 'mail', 'adresse', 'adressemail');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
