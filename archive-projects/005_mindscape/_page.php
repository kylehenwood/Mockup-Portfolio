<?php
  $title = "Mindscape";
  $projectClass = "project--mindscape";
  $bannerClass = "banner--mindscape";
  $projectColor = "#7B1FA2";
  ?>

  <script>
    view.layoutClass = '<?php echo($projectColor) ?>';
  </script>

  <div class="project js-project-container">

  <?php
  include './_templates/_project-navigation.php';
  include './_templates/_project-banner.php';
  include './_templates/_project-description.php';
  include './_templates/_project-gallery.php';
  ?>

  </div>
