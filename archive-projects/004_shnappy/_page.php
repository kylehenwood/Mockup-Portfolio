<?php
  $title = "Shnappy";
  $projectColor = '#E91E63';
?>

<?php
  include './_templates/_project-navigation.php';
  include './_templates/_project-banner.php';
  echo '<div class="project__container--animate">';
  include './_templates/_project-description.php';
  include './_templates/_project-gallery.php';
  echo '</div>';
?>
