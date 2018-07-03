<?php
ini_set('display_errors',"1");

function displayContent()	{
  if (isset($_GET['pageID'])) {
    $pageName = $_GET['pageID'];
    $content = null;
    $title = null;
    $preview = null;

    switch ($pageName) {

      case $pageName == 'gallery';
      $title = 'KH - TLDR';
      $content = setContent('./php-views/gallery/_construct.php');
      break;

      case $pageName == 'projects';
      $title = 'KH - Projects';
      $content = setContent('./php-views/projects/_construct.php');
      break;

      case $pageName == 'about';
      $title = 'KH - About';
      $content = setContent('./php-views/about/_construct.php');
      break;

      case $pageName == 'gallery-item';
      $title = 'KH - GalleryItem';
      $content = null;
      $preview = setContent('./php-components/gallery-content.php');
      //$preview = setContent('imgID + galleryPHP');
      break;

      // 404 page not found
      default:
      $title = '404 Page not found';
      $content = setContent('./php-views/404/_construct.php');
      break;
    }
  } else {
    // no page id set -> home page
    $title = 'KH - TLDR';
    $content = setContent('./php-views/home/_construct.php');
  }

  // if pjax request, only render the content & set the title, else render the full page
  if(isset($_SERVER['HTTP_X_PJAX']) && $_SERVER['HTTP_X_PJAX'] == 'true'){

    if ($content != null) {
      echo $content;
    }
    if ($preview != null) {
      echo $preview;
    }
  	echo "<title>{$title}</title>";
  } else {

    include './php-chrome/navigation.php';

    if ($content != null) {
      include './php-components/gallery.php';
      echo '<div id="js-pjax-container">';
      echo $content;
      echo '</div>';
    }

    // if refreshed on a gallery item OR navigated directly to:
    if ($preview != null) {
      echo '<div class="center center--1120">';
      echo $preview;
      echo '</div>';
    }

    include './php-chrome/footer.php';
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
