// Mobile navigation
// window.resize = close all
// buttons

$(document).ready(function(){

  // Elements
  const mobileNavToggle = $('.js-mobile-menu-button');

  let mobileNavOpen = false;

  mobileNavToggle.on('click',function(){

    if (mobileNavOpen === true) {

      // remove classes when animate out completes.
      mobileNavOpen = false;
      layout.mobile.removeClass('layout__mobile-menu--show');
      bodyScrollEnable(layout.mobile);

    } else {

      // remove classes when animate out completes.
      mobileNavOpen = true;
      layout.mobile.addClass('layout__mobile-menu--show');
      bodyScrollDisable(layout.mobile);

    }
  });

  // close on pjax complete
  $(window).on('pjax:success',function(){
    if (mobileNavOpen === true) {
      mobileNavOpen = false;
      bodyScrollEnable(layout.mobile);
      layout.mobile.removeClass('layout__mobile-menu--show');
      layout.body.focus();
    }
  });
});
