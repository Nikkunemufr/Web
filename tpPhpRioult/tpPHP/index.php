<?php

require_once './class/entities/Tips/ListTipsDatabase.class.php';
require_once './class/entities/Tips/ListTipsUi.class.php';
//get un tableau des valeurs passé par l'url
if (!isset($_GET["q"])) {
    $content = "Salut t'as pas de bdd";
} else {

    $query = explode('/', $_GET["q"]);
    switch ($query[0]) {
        case 'view':
            $id = $query[2];
            switch ($query[1]) {
                case 'tips':
                    $tips = ListTipsSQL::get($id);
                    $tipsUi = new ListTipsUi($tips);
                    $content = $tipsUi->toHtml();
                    break;
                case 'tag':
                    $tag = TagSQL::get($id);
                    $tagUi = new TagUi($tag);
                    $content = $tagUi->toHtml();
                    break;
                case 'taps':
                    $taps = TapsSQL::get($id);
                    $tapsUi = new TapsUi($taps);
                    $content = $tapsUi->toHtml();
                    break;
                default:
                    $content = "unknown entity";
            }
            break;
        default:
            $content = "unknown menu";
    }
}

include './index.html';
