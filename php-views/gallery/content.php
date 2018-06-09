<div class="page__content-container">
  <div class="layout__section layout__section--grey">
  	<div class="center center--1120">

      <div class="gallery-grid clearfix">

  <?php
    for ($x = 0; $x <= 30; $x++) {


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

      //$animationClass = "anim--in-bot";
      //$addClass = $colorClass." ".$animationClass;
      $addClass = '';
  ?>

        <div class="gallery-grid__item">
          <a class="gallery-image <?php echo $addClass ?> js-gallery-item"></a>
        </div>

  <?php
  }
  ?>


      </div>
    </div>
  </div>
</div>
