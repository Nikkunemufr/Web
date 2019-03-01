<?php
set_include_path("./src");
require_once("model/AnimalStorage.php");

class AnimalStorageStub implements AnimalStorage {
	
	private $animalsTab;

	public function __construct() {
		$this->animalsTab = array(
		'medor' => new Animal('Médor', 'chien','5'),
		'felix' => new Animal('Félix', 'chat','9'),
		'denver' => new Animal('Denver', 'dinosaure','140'),
		);
	}
	
	public function read($id) {
		if(array_key_exists($id, $this->animalsTab)){
			return $this->animalsTab[$id];
		} else {
			return null;
		}
	}
	
	public function readAll() {
		return $this->animalsTab;
	}
}

?>
