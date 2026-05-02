<div class="layout__section layout__section--grey">
	<div class="center center--1120">

    <div class="project-grid clearfix js-project-grid">

<?php
	$animationDelay = 1;
	for ($x = 1; $x <= 16; $x++) {
    $color = rand(1,6);
		$colorClass = null;
		$delayClass = null;

    switch ($color) {
      case $color == 1;
      $colorClass = "project-card--blue";
      break;

      case $color == 2;
      $colorClass = "project-card--green";
      break;

      case $color == 3;
      $colorClass = "project-card--purple";
      break;

      case $color == 4;
      $colorClass = "project-card--pink";
      break;

      case $color == 5;
      $colorClass = "project-card--orange";
      break;

      case $color == 6;
      $colorClass = "project-card--teal";
      break;

      case $color == 7;
      $colorClass = "project-card--black";
      break;
    }

		// animation delay increment
		switch ($animationDelay) {
			case $animationDelay == 1;
			$delayClass = null;
			break;

			case $animationDelay == 2;
			$delayClass = "anim--delay-40";
			break;

			case $animationDelay== 3;
			$delayClass = "anim--delay-80";
			break;

			case $animationDelay == 4;
			$delayClass = "anim--delay-120";
			$animationDelay = 0;
			break;
		}
		$animationDelay++;



    //$animationClass = "anim--in-top";
    $addClass = $colorClass;//." ".$animationClass;//." ".$delayClass;
		$projectLink = 'index.php?pageID=projects&projectID=test';
?>
      <div class="project-grid__item">
        <a class="project-card <?php echo($addClass); ?> js-project-card js-pjax-project" href="<?php echo($projectLink); ?>">
				</a>
      </div>

<?php
	}
?>

    </div>
  </div>
</div>
