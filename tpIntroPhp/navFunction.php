<?php
	$tab = array(
				"Google" => "http://google.fr",
				"Wikipedia" => "http://wikipedia.org"
	);
	function generateNav($tab){
		print("<nav><ul>");
				foreach($tab as $key => $value){
					print ("<li><a href=$value>$key</a></li>");
				}
		print("</ul></nav>");
	}
	
	generateNav($tab);
?>

