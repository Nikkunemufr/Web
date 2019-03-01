<?php

require_once './class/tools/SqlTool.class.php';
require_once 'TipsModel.class.php';

/**

  create table tips (id int, langage varchar(20), content varchar(250), primary key(id));
  \copy tips FROM 'tips.csv' WITH DELIMITER ','

 */
abstract class TipsDatabase {

    public static function get($id){
        
    }
}

class TipsSQL extends TipsDatabase {
 
    public static function get($id) {
        $connexion = SqlTool::getInstance()->getConnexion();
        $query = $connexion->prepare("SELECT * FROM tips WHERE id=:id");
        $data=array('id' => $id);
        $query->execute($data);
        
        $ligne = $query->fetch(PDO::FETCH_ASSOC);
        return Tips::initialize($ligne);
    }

}
