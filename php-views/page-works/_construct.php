<script data-exec-on-popstate>
  // set view variables
  view.layoutClass = 'layout--standard';
  view.currentPage = 'work';
</script>

<?php
  echo '<div class="page js-page-works">';
  include 'banner.php';
  include 'content.php';
  echo '</div>';
?>
