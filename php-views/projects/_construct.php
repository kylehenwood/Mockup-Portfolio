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

<div class="layout__project js-projects-container"></div>

<?php
  include 'banner.php';
  include 'content.php';
?>
