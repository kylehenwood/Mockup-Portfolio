// Mobile navigation
// window.resize = close all
// buttons

$(document).ready(function(){


  // Elements
  const mobileNavToggle = $('.js-mobile-menu-button');
  const mobileMenu = $('.js-mobile-menu');
  const mobileLayout = $('.js-layout');

  let mobileNavOpen = false;

  mobileNavToggle.click(function(){
    if (mobileNavOpen === true) {
      mobileNavOpen = false;
      mobileLayout.removeClass('layout--scroll-lock');
      mobileMenu.removeClass('layout__mobile-menu--show');
    } else {
      mobileNavOpen = true;
      mobileLayout.addClass('layout--scroll-lock');
      mobileMenu.addClass('layout__mobile-menu--show');
    }
  });


  // close menus if click not on them
  mobileMenu.on('click', function(e) {
    e.stopPropagation();
  });


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
    }
  });

  // close on pjax complete
  window.addEventListener('complete',function(){
    if (mobileNavOpen === true) {
      mobileNavOpen = false;
      mobileLayout.removeClass('layout--scroll-lock');
      mobileMenu.removeClass('layout__mobile-menu--show');
    }
  });
});

function mobileOpen() {
  console.log('open');
}
function mobileClose() {
  console.log('close');
}
