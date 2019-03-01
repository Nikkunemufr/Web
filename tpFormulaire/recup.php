<?php
$name = "";

if (!empty($_POST['name'])) {
	$name = $_POST['name'];
} else {
	$name = "Mouloude";
}

 echo "<style>body{background-color:".$_POST['color'].";}</style>"
 ."Salut ".$_POST['name']." j'ai vu que tu savais parler ";
 
if (!empty($_POST['langue'])) {
	foreach($_POST['langue'] as $valeur){
		echo $valeur." ";
	}
}
?>
