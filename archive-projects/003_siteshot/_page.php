<?php
  $title = "SiteShot";
  $projectColor = '#00897B';
?>

<div class="js-project" project-id="project-siteshot">
  <?php
  include './_templates/_project-navigation.php';
  include './_templates/_project-banner.php';
  echo '<div class="project__container--animate">';
  include './_templates/_project-brand.php';
  include './_templates/_project-showcase.php';
  include './_templates/_project-section.php';
  echo '</div>';
  ?>
</div>
