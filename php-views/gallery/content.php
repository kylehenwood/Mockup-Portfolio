<div class="layout__section layout__section--grey">
	<div class="center center--1120">

    <ul class="gallery-grid clearfix">

<?php
	foreach($galleryArray as $galleryFolder) {
?>

<li class="gallery-grid__item">
	<a class="gallery-image js-gallery-item" href="index.php?pageID=gallery&postID=001">
		<img src="<?php echo $galleryFolder['thumb']; ?>" width="400" height="300">
		<ul class="thumb-hidden">
			<li class="js-thumb-id"></li>
			<li class="js-thumb-url"></li>
			<li class="js-thumb-title"></li>
			<li class="js-thumb-subtitle"></li>
			<li class="js-thumb-description"></li>
			<li class="js-thumb-tags"></li>
			<li class="js-thumb-image"></li>
			<li class="js-thumb-related"></li>
			<li class="js-thumb-similar"></li>
		</ul>
	</a>
</li>



<?php
	}

	$animationDelay = 1;
  for ($x = 1; $x <= 32; $x++) {
    $color = rand(1,6);
    $colorClass = null;

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

    }
?>

      <li class="gallery-grid__item">
        <a class="gallery-image js-gallery-item <?php echo $colorClass ?>" href="index.php?pageID=gallery&postID=001">
					<img src="images/4-3.jpg" width="400" height="300">
				</a>
      </li>

<?php
}
?>

    </div>
  </div>
</div>
