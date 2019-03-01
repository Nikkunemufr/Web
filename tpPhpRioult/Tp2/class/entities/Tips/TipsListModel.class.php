<?php

require_once 'TipsModel.class.php';

class TipsListModel {

    protected $tipsList = array();

    function __construct($tipsList) {
        $this->tipsList = $tipsList;
    }

    public static function initialize($data) {
		
        $tipsList = array();
        foreach ($data as $id => $tipsData) {
            $tips = TipsModel::initialize($tipsData);
            $tipsList[] = $tips;
        }
	return new TipsListModel($tipsList);
    }
    function getTipsList() {
        return $this->tipsList;
    }

}
