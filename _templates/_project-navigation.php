<?php
  if ($projectStandalone === false) {
?>

<div class="project__navigation js-project-navigation" data-bg="<?php echo $projectColor?>">
  <div class="center center--1120">

    <div class="project-navigation">
      <div class="project-navigation__back">
        <a class="project-back-button js-project-close js-pjax-link" href="index.php?pageID=projects">
          <div class="project-back-button__icon">
            <span class="flat-icon icon--16 icon--arrow-left"></span>
          </div>
          <div class="project-back-button__text">All Projects</div>
        </a>
      </div>
      <div class="project-navigation__title"><?php echo $title ?></div>
      <div class="project-navigation__controls">
        <div class="project-controls">
          <div class="project-controls__prev">
            <a class="next-prev-button"><span class="flat-icon icon--16 icon--arrow-left"></span></a>
          </div>
          <div class="project-controls__next">
            <a class="next-prev-button"><span class="flat-icon icon--16 icon--arrow-right"></span></a>
          </div>
        </div>
      </div>
    </div>

  </div>
</div>

<?php
  }
?>
