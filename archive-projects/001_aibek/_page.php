<?php
  $title = "Aibek";
  $projectClass = "project--aibek";
  $bannerClass = "banner--aibek";
  $projectColor = '#3D325A';
?>

<script>
  view.layoutClass = '<?php echo($projectColor) ?>';
</script>

<div class="project js-project-container <?php echo($projectClass) ?>">

<?php

include './_templates/_project-navigation.php';
include 'banner.php';

echo '<div class="project__container--animate">';
include './_templates/_project-description.php';
include './_templates/_project-gallery.php';
echo '</div>';
?>

</div>
