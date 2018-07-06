<script>

  // bind
  $(document).one('page_load',function(){
    // only do the animation in from post when loading from a post
    if (gallery.animateFromPost === true) {
      $(document).trigger('gallery-animate-from-post');
    }
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
