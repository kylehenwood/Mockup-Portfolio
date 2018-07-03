<div class="layout__section layout__section--grey">
	<div class="center center--1120">

    <ul class="gallery-grid clearfix">

<?php
	foreach($galleryArray as $galleryFolder) {
		$thumbnailURL = $galleryFolder['thumb'];
?>

<li class="gallery-grid__item">
	<a class="gallery-image js-gallery-item" data-pjax="js-pjax-gallery" href="/gallery/001">
		<img src="<?php echo $thumbnailURL ?>" width="400" height="300">
	</a>
</li>

<?php
	}
?>


<?php
	$animationDelay = 1;
  for ($x = 1; $x <= 32; $x++) {
    $color = rand(1,6);
    $colorClass = null;
		$delayClass = null;

    switch ($color) {
      case $color == 1;
      $colorClass = "gallery-image--blue";
      break;

      case $color == 2;
      $colorClass = "gallery-image--green";
      break;

      case $color == 3;
      $colorClass = "gallery-image--purple";
      break;

      case $color == 4;
      $colorClass = "gallery-image--pink";
      break;

      case $color == 5;
      $colorClass = "gallery-image--orange";
      break;

      case $color == 6;
      $colorClass = "gallery-image--teal";
      break;

      // case $color == 7;
      // $colorClass = "gallery-image--black";
      // break;
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

    $animationClass = "anim--in-top";
    $addClass = $colorClass." ".$animationClass." ".$delayClass;
?>

      <li class="gallery-grid__item">
        <a class="gallery-image <?php echo $addClass ?> js-gallery-item">
					<img src="images/4-3.jpg" width="400" height="300">
				</a>
      </li>

<?php
}
?>


    </div>
  </div>
</div>
