<div class="layout__section layout__section--grey">
	<div class="center center--1120">

    <div class="project-grid clearfix js-project-grid">

<?php
  for ($x = 0; $x <= 7; $x++) {
    $color = rand(1,7);
    //$colorClass = null;

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
?>
      <div class="project-grid__item">
        <div class="project-card <?php echo $colorClass ?>  js-project-card"></div>
      </div>
<?php
}
?>

    </div>
  </div>
</div>
