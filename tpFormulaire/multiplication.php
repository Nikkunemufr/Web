<?php

function table($max) {
	echo '<table>';
	$cellColor = "";
	for ($i=1; $i <= $max; $i++) {
		echo '<tr>';
		
		for ($j=1; $j <= $max; $j++) {
			if (($i+$j)%2==0){
				$cellColor = "green";
			} else {
				$cellColor = "blue";
			}
			echo '<td bgcolor='.$cellColor.'>'. $i*$j .'</td>';
			
		}
		echo '</tr>';
	}
	echo '</table>';
	echo '<a href="main.php?borne=1">Plus petite table</a></br>';
	echo '<a href="main.php?borne=100">Plus grande table </a>';
	}
	
?>
