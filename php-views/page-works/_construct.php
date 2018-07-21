<script>
  //--
  // in
  $(document).one('page_load',function(){
    worksBind();

    //alert('WAT');
    // animate in stagger
    // if (works.stagger === false) {
    //   $(document).trigger('works-stagger-in');
    // }

    // project => works
    if (works.animate === true) {
      works.animate = false;
      $(document).trigger('works-in--animate');
    } else {
      $(document).trigger('works-in--instant');
    }
  });
  //--
  // out
  $(document).one('pjax:beforeReplace', function() {
    // works => project
    if (works.animate === true) {
      $(document).trigger('works-out--animate');
    } else {
      $(document).trigger('works-out--instant');
    }
  });
</script>

<?php
  echo '<div class="page js-page-works">';
  include 'banner.php';
  include 'content.php';
  echo '</div>';
?>
