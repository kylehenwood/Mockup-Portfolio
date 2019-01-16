<script>
  //--
  // in
  $(document).one('page_load',function(){
    // 
    // var href = $('.js-project-card').attr('href');
    //
    //
    // $(".js-project-card").click(function() {
    //
    //     var href = $(this).attr('href');
    //
    //     // Delay setting the location for one second
    //     setTimeout(function() {
    //       //window.location = href
    //       pjaxDelay(href);
    //     },200);
    //     return false;
    // });

    //worksBind();

    // // project => works
    // if (works.animate === true) {
    //   works.animate = false;
    //   $(document).trigger('works-in--animate');
    // } else {
    //   $(document).trigger('works-in--instant');
    // }
  });
  //--
  // out
  $(document).one('pjax:beforeReplace', function() {

    // Get location?
    // set animate in prefrence?

    // works => project
    if (works.animate === true) {
      //$(document).trigger('works-out--animate');
    } else {
      //$(document).trigger('works-out--instant');
    }
  });
</script>

<?php
  echo '<div class="page js-page-works">';
  include 'banner.php';
  include 'content.php';
  echo '</div>';
?>
