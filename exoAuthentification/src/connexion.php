<?php
session_start();
require_once("comptes.php");

$should_include_the_thing = true;
if((key_exists("nom",$_POST)) && (key_exists("mdp",$_POST))){
  $login = $_POST["nom"];
  $inscrit = "";
  foreach ($comptes as $compte) {
    if($compte["login"] === $login){
      $inscrit = $compte;
      break;
    }
  }
  if($inscrit !== ""){
    if(password_verify($_POST['mdp'],$inscrit["password"])){
      $_SESSION["user"] = $inscrit;
      header("Location: index.php");
    }else{
      echo "Mot de passe incorrect";
    }
  }

}else if(key_exists("user",$_SESSION)){
  if(key_exists("deconnexion",$_GET)){
      unset($_SESSION["user"]);
  } else {
      echo "<h1> Bienvenue ".$_SESSION["user"]["name"]."</h1>";
      echo "<form action=\"connexion.php\"><button name=\"deconnexion\" type=\"submit\" >Deconnexion</button></form>";
      $should_include_the_thing = false;
  }
}

if($should_include_the_thing) {
  include("connexion.html");
}

?>
