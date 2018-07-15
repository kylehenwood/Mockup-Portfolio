<script>

  // bind
  $(document).one('pjax:success',function(){
    // only do the animation in from post when loading from a post
    if (post.animateFromPost === true) {
      post.animateFromPost = false;
      $(document).trigger('gallery-in');
    } else {
      console.log('gallery-in--instant');
      $(document).trigger('gallery-in--instant');
    }
  });

  // out
  $(document).one('pjax:beforeReplace', function() {
  });
</script>


<?php
  echo '<div class="page">';
  include 'banner.php';
  //include 'filter.php';
  include 'content.php';
  echo '</div>';
?>
