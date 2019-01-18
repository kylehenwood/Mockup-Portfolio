<div class="page__section">
	<div class="center center--1120">
    <ul class="project-grid clearfix js-project-grid anim--in-right anim--delay-320">

<?php
$galleryProjects = $_SESSION['projects'];
foreach($galleryProjects as $project) {
	$projectID = $project['id'];
	$projectColor = "style=background-color:".$project['color'];
	$projectURL = "index.php?pageID=projects&projectID=".$projectID;
	$projectTitle = $project['cardTitle'];
?>

<li class="project-grid__item" id="project-<?php echo($projectID) ?>">
	<a class="project-card js-project-card js-pjax-link-delay" href="<?php echo($projectURL) ?>" <?php echo($projectColor); ?>>
		<div class="project-card__title"><?php echo($projectTitle); ?></div>
	</a>
</li>

<?php
}
?>
		</ul>
  </div>
</div>
