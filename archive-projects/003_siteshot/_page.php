<?php
  $title = "SiteShot";
  $projectClass = "project--siteshot";
  $bannerClass = "banner--siteshot";
  $projectColor = '#00897B';
?>

<script>
  view.layoutClass = '<?php echo($projectColor) ?>';
</script>


<div class="project js-project-container">

  <?php
  include './_templates/_project-navigation.php';
  include './_templates/_project-banner.php';
  include './_templates/_project-brand.php';
  include './_templates/_project-showcase.php';
  include './_templates/_project-section.php';
  ?>

</div>
