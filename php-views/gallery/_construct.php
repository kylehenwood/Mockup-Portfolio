<script>

  // bind
  $(document).one('page_load',function(){
    // only do the animation in from post when loading from a post
    if (post.animateFromPost === true) {
      post.animateFromPost = false;
      $(document).trigger('gallery-in');
    }
  });

  // out
  $(document).one('pjax:beforeReplace', function() {
  });
</script>


<?php
  include 'banner.php';
  //include 'filter.php';
  include 'content.php';
?>
