<?php

	$tab = array();
	for($i = 0 ; $i<= 100; $i++){
		$tab[] = 3*$i+2;
	}
	
	foreach ($tab as $value){
		echo $value.'<br/>';
	}
	
	function moyenne($tab){
		$moyenne = 0;
		foreach($tab as $value){
			$moyenne += $value;
		}
		$moyenne = $moyenne / sizeof($tab);
		
		return $moyenne;
	}
	
	echo "moyenne = ".moyenne($tab);
?>
