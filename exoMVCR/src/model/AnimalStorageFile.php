<?php

require_once("lib/ObjectFileDB.php");
require_once("model/Animal.php");
require_once("model/AnimalStorage.php");




/*
 * Gère le stockage d'animaux dans un fichier.
 * Plus simple que l'utilisation d'une base de données,
 * car notre application est très simple.
 */

class AnimalStorageFile implements AnimalStorage {

    /* le ObjectFileDB dans lequel l'instance est enregistrée */
    private $db;

    /* Construit une nouvelle instance, qui utilise le fichier donné
     * en paramètre. */
    public function __construct($file) {
        $this->db = new ObjectFileDB($file);
    }

    /* Insère un nouvel animal dans la base. Renvoie l'identifiant
     * du nouvel animal. */
    public function create(Animal $a) {
        return $this->db->insert($a);
    }

    public function reinit() {
        deleteAll();
        create(new Animal('Médor', 'chien','5'));
        create(new Animal('Félix', 'chat','9'));
        create(new Animal('Denver', 'dinosaure','140'));
    }

    /* Renvoie l'animal d'identifiant $id, ou null
     * si l'identifiant ne correspond à aucun Animal. */
    public function read($id) {
        if ($this->db->exists($id)) {
            return $this->db->fetch($id);
        } else {
            return null;
        }
    }

    /* Renvoie un tableau associatif id => Animal
     * contenant tout les animaux de la base. */
    public function readAll() {
        return $this->db->fetchAll();
    }

    /* Met à jour un animal dans la base. Renvoie
     * true si la modification a été effectuée, false
     * si l'identifiant ne correspond à aucun animal. */
    public function update($id, Animal $a) {
        if ($this->db->exists($id)) {
            $this->db->update($id, $a);
            return true;
        }
        return false;
    }

    /* Supprime un animal. Renvoie
     * true si la suppression a été effectuée, false
     * si l'identifiant ne correspond à aucun animal. */
    public function delete($id) {
        if ($this->db->exists($id)) {
            $this->db->delete($id);
            return true;
        }
        return false;
    }

    /* Vide la base. */
    public function deleteAll() {
        $this->db->deleteAll();
    }
}

?>