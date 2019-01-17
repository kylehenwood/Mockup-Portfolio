<?php
  $title = "Shnappy";
  $projectClass = "project--shnappy";
  $bannerClass = "banner--shnappy";
  $projectColor = '#E91E63';
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
