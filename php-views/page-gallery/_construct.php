<script>

  // bind
  $(document).one('page_load',function(){
    galleryBind();
    // only do the animation in from post when loading from a post
    if (gallery.animateToGallery === true) {
      gallery.animateToGallery  = false;
      $(document).trigger('gallery-in--animate');
    } else {
      $(document).trigger('gallery-in--instant');
    }
  });

  // out
  $(document).one('pjax:beforeReplace', function() {
    if (gallery.animateToPost === true) {
      gallery.animateToPost = false;
      $(document).trigger('gallery-out--animate');
    } else {
      //$(document).trigger('gallery-out--instant');
    }
  });
</script>


<?php
  echo '<div class="page">';
  include 'banner.php';
  //include 'filter.php';
  include 'content.php';
  echo '</div>';
?>
