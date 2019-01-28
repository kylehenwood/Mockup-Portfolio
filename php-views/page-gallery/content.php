
<div class="page__section">
	<div class="center center--1120">

    <ul class="gallery-grid clearfix js-gallery-grid js-anim-z4">

<?php
	$galleryPosts = $_SESSION['gallery'];
	foreach($galleryPosts as $post) {
		$postID = $post['id'];
		$postColor = "style=background-color:".$post['color'];
		$postURL = "index.php?pageID=gallery&postID=".$postID;
		$postThumbnail = $post['thumb'];
		$postImage = $post['image'];
		$postTags = implode(",",$post['tags']);
?>

<li class="gallery-grid__item" id="post-<?php echo($postID) ?>">
	<a class="gallery-thumbnail js-pjax-link" <?php echo($postColor) ?> href="<?php echo($postURL) ?>">
		<img class="gallery-thumbnail__image" src="<?php echo $postThumbnail ?>" width="400" height="300">
		<ul class="gallery-thumbnail__tags">
			<li class="js-thumbnail-tags"><?php echo $postTags; ?></li>
		</ul>
	</a>
</li>

<?php
	}
?>


			<!-- <li class="gallery-grid__item">
				<a class="gallery-thumbnail js-pjax-gallery" href="images/4-32.jpg">
					<img class="gallery-thumbnail__image" src="images/4-32.jpg" width="400" height="300">
				</a>
			</li> -->



		</ul>
  </div>
</div>
