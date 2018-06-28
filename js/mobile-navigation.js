// Mobile navigation
// window.resize = close all
// buttons

$(document).ready(function(){

  var allowMenuClick = true;

  // Elements
  const mobileNavToggle = $('.js-mobile-menu-button');
  const mobileMenu = $('.js-mobile-menu');
  const mobileLayout = $('.js-layout');

  let mobileNavOpen = false;

  mobileNavToggle.on('click',function(){

    if (allowMenuClick === false) {
      return;
    }
    allowMenuClick = false;

    if (mobileNavOpen === true) {
      mobileNavOpen = false;

      // animOut
      mobileAnimation('out');

      // removeClasses when animate out completes.

      //mobileLayout.removeClass('layout--scroll-lock');
      //mobileMenu.removeClass('layout__mobile-menu--show');
      mobileLayout.focus();
    } else {

      mobileNavOpen = true;

      mobileAnimation('in');

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


    function mobileAnimation(animDirection) {

      // mobile-mask
      var mask = $('.js-mobile-mask');
      var maskRadius = 24;
      var docWidth = $(document).outerWidth();

      mask.attr({
        'cx':docWidth-(24+16),
        'cy':(24+16)
      });

      if (animDirection === 'in') {
        stepIn();
      } else {
        stepOut();
      }

      // // how big should the mask get
      // var radiusGoal;
      // var radiusGoalX = $(document).outerWidth()-(24+16);
      // var radiusGoalY = $(document).outerHeight()-(24+16);
      //
      // // make the goal the largest number and exceed by 20%
      // if (radiusGoalX > radiusGoalY) {
      //   radiusGoal = radiusGoalX;//*1.2;
      // } else {
      //   radiusGoal = radiusGoalY;//*1.2;
      // }


      // animation loop
      function stepIn() {

        var anim = {
          from: 24,
          to: 1000, //radiusGoal
          duration: 40,
          easing: 'easeOut'
        }

        setTimeout(function(){

          val = animateNum(anim.from,anim.to,anim.duration,anim.easing);

          mask.attr({
            'r': val.value
          });

          if (val.complete === true) {
            // complete
            allowMenuClick = true;
          } else {
            stepIn();
          }
        },10);
      }

      // animation loop
      function stepOut() {

        var anim = {
          from: 1000, //radiusGoal
          to: 24,
          duration: 40,
          easing: 'easeIn'
        }

        setTimeout(function(){

          val = animateNum(anim.from,anim.to,anim.duration,anim.easing);

          mask.attr({
            'r':val.value
          });

          if (val.complete === true) {
            // complete
            allowMenuClick = true;
            mobileLayout.removeClass('layout--scroll-lock');
            mobileMenu.removeClass('layout__mobile-menu--show');
          } else {
            stepOut();
          }
        },10);
      }
    }






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
      mobileAnimation('out');
      // mobileLayout.removeClass('layout--scroll-lock');
      // mobileMenu.removeClass('layout__mobile-menu--show');
      mobileLayout.focus();
    }
  });
});
