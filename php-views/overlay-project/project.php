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

<div class="project js-project-container">

  <div class="project__close js-project-fixed">
    <div class="center center--1120">
      <a class="project-back-button js-project-close js-pjax-container" href="index.php?pageID=projects">
        <div class="project-back-button__icon">
          <span class="flat-icon icon--16 icon--arrow-left"></span>
        </div>
        <div class="project-back-button__text">All Projects</div>
      </a>
    </div>
  </div>

<?php
  if (isset($_GET['projectID'])) {
    $projectID = $_GET['projectID'];

    // Get project based on ID
    $projectArray = $_SESSION['projects'];
    $findProject = array_search($projectID, array_column($projectArray, 'id'));
    $project = $projectArray[$findProject];

    include $project['page'];
  } else {
    // PROJECT NOT FOUND
    // include 404 project not found;
  }
?>
</div>
