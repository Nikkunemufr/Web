<?php
include("multiplication.php");
	if (!isset($_GET["borne"])) {
			table(10);
		} else {
			$query = explode('/', $_GET["borne"]);
			if ($query[0] == null){
				table(15);
			} else if ($query[0]>=1 && $query[0]<=100) {
				table($query[0]);
			} else {
				table(1);
			}
		}
		

?>
