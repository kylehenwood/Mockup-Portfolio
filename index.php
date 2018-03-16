<?php

function displayContent()	{
  if (isset($_GET['pageID'])) {

    $pageName = $_GET['pageID'];
    $content;
    $title = 'No Title';

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
  	echo $content;
  	echo "<title>{$title}</title>";
  } else{

    include './php-chrome/navigation.php';

    echo '<div id="js-pjax-container">';
    echo $content;
    echo '</div>';

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
