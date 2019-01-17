<div class="layout__header js-layout-header">

    <div class="header">
      <div class="header__logo">
        <!--<a class="logo js-pjax-link <?php if ($navSelectedGallery) { echo'logo--active';} ?>" data-pjax="js-pjax-link" activeClass="logo--active" href="index.php"></a> -->

        <a class="logo"></a>
      </div>
      <div class="header__navigation">
        <div class="navigation">
          <a class="navigation__item js-pjax-link <?php if ($navSelectedGallery) { echo'navigation__item--active';} ?>" activeClass="navigation__item--active" href="index.php?pageID=gallery">
            <span class="navigation__item-text">TLDR</span>
            <span class="navigation__item-line"></span>
          </a>
          <span class="navigation__space"></span>
          <a class="navigation__item js-pjax-link <?php if ($navSelectedProjects) { echo'navigation__item--active';} ?>" activeClass="navigation__item--active" href="index.php?pageID=projects">
            <span class="navigation__item-text">Projects</span>
            <span class="navigation__item-line"></span>
          </a>
          <span class="navigation__space"></span>
          <a class="navigation__item js-pjax-link <?php if ($navSelectedAbout) { echo'navigation__item--active';} ?>" activeClass="navigation__item--active" href="index.php?pageID=about">
            <span class="navigation__item-text">Who am I?</span>
            <span class="navigation__item-line"></span>
          </a>
        </div>
      </div>

      <div class="header__contact">
        <a class="button-contact js-pjax-link" href="index.php?pageID=contact">Contact Me</a>
      </div>
    </div>

    <div class="navigation-mobile">
      <!-- logo button -->
      <div class="navigation-mobile__logo">
        <a class="mobile-logo"></a>
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
