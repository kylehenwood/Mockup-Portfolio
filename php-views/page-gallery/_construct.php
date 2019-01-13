<script>

  // bind (pjax:success and document.ready)
  $(document).one('page_load',function(){
    $(document).trigger('gallery-in--animate');
  });

  // out
  $(document).one('pjax:beforeReplace', function() {
    $(document).trigger('gallery-out--animate');
  });
</script>


<?php
  echo '<div class="page">';
  include 'banner.php';
  //include 'filter.php';
  include 'content.php';
  echo '</div>';
?>
