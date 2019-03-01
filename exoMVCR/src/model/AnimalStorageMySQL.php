<?php
set_include_path("./src");
require_once("model/AnimalStorage.php");

class AnimalStorageMySQL implements AnimalStorage {
	
	private $connexion;

	public function __construct($connexion) {
		$this->connexion = $connexion;
	}
	
	public function read($id) {
		$query = $this->connexion->prepare("SELECT * FROM animals WHERE id=:id");
        $data=array('id' => $id);
        $query->execute($data);
        
        $ligne = $query->fetch(PDO::FETCH_ASSOC);
        return new Animal($ligne['name'],$ligne['species'],$ligne['age']);
	}
	
	public function readAll() {
		return null;
	}
}

?>
