<?php

require_once("Router.php");

class View {
	private $title;
	private $content;
	private $router;

	function __construct(Router $router) {
		$this->title = "titre";
		$this->content = "content";
		$this->router = $router;

	}
	
	function render() {
		echo "
		<!DOCTYPE html>
		<html>
			<head>
				<meta charset='UTF-8' />
				<title>$this->title</title>
			</head>
			<body>
				<p>$this->content</p>
			</body>
		</html>";	
	}
	
	public function makeDebugPage($variable) {
		$this->title = 'Debug';
		$this->content = '<pre>'.var_export($variable, true).'</pre>';
	}

	function makeTestPage() {
		$this->title = "Mon titre trop cool";
		$this->content = "Mon content trop cool";
	}
	
	function makeAnimalPage(Animal $animal) {
		$this->title = "Ma page sur ". $animal->getNom();
		$this->content = $animal->getNom() . " est un animal de l'espece " . $animal->getEspece() . " et il à " . $animal->getAge() . " ans";
	}
	
	function makeUnknownAnimalPage() {
		$this->title = "Erreur 404";
		$this->content = "Identifiant invalide";
	}
	
	function makeAnimalCreationPage() {
		$this->title = "Creation animal";
		$this->content = '<form action='.$this->router->getAnimalSaveURL(). 'method="post">
			<div>
				<label for="name">Nom animal :</label>
				<input type="text" name="name">
				<label for="species">Espece animal :</label>
				<input type="text" name="species">
				<label for="age">Age animal</label>
				<input type="text" name="age">
				<input type="submit" value="Envoyer">
			</div>
		</form>';
	}
	
	function makeListPage($listAnimal) {
		$this->title = "Liste animal";
		$this->content = "";
		
		foreach ($listAnimal as $index => $valeur) {
			$this->content .= "<a href=".$this->router->getAnimalURL($index).">".$valeur->getNom(). " </a>";
		}
	}
}

?>
