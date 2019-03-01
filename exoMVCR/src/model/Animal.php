<?php

class Animal{
	private $nom;
	private $espece;
	private $age;
	
	function __construct($nom, $espece, $age){
		$this->nom = $nom;
		$this->espece = $espece;
		$this->age = $age;
	}

	function getNom(){
		return $this->nom;
	}

	function getEspece(){
		return $this->espece;
	}

	function getAge(){
		return $this->age;
	}
}

?>
