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
include './_templates/_project-description.php';
include './_templates/_project-gallery.php';
?>

</div>
