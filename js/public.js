// Public Sitshot website javascript

$(document).ready(function(){
  banner();
  logoAnimate();
  mobileNavigation();
  featuresPage();
  howItWorks();
});

// banner
function banner() {
  var bannerMock;
  if(!$('.js-banner-mock')){
    return false;
  } else {
    bannerMock = $('.js-banner-mock');
  }

  setTimeout(function(){
    bannerMock.addClass('banner-mockup--animate');
  },200);
}


// logo animate
function logoAnimate() {
  var elem = $('.js-header-logo');
  var animate = true;

  elem.mouseenter(function(){

    if (animate === true) {
      animate = false;
      setTimeout(function(){
        animate = true;
      },1000);
    } else {
      return false;
    }

    var newItem = $(this).clone(true);
    elem.before(newItem);
    elem.remove();
    elem = newItem;

  });
}

// mobile navigation
function mobileNavigation() {
  var trigger = $('.js-mobile-button');
  var navigation = $('.js-mobile-navigation');

  trigger.click(function(){
    navigation.toggleClass('header-mobile__navigation--visible');
  });
}


// features
function featuresPage() {
}


// How it works
function howItWorks() {

  //alert('working');

    var shareTrigger = $('.js-svg-share');
    var shareAnimating = false;

    shareTrigger.mouseenter(function(){
        if (shareAnimating === false) {
            shareTrigger.addClass('svg-share--animate');
            shareAnimating = true;
            setTimeout(function(){
                shareAnimating = false;
                shareTrigger.removeClass('svg-share--animate');
            },5000);
        }
        return false;
    });

}

