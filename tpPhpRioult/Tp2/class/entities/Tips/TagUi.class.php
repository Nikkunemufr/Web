<?php

class TagUi {

    protected $tag;

    public function __construct(TagModel $tag) {
        $this->tag = $tag;
    }

    public function toHtml() {
        return "<div><a href=\"?q=view/tips/" . $this->tag->getId() . "\">" . 
         //"<div>" . $this->tag->getLangage() . "</div>" .
        "<div margin=\"10px\">" . $this->tag->getIntitule() . "</div></a></div";
    }

}
