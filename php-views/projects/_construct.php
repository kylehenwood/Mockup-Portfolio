<script>
  // in
  $(document).one('pjax:success',function(){
    if (project.open === false) {
      // animate in stagger
    }
    if (project.open === true) {
      project.open = false;
      $(document).trigger('projects-page-in');
    }
  });

  // out
  $(document).one('pjax:beforeReplace', function() {});
</script>

<?php
  include 'banner.php';
  include 'content.php';
?>
