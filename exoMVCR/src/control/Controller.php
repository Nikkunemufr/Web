<?php
set_include_path("./src");
require_once("view/View.php");
require_once("model/Animal.php");

class Controller {
	private $view;
	private $storage;
	
	public function __construct(View $view, AnimalStorage $storage) {
		$this->view = $view;
		$this->storage = $storage;
	}

	public function showInformation($id) {
		if($this->storage->read($id)!= null){
			$this->view->makeAnimalPage($this->storage->read($id));
		} else {
			$this->view->makeUnknownAnimalPage();
		}
	}
	
	public function showList() {
		$this->view->makeListPage($this->storage->readAll());
	}
	
	public function saveNewAnimal(array $data) {
		$this->view->makeDebugPage($data);
	}
}

?>
