<script>
  //--
  // in
  $(document).one('page_load',function(){
    worksBind();
    // animate in stagger
    if (project.open === false) {
      $(document).trigger('works-stagger-in');
    }
    // animate from project => works
    if (works.animate === true) {
      works.animate = false;
      $(document).trigger('works-animate-in');
    } else {
      $(document).trigger('works-instant-in');
    }
  });
  //--
  // out
  $(document).one('pjax:beforeReplace', function() {
    // animate from works => project
    if (works.animate === true) {
      $(document).trigger('works-animate-out');
    } else {
      $(document).trigger('works-instant-out');
    }
  });
</script>

<?php
  echo '<div class="page js-page-works">';
  include 'banner.php';
  include 'content.php';
  echo '</div>';
?>
