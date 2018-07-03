<?php
  $galleryFolder = "php-thumbnails";
  $galleryItems = array_diff(scandir($galleryFolder), array('..', '.'));
  $galleryArray = array();

  foreach ($galleryItems as $galleryItem) {
    $thumbDir = './'.$galleryFolder.'/'.$galleryItem;
    $galleryConstruct = $thumbDir.'/_construct.php';

    // include construct file inside each thumbnail
    // that then pushed that folders content to the $galleryArray
    include $galleryConstruct;

    // Push folder data to array
    $tempArray = array(
      "id" => $id,
      "title" => $title,
      "subtitle" => $subtitle,
      "desc" => $description,
      "project" => $project,
      "tags" => $tags,
      "thumb" => $thumbDir.'/'.$thumbnail,
      "image" => $thumbDir.'/'.$image
    );
    array_push($galleryArray,$tempArray);
    unset($tempArray);
  }

	$_SESSION['gallery'] = $galleryArray;
  // OK, so I have all the image information from the thumbnails stored in $galleryArray
  //echo('<pre>');
  // print_r($galleryArray);

	// $key = array_search(2, array_column($galleryArray, 'id'));
	// print_r($key);

  // get thumbnail URLS
  // foreach($galleryArray as $galleryFolder) {
  //   $thumbnailURL = $galleryFolder['thumb'];
  //   echo('<img src="'.$thumbnailURL.'"/>');
  // }
  // echo('</pre>');
?>



<div class="layout__section layout__section--grey">
	<div class="center center--1120">

    <ul class="gallery-grid clearfix">

<?php
	foreach($galleryArray as $galleryFolder) {
?>

<li class="gallery-grid__item">
	<a class="gallery-image js-gallery-item" href="index.php?pageID=gallery&postID=<?php echo $galleryFolder['id']; ?>">
		<img src="<?php echo $galleryFolder['thumb']; ?>" width="400" height="300">
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
