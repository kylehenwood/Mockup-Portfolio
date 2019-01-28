<?php
ini_set('display_errors',"1");

include 'session.php';

function displayContent()	{
  $content = null;
  $title = null;
  $post = null;
  $postStandalone = null;
  $project = null;
  $projectStandalone = null;

  if (isset($_GET['pageID'])) {
    $pageName = $_GET['pageID'];

    switch ($pageName) {

      // Gallery Switcher
      case $pageName == 'gallery';
      if (isset($_GET['postID'])) {
        $postID = $_GET['postID'];
        $title = 'KH - '.$_GET['postID'];
        $post = setContent('./php-views/overlay-post/post.php');
        $postStandalone = setContent('./php-views/overlay-post/post-standalone.php');
      } else {
        $title = 'KH - TLDR';
        $content = setContent('./php-views/page-gallery/_construct.php');
      }
      break;

      case $pageName == 'work';
      if (isset($_GET['projectID'])) {
        if (isset($_GET['subpageID'])) {
          $subpageID = $_GET['subpageID'];
          $title = 'KH - '.$_GET['projectID'];
          $post = setContent('./php-views/overlay-project-subpage/_template.php');
          $postStandalone = setContent('./php-views/overlay-project-subpage/_template.php');
        } else {
          $projectID = $_GET['projectID'];
          $title = 'KH - '.$_GET['projectID'];
          $project = setContent('./php-views/overlay-project/project.php');
          $projectStandalone = setContent('./php-views/overlay-project/project-standalone.php');
        }
      } else {
        $title = 'KH - Projects';
        $content = setContent('./php-views/page-work/_construct.php');
      }
      break;

      case $pageName == 'about';
      $title = 'KH - About';
      $content = setContent('./php-views/page-about/_construct.php');
      break;

      case $pageName == 'contact';
      $title = 'KH - Contact me';
      $content = setContent('./php-views/overlay-contact/_construct.php');
      break;

      case $pageName == 'sent';
      $title = 'KH - Contact me';
      $content = setContent('./php-views/overlay-contact/sent.php');
      break;

      // 404 page not found
      default:
      $title = '404 Page not found';
      $content = setContent('./php-views/page-404/_construct.php');
      break;
    }
  } else {
    // no page id set -> home page
    $title = 'KH - TLDR';
    $content = setContent('./php-views/page-gallery/_construct.php');
  }




  // if pjax request, only render the content & set the title, else render the full page
  if(isset($_SERVER['HTTP_X_PJAX']) && $_SERVER['HTTP_X_PJAX'] == 'true'){
    if ($content != null) {
      echo $content;
    }
    if ($post != null) {
      echo $post;
    }
    if ($project != null) {
      echo $project;
    }
  	echo "<title>{$title}</title>";

  } else {

    echo '<!DOCTYPE html>';
    echo '<html class="js-html svg">';

    include './php-chrome/head.php';

    echo '<body class="layout js-layout">';

    include './php-chrome/navigation.php';
    include './php-chrome/navigation-mobile.php';
    include './php-chrome/navigation-desktop.php';

    echo '<div class="layout__overlay" id="js-pjax-modal"></div>';

    echo '<div style="overflow:hidden">';
    echo '<div class="layout__content" id="js-pjax-content-1">';
    echo $content;
    echo $postStandalone;
    echo $projectStandalone;
    echo '</div>';
    echo '<div class="layout__content" id="js-pjax-content-2"></div>';

    echo '</div>';
    //include './php-chrome/footer.php';


    echo '</body>';
    echo '</html>';
  }
  return false;
}

// retrieves the page content and returns as a variable
function setContent($filePath) {
  ob_start();
  include($filePath);
  $content = ob_get_clean();
  return $content;
}

displayContent();

?>
