<?php
  $title = "Mindscape";
  $projectColor = "#7B1FA2";
  ?>

  <script>
    view.layoutClass = '<?php echo($projectColor) ?>';
  </script>


  <?php
  include './_templates/_project-navigation.php';
  include './_templates/_project-banner.php';
  echo '<div class="project__container--animate">';
  include './_templates/_project-description.php';
  include './_templates/_project-gallery.php';
  echo '</div>';
  ?>
