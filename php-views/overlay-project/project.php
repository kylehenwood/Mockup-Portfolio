<script>
  //--
  // In
  $(document).one('page_load',function(){
    $(document).trigger('project-in--animate');
    $('.js-layout-header').addClass('layout__header--hidden');
  });
  //--
  // Out
  $(document).one('pjax:beforeReplace',function(){
    $('.js-layout-header').removeClass('layout__header--hidden');
  });
</script>



<?php
  if (isset($_GET['projectID'])) {
    $projectID = $_GET['projectID'];

    // Get project based on ID
    $projectArray = $_SESSION['projects'];
    $findProject = array_search($projectID, array_column($projectArray, 'id'));
    $project = $projectArray[$findProject];
    $projectStandalone = false;

    include $project['page'];
  } else {
    // PROJECT NOT FOUND
    // include 404 project not found;
  }
?>
