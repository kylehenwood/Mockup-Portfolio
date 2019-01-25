<div class="project__container project__container--grey">
  <div class="center center--1120">

    <ul class="gallery-grid clearfix">

      <?php
      if (isset($_GET['projectID'])) {
        $projectID = $_GET['projectID'];
        $thumburl = 'index.php?pageID=work&projectID='.$projectID.'&subpageID=0';
      }

      for ($i = 0; $i <= 20; $i++) {

      ?>

      <li class="gallery-grid__item">
      	<a class="gallery-thumbnail js-pjax-link" style="background-color:#333" href="<?php echo($thumburl) ?>">
      		<img class="gallery-thumbnail__image" src="./archive-posts/001_thumbnail-test/4-3.jpg" width="400" height="300">
      		<ul class="gallery-thumbnail__tags">
      			<li class="js-thumbnail-tags">UI,UX,Design,Creative</li>
      		</ul>
      	</a>
      </li>

      <?php } ?>

    </ul>

  </div>
</div>
