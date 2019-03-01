<?php

require_once './class/tools/SqlTool.class.php';
require_once 'ListTipsModel.class.php';


/**

  create table tips (id int, langage varchar(20), content varchar(250), primary key(id));
  \copy tips FROM 'tips.csv' WITH DELIMITER ','

 */
abstract class ListTipsDatabase {

    public static function get(){
        
    }
}

class ListTipsSQL extends ListTipsDatabase {
 
    public static function get() {
        $connexion = SqlTool::getInstance()->getConnexion();
        $query = $connexion->prepare("SELECT * FROM tips");
        $query->execute();
        
        $tab = $query->fetchAll();
        //var_dump($tab);
        return ListTips::initialize($tab);
    }

}
