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
  scrollLock(layout.mobile,layout.wrapper);
  layout.body.addClass('layout--white');
}
function closeMobileMenu() {
  mobileOpen = false;;
  scrollLockResume(layout.wrapper,layout.mobile);
  layout.mobile.hide();
  layout.body.removeClass('layout--white');
}
