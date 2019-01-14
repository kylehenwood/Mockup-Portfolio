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
  scrollElementLock(layout.wrapper);
  scrollElement(layout.mobile,false);
  layout.body.addClass('layout--white');
}
function closeMobileMenu() {
  mobileOpen = false;
  scrollElementLock(layout.mobile);
  scrollElement(layout.wrapper,true);
  scrollElementHide(layout.mobile);
  layout.body.removeClass('layout--white');
}
