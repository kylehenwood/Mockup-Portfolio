<div class="page__section page__section--grey">
	<div class="center center--1120">
    <ul class="project-grid clearfix js-project-grid">

<?php
$galleryProjects = $_SESSION['projects'];
foreach($galleryProjects as $project) {
	$projectColor = "style=background-color:".$project['color'];
	$projectURL = "href='index.php?pageID=projects&projectID=".$project['id']."'";
	$projectTitle = $project['title'];
?>

<li class="project-grid__item">
	<a class="project-card js-project-card js-pjax-project"<?php echo($projectURL); echo($projectColor); ?>>
		<div class="project-card__title"><?php echo($projectTitle); ?></div>
	</a>
</li>

<?php
}
?>

		</ul>
  </div>
</div>
