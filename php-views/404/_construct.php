<script>
  // bind
  $(document).one('page_load',function(){
  });

  // unbind
  $(document).one('pjax:beforeReplace', function() {
  });
</script>

<?php
  include 'banner.php';
  include 'content.php';
?>
