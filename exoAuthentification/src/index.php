<?php
session_start();
$name = "";
if(key_exists("user",$_SESSION)){
  $name = $_SESSION["user"]["name"];
}
 ?>

<!DOCTYPE html>
<html lang="fr">
<head>
  <title>Titre</title>
</head>
<body>
<h1><?php echo $name; ?></h1>
<p>Vous êtes sur la page d'accueil.</p>
<ul>
  <li><a href="connexion.php">Page de connexion/deconnexion</a></li>
  <li><a href="admin.php">Partie admin</a></li>
</ul>
</body>
</html>
