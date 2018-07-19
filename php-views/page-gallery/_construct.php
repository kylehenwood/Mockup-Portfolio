<script>

  // bind
  $(document).one('pjax:success',function(){
    postBind();
    // only do the animation in from post when loading from a post
    if (post.animateFromPost === true) {
      post.animateFromPost = false;
      $(document).trigger('gallery-animate-in');
    } else {
      $(document).trigger('gallery-instant-in');
    }
  });

  // out
  $(document).one('pjax:beforeReplace', function() {
    $(document).trigger('gallery-animate-out');
    $(document).trigger('gallery-instant-out');
  });
</script>


<?php
  echo '<div class="page">';
  include 'banner.php';
  //include 'filter.php';
  include 'content.php';
  echo '</div>';
?>
