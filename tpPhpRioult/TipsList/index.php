<?php

require_once './class/entities/Tips/TipsDatabase.class.php';
require_once './class/entities/Tips/TipsUi.class.php';
require_once './class/entities/Tips/TipsListUi.class.php';
/*require_once './class/entities/Tag/TagDatabase.class.php';
require_once './class/entities/Tag/TagUi.class.php';
require_once './class/entities/Taps/TapsDatabase.class.php';
require_once './class/entities/Taps/TapsUi.class.php';*/

/*

  $tag = TagSQL::get(3);
  $tagUi = new TagUi($tag);

  $taps = TapsSQL::get(3);
  $tapsUi = new TapsUi($taps);
 *
 * $content = $tipsUi->toHtml();
 */

if (!isset($_GET["q"])) {
    $content = "nothing to handle";
} else {
    $query = explode('/', $_GET["q"]);
    $size = count($query);
    //var_dump($query);
    switch ($query[0]) {
        case 'view':
            $id = $query[2];
            switch ($query[1]) {
                case 'tips':
                    if($id=="all"){
                      $tips = TipsListSQL::get();
                      $tipsUi = new TipsListUi($tips);
                      $content = $tipsUi->toHtml();
                      break;
                    }
                    else{
                      $tips = TipsSQL::get($id);
                      $tipsUi = new TipsUi($tips);
                      $content = $tipsUi->toHtml();
                      break;
                    }
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
