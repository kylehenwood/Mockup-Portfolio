// Mobile navigation
// window.resize = close all
// buttons

$(document).ready(function(){


  // Elements
  const mobileNavToggle = $('.js-mobile-menu-button');
  const mobileMenu = $('.js-mobile-menu');
  const mobileLayout = $('.js-layout');

  let mobileNavOpen = false;

  mobileNavToggle.on('click',function(){

    if (mobileNavOpen === true) {

      // remove classes when animate out completes.
      mobileNavOpen = false;
      mobileLayout.removeClass('layout--scroll-lock');
      mobileMenu.removeClass('layout__mobile-menu--show');
      mobileLayout.focus();
    } else {

      // remove classes when animate out completes.
      mobileNavOpen = true;
      mobileLayout.addClass('layout--scroll-lock');
      mobileMenu.addClass('layout__mobile-menu--show');
      mobileMenu.focus();
    }
  });



  // close on resize
  $(window).resize(function(){
    if (mobileNavOpen === true) {
      mobileNavOpen = false;
      mobileLayout.removeClass('layout--scroll-lock');
      mobileMenu.removeClass('layout__mobile-menu--show');
      mobileMenu.focus();
    }
  });

  // close on pjax complete
  $(window).on('pjax:success',function(){
    if (mobileNavOpen === true) {
      mobileNavOpen = false;
      mobileLayout.removeClass('layout--scroll-lock');
      mobileMenu.removeClass('layout__mobile-menu--show');
      mobileLayout.focus();
    }
  });
});
