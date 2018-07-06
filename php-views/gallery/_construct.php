<script>

  // bind
  $(document).one('page_load',function(){
    // do something
    // if (animateFromPost === true) {
    //   animateFromPost = false;
    //   $(document).trigger('gallery-animate-from-post');
    // }
  });

  // unbind
  $(document).one('pjax:beforeReplace', function() {

  });
</script>


<?php
  include 'banner.php';
  include 'filter.php';
  include 'content.php';
?>
