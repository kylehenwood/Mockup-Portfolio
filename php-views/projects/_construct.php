<script>
  // in
  $(document).one('page_load',function(){
    if (project.open === false) {
      // animate in stagger
      $(document).trigger('projects-stagger-in');
    }
    if (project.open === true) {
      project.open = false;
      $(document).trigger('projects-page-in');
    }
  });
  // out
  $(document).one('pjax:beforeReplace', function() {
  });
</script>

<?php
  echo '<div class="page js-page-projects">';
  include 'banner.php';
  include 'content.php';
  echo '</div>';
?>
