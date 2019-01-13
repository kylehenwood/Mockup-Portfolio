<script>
  //--
  // In
  $(document).one('pjax:success',function(){
    
    project.open = true;
    // works => project

    if (layout.project.is(":visible")) {
      return false;
    }

    if (project.animate === true) {
      project.animate = false;
      $(document).trigger('project-in--animate');
    } else {
      $(document).trigger('project-in--instant');
    }
  });


  //--
  // Out
  $(document).one('pjax:beforeReplace', function() {
    //project.open = false;
    //
    // if (project.open === true) {
    //   return;
    // }
    //
    // // project => works
    // if (project.animate === true) {
    //   project.animate = false;
    //   $(document).trigger('project-out--animate');
    // } else {
    //   $(document).trigger('project-out--instant');
    // }
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
