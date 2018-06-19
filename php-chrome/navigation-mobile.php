<div class="layout__navigation-mobile">
  <div class="navigation-mobile">
    <!-- logo button -->
    <div class="navigation-mobile__logo">
      <a class="mobile-logo js-navitem <?php if ($navSelectedGallery) {echo'mobile-logo--active';} ?>" data-pjax="js-pjax-container" activeClass="mobile-logo--active" href="index.php"></a>
    </div>

    <!-- menu button -->
    <div class="navigation-mobile__button">
      <a class="mobile-header-button js-mobile-menu-button">
        <span class="flat-icon icon--16 icon--menu"></span>
      </a>
    </div>

    <!-- account button -->
  </div>
</div>


<!-- mobile menu -->
<div class="layout__mobile-menu js-mobile-menu">

  <div class="mobile-tray">
    <div class="mobile-tray__close">
      <a class="mobile-header-button mobile-header-button--white js-mobile-menu-button">
        <span class="flat-icon icon--16 icon--cross"></span>
      </a>
    </div>

    <div class="mobile-tray__navigation">
      <div class="mobile-navigation">
        <a class="mobile-navigation__item js-navitem <?php if ($navSelectedGallery) { echo'mobile-navigation__item--active';} ?>" data-pjax="js-pjax-container" activeClass="mobile-navigation__item--active" href="index.php?pageID=gallery">
          Gallery / TLDR
        </a>
        <a class="mobile-navigation__item js-navitem <?php if ($navSelectedProjects) { echo'mobile-navigation__item--active';} ?>" data-pjax="js-pjax-container" activeClass="mobile-navigation__item--active" href="index.php?pageID=projects">
          Projects
        </a>
        <a class="mobile-navigation__item js-navitem <?php if ($navSelectedAbout) { echo'mobile-navigation__item--active';} ?>" data-pjax="js-pjax-container" activeClass="mobile-navigation__item--active" href="index.php?pageID=about">
          About
        </a>
      </div>
    </div>
  </div>


</div>


<!-- overlay -->
