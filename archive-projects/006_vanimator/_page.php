<?php
  $title = "VAnimator";
  $projectClass = "project--vanimator";
  $bannerClass = "banner--vanimator";
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
