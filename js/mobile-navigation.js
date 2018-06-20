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
      mobileNavOpen = false;
      mobileLayout.removeClass('layout--scroll-lock');
      mobileMenu.removeClass('layout__mobile-menu--show');
      mobileLayout.focus();
    } else {
      mobileNavOpen = true;
      mobileLayout.addClass('layout--scroll-lock');
      mobileMenu.addClass('layout__mobile-menu--show');
      mobileMenu.focus();
    }
  });


  // close menus if click not on them
  // mobileMenu.on('click', function(e) {
  //   e.stopPropagation();
  // });


  // button click events
  // mobileButtonClose.click(function(){
  //   if (allowClicks === true) {
  //     closeMobileDrawer();
  //   }
  // });
  // mobileButtonMenu.click(function(){
  //   if (allowClicks === true) {
  //     openMenuDrawer();
  //   }
  // });

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
