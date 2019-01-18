<?php
  $title = "Raygun";
  $projectColor = '#1E88E5';
?>

<script>
  view.layoutClass = '<?php echo($projectColor) ?>';
  view.currentPage = 'works-project';
  runView();
</script>


<?php
  include './_templates/_project-navigation.php';
  include './_templates/_project-banner.php';
  echo '<div class="project__container--animate">';
  include './_templates/_project-description.php';
  include './_templates/_project-gallery.php';
  echo '</div>';
?>
