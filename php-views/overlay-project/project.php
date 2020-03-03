<script>
  //--
  // In
  $(document).one('pjax:success',function(){
    projectBind();
    project.open = true;
    // works => project

    //console.log(1);

    if (layout.project.is(":visible")) {
      console.log(2);
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
    // project => works
    if (project.animate === true) {
      project.animate = false;
      $(document).trigger('project-out--animate');
    } else {
      $(document).trigger('project-out--instant');
    }

    // animate project => project
    // if (project.open === true){}
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
