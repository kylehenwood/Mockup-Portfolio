<div class="page__content">
<div class="layout__section layout__section--grey">
	<div class="center center--1120">

    <div class="gallery-grid clearfix">

<?php
  for ($x = 0; $x <= 7; $x++) {
    $color = rand(1,7);
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

      case $color == 7;
      $colorClass = "gallery-image--black";
      break;

    }
?>
      <div class="gallery-grid__item">
        <div class="gallery-image gallery-image--project <?php echo $colorClass ?>  js-project-card"></div>
      </div>
<?php
}
?>

    </div>
  </div>
</div>
</div>
