<script>
  // bind
  $(document).one('page_load',function(){
    //currentPage = 'gallery';
    // alert('bind-gallery');
    galleryBind();
  });

  // unbind
  $(document).one('pjax:beforeReplace', function() {
    //alert('unbind-gallery');
    galleryUnbind();
  });
</script>

<?php
  include 'banner.php';
  include 'content.php';
?>
