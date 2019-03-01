<?php
	setcookie('date', date("d-m-Y"), time() + 30); 
	setcookie('heure', date("H:i:s"), time() + 30);
	echo "Nous somme le " . date("d-m-Y") . " à " . date("H:i:s") . "<br />";
	if (key_exists('date', $_COOKIE) && key_exists('heure', $_COOKIE))
  		echo "Votre derniere visite remonte au " . htmlspecialchars($_COOKIE['date']) . " à " . htmlspecialchars($_COOKIE['heure']) ;
	 

?>
