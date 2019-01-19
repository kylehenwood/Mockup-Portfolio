<div class="project project--standalone js-page-class" page-id="work-project-standalone">


<?php
  if (isset($_GET['projectID'])) {
    $projectID = $_GET['projectID'];

    // Get project based on ID
    $projectArray = $_SESSION['projects'];
    $findProject = array_search($projectID, array_column($projectArray, 'id'));
    $project = $projectArray[$findProject];
    $projectStandalone = true;

    include $project['page'];
  } else {
    // PROJECT NOT FOUND
    // include 404 project not found;
  }
?>

</div>
