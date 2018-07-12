<div class="layout__header js-layout-header">

  <div class="center center--1120">

    <div class="header">
      <div class="header__logo">
        <!--<a class="logo js-pjax-container <?php if ($navSelectedGallery) { echo'logo--active';} ?>" data-pjax="js-pjax-container" activeClass="logo--active" href="index.php"></a> -->

        <a class="logo"></a>
      </div>
      <div class="header__navigation">
        <div class="navigation">
          <a class="navigation__item js-pjax-container <?php if ($navSelectedGallery) { echo'navigation__item--active';} ?>" data-pjax="js-pjax-container" activeClass="navigation__item--active" href="index.php?pageID=gallery">
            <span class="navigation__item-text">TLDR</span>
            <span class="navigation__item-line"></span>
          </a>
          <span class="navigation__space"></span>
          <a class="navigation__item js-pjax-container <?php if ($navSelectedProjects) { echo'navigation__item--active';} ?>" data-pjax="js-pjax-container" activeClass="navigation__item--active" href="index.php?pageID=projects">
            <span class="navigation__item-text">Projects</span>
            <span class="navigation__item-line"></span>
          </a>
          <span class="navigation__space"></span>
          <a class="navigation__item js-pjax-container <?php if ($navSelectedAbout) { echo'navigation__item--active';} ?>" data-pjax="js-pjax-container" activeClass="navigation__item--active" href="index.php?pageID=about">
            <span class="navigation__item-text">Who am I?</span>
            <span class="navigation__item-line"></span>
          </a>
        </div>
      </div>

      <div class="header__contact">
        <a class="button-contact js-no-pjax" href="index.php?pageID=contact">Contact Me</a>
      </div>
    </div>

  </div>

</div>
