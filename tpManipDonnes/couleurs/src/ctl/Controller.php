<?php

/*** Contrôleur du site des couleurs. ***/

/* Inclusion des classes nécessaires */
require_once("model/Color.php");
require_once("model/ColorStorage.php");
require_once("model/ColorBuilder.php");
require_once("view/MainView.php");


class Controller {

	protected $v;
	protected $colordb;

	public function __construct(MainView $view, ColorStorage $colordb) {
		$this->v = $view;
		$this->colordb = $colordb;
	}

	public function colorPage($id) {
		/* Une couleur est demandée, on la récupère en BD */
		$color = $this->colordb->read($id);
		if ($color === null) {
			/* La couleur n'existe pas en BD */
			$this->v->makeUnknownColorPage();
		} else {
			/* La couleur existe, on prépare la page */
			$this->v->makeColorPage($id, $color);
		}
	}

	public function allColorsPage() {
		$colors = $this->colordb->readAll();
		$this->v->makeGalleryPage($colors);
	}

	public function newColor() {
		/* Affichage du formulaire de création
		* avec les données par défaut. */
		$cf = new ColorBuilder();
		$this->v->makeColorCreationPage($cf);
	}

	public function saveNewColor(array $data) {
		$cf = new ColorBuilder($data);
		if ($cf->isValid()) {
			/* On construit la nouvelle couleur */
			$color = $cf->createColor();
			/* On l'ajoute en BD */
			$colorId = $this->colordb->create($color);
			/* On prépare la page de la nouvelle couleur */
			$this->v->makeColorPage($colorId, $color);
		} else {
			$this->v->makeColorCreationPage($cf);
		}
	}

	public function deleteColor($colorId) {
		/* On récupère la couleur en BD */
		$color = $this->colordb->read($colorId);
		if ($color === null) {
			/* La couleur n'existe pas en BD */
			$this->v->makeUnknownColorPage();
		} else {
			/* La couleur existe, on prépare la page */
			$this->v->makeColorDeletionPage($colorId, $color);
		}
	}

	public function confirmColorDeletion($colorId) {
		/* L'utilisateur confirme vouloir supprimer
		* la couleur. On essaie. */
		$ok = $this->colordb->delete($colorId);
		if (!$ok) {
			/* La couleur n'existe pas en BD */
			$this->v->makeUnknownColorPage();
		} else {
			/* Tout s'est bien passé */
			$this->v->makeColorDeletedPage();
		}
	}

	public function modifyColor($colorId) {
		/* On récupère en BD la couleur à modifier */
		$c = $this->colordb->read($colorId);
		if ($c === null) {
			$this->v->makeUnknownColorPage();
		} else {
			/* Extraction des données modifiables */
			$cf = ColorBuilder::buildFromColor($c);
			/* Préparation de la page de formulaire */
			$this->v->makeColorModifPage($colorId, $cf);
		}
	}

	public function saveColorModifications($colorId, array $data) {
		/* On récupère en BD la couleur à modifier */
		$color = $this->colordb->read($colorId);
		if ($color === null) {
			/* La couleur n'existe pas en BD */
			$this->v->makeUnknownColorPage();
		} else {
			$cf = new ColorBuilder($data);
			/* Validation des données */
			if ($cf->isValid()) {
				/* Modification de la couleur */
				$cf->updateColor($color);
				/* On essaie de mettre à jour en BD.
				* Normalement ça devrait marcher (on vient de
				* récupérer la couleur). */
				$ok = $this->colordb->update($colorId, $color);
				if (!$ok)
					throw new Exception("Identifier has disappeared?!");
				/* Préparation de la page de la couleur */
				$this->v->makeColorPage($colorId, $color);
			} else {
				$this->v->makeColorModifPage($colorId, $data, $errors);
			}
		}
	}

}

?>
