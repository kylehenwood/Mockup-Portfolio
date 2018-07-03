<script>
  // bind
  $(document).one('page_load',function(){
    galleryBindThumbnails();
  });
  // unbind
  $(document).one('pjax:beforeReplace', function() {
    galleryUnbindThumbnails();
  });
</script>


<?php
  include 'banner.php';
  include 'content.php';
?>
