<?php
	session_start();
	
	// teste si l’internaute est connu ou non
	if (!key_exists("nbVisite", $_SESSION) ||
	    !key_exists("heure", $_SESSION)) {
	  echo "Premiere connexion";
	  $_SESSION["heure"] = date("H:i:s");
	  $_SESSION["nbVisite"] = 1;
	} else {
	  echo "<p>" ."Vous avez visité cette page " . $_SESSION["nbVisite"] . " fois" . " depuis " . $_SESSION["heure"] ."</p>";
	  $_SESSION["nbVisite"] = $_SESSION["nbVisite"] + 1;
	  
	}
	echo '<button type="submit" onclick='. '<?php' . $_SESSION["nbVisite"] = 0 . '>Remise à Zero</button>';
?>
