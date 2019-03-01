<?php

require_once './class/tools/SqlTool.class.php';
require_once 'TagModel.class.php';

/**

  create table tips (id int, langage varchar(20), content varchar(250), primary key(id));
  \copy tips FROM 'tips.csv' WITH DELIMITER ','

 */
abstract class TagDatabase {

    public static function get($id){
        
    }
}

class TagSQL extends TagDatabase {
 
    public static function get($id) {
        $connexion = SqlTool::getInstance()->getConnexion();
        $query = $connexion->prepare("SELECT * FROM tags WHERE id=:id");
        $data=array('id' => $id);
        $query->execute($data);
        
        $ligne = $query->fetch(PDO::FETCH_ASSOC);
        return TagModel::initialize($ligne);
    }

}
