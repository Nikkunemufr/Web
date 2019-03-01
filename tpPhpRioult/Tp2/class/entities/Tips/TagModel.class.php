<?php

class TagModel {

    private $id = -1;
    private $intitule = "";

    function __construct($id, $intitule) {
        $this->id = $id;
        $this->intitule = $intitule;

    }

    public static function initialize($data = array()) {
        // time to do security verification
        //var_dump($data);
        $id = $data["id"];
        $intitule = $data["intitule"];
        
        return new TagModel($id, $intitule);
    }

    function getId() {
        return $this->id;
    }

    function getIntitule() {
        return $this->intitule;
    }

    function setId($id) {
        $this->id = $id;
    }

    function setIntitule($intitule) {
        $this->intitule = $intitule;
    }

}
