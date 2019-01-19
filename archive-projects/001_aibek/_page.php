<?php
  $title = "Aibek";
  $projectColor = '#3D325A';
?>

<?php

include './_templates/_project-navigation.php';
include 'banner.php';

echo '<div class="project__container--animate">';
include './_templates/_project-description.php';
include './_templates/_project-gallery.php';
echo '</div>';
?>
