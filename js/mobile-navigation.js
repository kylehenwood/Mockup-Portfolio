// Mobile navigation
// window.resize = close all

$(document).ready(function(){
  // buttons
  const mobileButtonMenu = $('.js-mobile-btn-menu');
  const mobileButtonAccount = $('.js-mobile-btn-account');
  const mobileButtonClose = $('.js-mobile-btn-close');

  // trays
  const mobileTrayMenu = $('.js-mobile-menu');
  const mobileTrayAccount  = $('.js-mobile-account');

  // layout
  const layout = $('.js-layout');
  const overlay = $('.js-overlay');

  let menuOpen = false;
  let allowClicks = true;

  function closeMobileDrawer() {
    menuOpen = false;
    layout.removeClass('layout--menu-isopen');
    $(document).focus();
    if (mobileTrayMenu.hasClass('layout__mobile-menu--active')) {
      mobileTrayMenu.addClass('layout__mobile-menu--animate-out');
      // on animation finish remove class animate-out
      mobileTrayMenu.one('webkitAnimationEnd mozAnimationEnd oAnimationEnd oanimationend animationend', function() {
        mobileTrayMenu.removeClass('layout__mobile-menu--active');
        mobileTrayMenu.removeClass('layout__mobile-menu--animate-out');
        allowClicks = true;
      });
    }
    if (mobileTrayAccount.hasClass('layout__mobile-account--active')) {
      mobileTrayAccount.addClass('layout__mobile-account--animate-out');
      // on animation finish remove class animate-out
      mobileTrayAccount.one('webkitAnimationEnd mozAnimationEnd oAnimationEnd oanimationend animationend', function() {
        mobileTrayAccount.removeClass('layout__mobile-account--active');
        mobileTrayAccount.removeClass('layout__mobile-account--animate-out');
      });
    }

    closeMobileOverlay();
  }

  // open account draw --left
  function openMenuDrawer() {
    mobileOverlay();
    mobileTrayMenu.focus();
    mobileTrayMenu.addClass('layout__mobile-menu--animate-in');
    mobileTrayMenu.one('webkitAnimationEnd mozAnimationEnd oAnimationEnd oanimationend animationend', function() {
      mobileTrayMenu.removeClass('layout__mobile-menu--animate-in');
      mobileTrayMenu.addClass('layout__mobile-menu--active');
    });
  }

  // open account draw --right
  function openAccountDrawer() {
    mobileOverlay();
    mobileTrayAccount.focus();
    mobileTrayAccount.addClass('layout__mobile-account--animate-in');
    mobileTrayAccount.one('webkitAnimationEnd mozAnimationEnd oAnimationEnd oanimationend animationend', function() {
      mobileTrayAccount.removeClass('layout__mobile-account--animate-in');
      mobileTrayAccount.addClass('layout__mobile-account--active');
    });
  }

  // fade in mobile overlay
  function mobileOverlay() {
    menuOpen = true;
    allowClicks = false;
    layout.addClass('layout--menu-isopen');

    overlay.addClass('layout__mobile-overlay--animate-in');
    overlay.one('webkitAnimationEnd mozAnimationEnd oAnimationEnd oanimationend animationend', function() {
      overlay.removeClass('layout__mobile-overlay--animate-in');
      overlay.addClass('layout__mobile-overlay--active');
      allowClicks = true;
    });
  }

  function closeMobileOverlay() {
    allowClicks = false;
    overlay.addClass('layout__mobile-overlay--animate-out');
    overlay.one('webkitAnimationEnd mozAnimationEnd oAnimationEnd oanimationend animationend', function() {
      overlay.removeClass('layout__mobile-overlay--active');
      overlay.removeClass('layout__mobile-overlay--animate-out');
      allowClicks = true;
      menuOpen = false;
    });
  }


  // close menus if click not on them
  mobileTrayMenu.on('click', function(e) {
    e.stopPropagation();
  });
  mobileTrayAccount.on('click', function(e) {
    e.stopPropagation();
  });

  overlay.on('click', function (e) {
    if (menuOpen === true && allowClicks === true) {
      closeMobileDrawer();
    }
  });

  // button click events
  mobileButtonClose.click(function(){
    if (allowClicks === true) {
      closeMobileDrawer();
    }
  });
  mobileButtonMenu.click(function(){
    if (allowClicks === true) {
      openMenuDrawer();
    }
  });

  mobileButtonAccount.click(function(){
    if (allowClicks === true) {
      openAccountDrawer();
    }
  });

  // close on resize
  $(window).resize(function(){
    if (menuOpen === true) {
      closeMobileDrawer();
    }
  });

  // close on pjax complete
  window.addEventListener('complete',function(){
    if (menuOpen === true) {
      closeMobileDrawer();
    }
  });

});
