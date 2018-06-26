<script>
  // bind
  $(document).one('page_load',function(){
    projectBind();
  });

  // unbind
  $(document).one('pjax:beforeReplace', function() {
    projectUnbind();
  });
</script>

<?php
  include 'project-overlay.php';
  include 'banner.php';
  include 'content.php';
?>
