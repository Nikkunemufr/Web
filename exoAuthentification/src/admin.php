<?php
session_start();
$status = "visiteur";
$nom = "";
if(key_exists("user",$_SESSION)){
  $status = $_SESSION["user"]["status"];
  if($status === "user"){
    $status = "utilisateur";
  }
  $nom = $_SESSION["user"]["name"];

}

?>

<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Admin</title>
  </head>
  <body>
    <h1><?php echo "Bonjour ".$nom; ?></h1>
    <p><?php echo  "Vous êtes ".$status;?></p>
    <ul>
      <li><a href="connexion.php">Page de connexion/deconnexion</a></li>
      <li><a href="index.php">Page d'accueil</a></li>
    </ul>
  </body>
</html>
