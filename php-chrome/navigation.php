<?php
$navSelectedGallery = false;
$navSelectedProjects = false;
$navSelectedAbout = false;

if (isset($_GET['pageID'])) {
  $pageName = $_GET['pageID'];

  switch ($pageName) {

    case $pageName == 'gallery';
    $navSelectedGallery = true;
    break;

    case $pageName == 'projects';
    $navSelectedProjects = true;
    break;

    case $pageName == 'about';
    $navSelectedAbout = true;
    break;

    default:
    break;
  }
} else {
  $navSelectedGallery = true;
}

// includes
?>
