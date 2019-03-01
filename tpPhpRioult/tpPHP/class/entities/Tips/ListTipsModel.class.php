<?php

require_once 'TipsModel.class.php';

class ListTips {
	
	private $tab = array();

    function __construct($tab) {
        $this->tab = $tab;
    }

    public static function initialize($data = array()) {
        // time to do security verification
        //var_dump($data);
        $tab = array();
        foreach($data as $tips){
			$tab[] = Tips::initialize($tips);
		}
        return new ListTips($tab);
    }
    
    public function getList(){
		return $this->tab;
	}
}
