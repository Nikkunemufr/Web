<?php
	$tab = array(
				"Google" => "http://google.fr",
				"Wikipedia" => "http://wikipedia.org"
			);
	
?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8" />
	<title>Hello World en PHP</title>
</head>
<body>
	<nav>
		<ul>
			<?php
				foreach($tab as $key => $value){
					print ("<li><a href=$value>$key</a></li>");
				}
			?>
		</ul>
	</nav>
</body>
</html>
