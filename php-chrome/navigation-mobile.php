<div class="layout__header-mobile">
  <div class="header-mobile">
    <!-- logo button -->
    <div class="header-mobile__logo">
      <a class="mobile-logo js-navitem <?php if ($navSelectedHome) {echo'mobile-logo--active';} ?>" data-pjax="js-pjax-container" activeClass="mobile-logo--active" href="index.php"></a>
    </div>

    <!-- menu button -->
    <div class="header-mobile__button  header-mobile__button--left">
      <a class="mobile-header-button js-mobile-btn-menu">
        <span class="menu-button__close"></span>
        <span class="flat-icon icon--16 icon--menu"></span>
      </a>
    </div>

    <!-- account button -->
    <div class="header-mobile__button header-mobile__button--right">
      <a class="mobile-header-button js-mobile-btn-account">
        <span class="menu-button__close"></span>
        <span class="flat-icon icon--16 icon--user"></span>
      </a>
    </div>
  </div>
</div>


<!-- mobile menu -->
<div class="layout__mobile-menu js-mobile-menu">
  <div class="mobile-tray">
    <div class="mobile-tray__close">
      <div class="menu-close">
        <div class="menu-close__icon menu-close__icon--left js-mobile-btn-close">
          <span class="flat-icon icon--16 icon--cross"></span>
        </div>
      </div>
    </div>
    <div class="mobile-tray__navigation">
      <div class="mobile-navigation">
        <a class="mobile-navigation__item js-navitem <?php if ($navSelectedHome) { echo'mobile-navigation__item--active';} ?>" data-pjax="js-pjax-container" activeClass="mobile-navigation__item--active" href="index.php">
          Home
        </a>
        <a class="mobile-navigation__item js-navitem <?php if ($navSelectedFeatures) { echo'mobile-navigation__item--active';} ?>" data-pjax="js-pjax-container" activeClass="mobile-navigation__item--active" href="index.php?pageID=features">
          Features
        </a>
        <a class="mobile-navigation__item js-navitem <?php if ($navSelectedExamples) { echo'mobile-navigation__item--active';} ?>" data-pjax="js-pjax-container" activeClass="mobile-navigation__item--active" href="index.php?pageID=examples">
          Examples
        </a>
        <a class="mobile-navigation__item js-navitem <?php if ($navSelectedPricing) { echo'mobile-navigation__item--active';} ?>" data-pjax="js-pjax-container" activeClass="mobile-navigation__item--active" href="index.php?pageID=pricing">
          Pricing
        </a>
        <a class="mobile-navigation__item js-navitem <?php if ($navSelectedHelp) { echo'mobile-navigation__item--active';} ?>" data-pjax="js-pjax-container" activeClass="mobile-navigation__item--active" href="index.php?pageID=help">
          Help center
        </a>
      </div>
    </div>
  </div>
</div>


<!-- mobile account -->
<div class="layout__mobile-account js-mobile-account">
  <div class="mobile-tray">
    <div class="mobile-tray__close">
      <div class="menu-close">
        <div class="menu-close__icon menu-close__icon--right js-mobile-btn-close">
          <span class="flat-icon icon--16 icon--cross"></span>
        </div>
      </div>
    </div>
    <div class="mobile-tray__signup">
      <div class="mobile-tray__signup-button">
        <a class="button button--40 button--pink">Sign up<a>
      </div>
      <div class="mobile-tray__signup-or">or</div>
      <div class="mobile-tray__signup-button">
        <a class="button button--40 button--white-stroke">Log in</a>
      </div>
    </div>
    <div class="mobile-tray__navigation">
      <div class="mobile-navigation">
        <a class="mobile-navigation__item" href="index.php">
          Help center
        </a>
        <a class="mobile-navigation__item" href="index.php">
          Contact us
        </a>
      </div>
    </div>
  </div>
</div>

<!-- overlay -->
<div class="layout__mobile-overlay js-overlay"></div>
