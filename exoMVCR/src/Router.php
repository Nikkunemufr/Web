<?php 
set_include_path("./src");
require_once("control/Controller.php");
require_once("model/AnimalStorage.php");

class Router {

    function main(AnimalStorage $storage) {
		
		$view = new View($this);
		
		if (!isset($_GET["id"])) {
			$view->makeTestPage();
		} else {
			$query = explode('/', $_GET["id"]);	
			$control = new Controller($view,$storage);
			$control->showInformation($query[0]);	
		}
		
		if (isset($_GET["liste"])) {
			$control = new Controller($view,$storage);
			$control->showList();	
		}
		
		if (isset($_GET["action"])) {
			$query = explode('/', $_GET["action"]);	
			$control = new Controller($view,$storage);
			try {
				switch ($query[0]) {
					case "action":
						$view->makeAnimalCreationPage();
						break;
					case "nouveau":
						$control->saveNewAnimal($_POST);
						break;
					default:
						/* L'internaute a demandé une action non prévue. */
						$view->makeTestPage();
						break;
				}
			} catch (Exception $e) {
				/* Si on arrive ici, il s'est passé quelque chose d'imprévu
				 * (par exemple un problème de base de données) */
				$view->makeTestPage();
			}
		}

		$view->render();
    }
    
    function getAnimalURL($id) {
		$url = 'http://'.$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI'];
		$urlGet = explode("?",$url);
		$urlSansLeGet = $urlGet[0];
		return $urlSansLeGet.'/'."?id=".$id;
	}
	
	function getAnimalCreationURL() {
		$url = 'http://'.$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI'];
		$urlGet = explode("?",$url);
		$urlSansLeGet = $urlGet[0];
		return $urlSansLeGet.'/'."?action=nouveau";
	}
	
	function getAnimalSaveURL() {
		$url = 'http://'.$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI'];
		$urlGet = explode("?",$url);
		$urlSansLeGet = $urlGet[0];
		return $urlSansLeGet.'/'."action=sauverNouveau";
	}
}

?>
