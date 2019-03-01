<?php

class TipsUi {

    protected $tips;

    public function __construct(Tips $tips) {
        $this->tips = $tips;
    }

    public function toHtml() {
        return 
        "<div><a href=\"?q=view/tips/" . $this->tips->getId() . "\">" . 
        "<div margin=\"10px\">" . $this->tips->getLangage() . " | " . $this->tips->getContent() . "</div></a></div";
    }

}
