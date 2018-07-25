
<div class="page__section">
	<div class="center center--1120">

    <ul class="gallery-grid clearfix">

<?php
	$galleryPosts = $_SESSION['gallery'];
	foreach($galleryPosts as $post) {
		$postColor = "style=background-color:".$post['color'];
		$postURL = "index.php?pageID=gallery&postID=".$post['id'];
		$postThumbnail = $post['thumb'];
		$postTags = implode(",",$post['tags']);
?>

<li class="gallery-grid__item">
	<a class="gallery-thumbnail js-pjax-post anim--hidden" <?php echo($postColor) ?> href="<?php echo($postURL) ?>">
		<img class="gallery-thumbnail__image" src="<?php echo $postThumbnail ?>" width="400" height="300">
		<ul class="gallery-thumbnail__tags">
			<li class="js-thumbnail-tags"><?php echo $postTags; ?></li>
		</ul>
	</a>
</li>





<?php
	}
?>

  </div>
</div>
