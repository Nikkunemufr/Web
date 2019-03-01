<?php

require_once 'TipsUi.class.php';

class ListTipsUi {

    protected $listTips;

    public function __construct(ListTips $listTips) {
        $this->listTips = $listTips;
    }

    public function toHtml() {
		$return = "";
		foreach ($this->listTips->getList() as $tips){
			$tipsUi = new TipsUi($tips);
			$return .= $tipsUi->toHtml();
		}
        return $return;
    }

}
