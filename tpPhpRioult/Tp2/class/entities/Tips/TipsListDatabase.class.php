<?php

require_once './class/tools/SqlTool.class.php';
require_once 'TipsListModel.class.php';

/**

  create table tips (id int, langage varchar(20), content varchar(250), primary key(id));
  \copy tips FROM 'tips.csv' WITH DELIMITER ','

 */
abstract class TipsListDatabase {

    public static function get(){
        
    }
}

class TipsListSQL extends TipsListDatabase {
 
    public static function get() {
        $connexion = SqlTool::getInstance()->getConnexion();
        $query = $connexion->prepare("SELECT * FROM tips");
        $query->execute();

        return TipsListModel::initialize($query->fetchall());
    }

}
