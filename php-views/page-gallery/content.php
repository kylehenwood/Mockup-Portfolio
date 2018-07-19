
<div class="page__section page__section--grey">
	<div class="center center--1120">

    <ul class="gallery-grid clearfix">

<?php
	$galleryPosts = $_SESSION['gallery'];
	foreach($galleryPosts as $post) {
		$postURL = "index.php?pageID=gallery&postID=".$post['id'];
		$postThumbnail = $post['thumb'];
		$postTags = implode(",",$post['tags']);
?>

<li class="gallery-grid__item">
	<a class="gallery-thumbnail js-pjax-post" href="<?php echo $postURL ?>">
		<img class="gallery-thumbnail__image" src="<?php echo $postThumbnail ?>" width="400" height="300">
		<ul class="gallery-thumbnail__tags">
			<li class="js-thumbnail-tags"><?php echo $postTags; ?></li>
		</ul>
	</a>
</li>





<?php
	}
?>



<?php
	// FAKE BULLSHIT
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
