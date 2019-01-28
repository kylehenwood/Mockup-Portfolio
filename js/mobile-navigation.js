// Mobile navigation
let mobileOpen = false;

$(document).ready(function(){

  // Elements
  const mobileMenuButton = $('.js-mobile-menu-button');

  mobileMenuButton.on('click',function(){
    if (mobileOpen === true) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  });


  // close on pjax complete
  $(window).on('pjax:success',function(){
    if (mobileOpen === true) {
      closeMobileMenu();
    }
  });
  // close on resize
  $(window).resize(function(){
    if (mobileOpen === true) {
      closeMobileMenu();
    }
  });
});


// open || close
function openMobileMenu() {
  mobileOpen = true;
  layout.mobile.fadeIn();
}
function closeMobileMenu() {
  mobileOpen = false;
  layout.mobile.fadeOut();
}
