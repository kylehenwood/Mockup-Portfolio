<div class="layout__navigation-mobile">
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


<!-- mobile menu -->
<div class="layout__mobile-menu js-mobile-menu">

  <div class="mobile-tray">
    <div class="mobile-tray__transition"></div>
    <div class="mobile-tray__header">
      <div class="navigation-mobile">
      <!-- logo button -->
      <div class="navigation-mobile__logo">
        <a class="mobile-logo mobile-logo--dark"></a>
      </div>
      <!-- menu button -->
      <div class="navigation-mobile__button">
        <a class="mobile-header-button mobile-header-button--white js-mobile-menu-button">
          <span class="flat-icon icon--16 icon--cross"></span>
        </a>
      </div>
    </div>
  </div>
  <div class="mobile-tray__navigation">

    <ul class="mobile-navigation">
      <li class="mobile-navigation__item anim--in-bot anim--delay-40">
        <a class="mobile-navitem js-pjax-container <?php if ($navSelectedGallery) { echo'mobile-navitem--active';} ?>" data-pjax="js-pjax-container" activeClass="mobile-navitem--active" href="index.php?pageID=gallery">
          <span class="mobile-navitem__icon"><span class="flat-icon icon--16 icon--arrow-right"></span></span>
          <span class="mobile-navitem__text">TLDR</span>
        </a>
      </li>
      <li class="mobile-navigation__item anim--in-bot anim--delay-80">
        <a class="mobile-navitem js-pjax-container <?php if ($navSelectedProjects) { echo'mobile-navitem--active';} ?>" data-pjax="js-pjax-container" activeClass="mobile-navitem--active" href="index.php?pageID=projects">
          <span class="mobile-navitem__icon"><span class="flat-icon icon--16 icon--arrow-right"></span></span>
          <span class="mobile-navitem__text">Projects</span>
        </a>
      </li>
      <li class="mobile-navigation__item anim--in-bot anim--delay-120">
        <a class="mobile-navitem js-pjax-container <?php if ($navSelectedAbout) { echo'mobile-navitem--active';} ?>" data-pjax="js-pjax-container" activeClass="mobile-navitem--active" href="index.php?pageID=about">
          <span class="mobile-navitem__icon"><span class="flat-icon icon--16 icon--arrow-right"></span></span>
          <span class="mobile-navitem__text">About me</span>
        </a>
      </li>
    </ul>

    <div class="mobile-contact">
      <div class="mobile-contact__border anim--in-bot anim--delay-160"></div>
      <div class="mobile-contact__heading anim--in-bot anim--delay-200">Get in touch?</div>
      <a class="mobile-contact__link anim--in-bot anim--delay-240 <?php if ($navSelectedContact) { echo'mobile-contact__link--active';} ?>" data-pjax="js-pjax-container" activeClass="mobile-contact__link--active" href="index.php?pageID=contact">
        Contact me
      </a>
    </div>
  </div>
</div>


</div>


<!-- overlay -->
