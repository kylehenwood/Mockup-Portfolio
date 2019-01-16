<div class="page__section">
	<div class="center center--1120">
    <ul class="project-grid clearfix js-project-grid anim--in-right anim--delay-320">

<?php
$galleryProjects = $_SESSION['projects'];
foreach($galleryProjects as $project) {
	$projectColor = "style=background-color:".$project['color'];
	$projectURL = "href='index.php?pageID=projects&projectID=".$project['id']."'";
	$projectTitle = $project['cardTitle'];
?>

<li class="project-grid__item">
	<a class="project-card js-project-card js-pjax-container"<?php echo($projectURL); echo($projectColor); ?>>
		<div class="project-card__title"><?php echo($projectTitle); ?></div>
	</a>
</li>

<?php
}
?>
		</ul>
  </div>
</div>
