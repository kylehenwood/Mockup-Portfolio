<script data-exec-on-popstate>
  // set view variables
  view.layoutClass = 'layout--standard';
  view.currentPage = 'gallery';
  runView();
</script>


<?php
  echo '<div class="page">';
  include 'banner.php';
  //include 'filter.php';
  include 'content.php';
  echo '</div>';
?>
