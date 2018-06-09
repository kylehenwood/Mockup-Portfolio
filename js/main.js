// javascripts
$(document).ready(function(){
  mobileNavigation();
  galleryToggle();
  smoothScroll();
  gallery();
  textAnimation();
});


function galleryToggle() {

  var galleryOpen = false;
  var thumbnail = $('.js-gallery-item');

  var pageContainer = $('.js-page-container');
  var galleryContainer = $('.js-gallery-container');
  galleryContainer.hide();

  // intro
  var introHeading = $('.js-intro-heading');
  var introSubheading = $('.js-intro-subheading');
  // gallery
  var galleryHeading = $('.js-gallery-heading');
  var gallerySubheading = $('.js-gallery-subheading');
  var galleryControlNext = $('.js-gallery-next');
  var galleryControlPrev = $('.js-gallery-prev');
  var galleryControlClose = $('.js-gallery-close');
  var galleryControlImage = $('.js-gallery-image');
  var galleryProjects = $('.js-gallery-projects');
  var gallerySimilar = $('.js-gallery-similar');

  thumbnail.click(function(){

    // container
    pageContainer.addClass('page--fullscreen');
    galleryContainer.show();

    // intro heading
    introHeading.addClass('anim--out-top');
    introHeading.one(animationEvent,function(event) {
      $(this).removeClass('anim--out-top');
      $(this).hide();
    });

    // intro subheading
    introSubheading.addClass('anim--delay-40 anim--out-top');
    introSubheading.one(animationEvent,function(event) {
      $(this).removeClass('anim--delay-40 anim--out-top');
      $(this).hide();
    });

    // Animate in gallery...
    var classes = 'anim--delay-280 anim--in-bot';
    galleryHeading.show();
    galleryHeading.addClass(classes);
    galleryHeading.one(animationEvent,function(event) {
      $(this).removeClass('anim--delay-280 anim--in-bot');
    });

    gallerySubheading.show();
    gallerySubheading.addClass('anim--delay-320 anim--in-bot');
    gallerySubheading.one(animationEvent,function(event) {
      $(this).removeClass('anim--delay-320 anim--in-bot');
    });

    galleryControlClose.show();
    galleryControlClose.addClass('anim--delay-280 anim--in-bot');
    galleryControlClose.one(animationEvent,function(event) {
      $(this).removeClass('anim--delay-280 anim--in-bot');
    });

    galleryControlPrev.show();
    galleryControlPrev.addClass('anim--delay-320 anim--in-right');
    galleryControlPrev.one(animationEvent,function(event) {
      $(this).removeClass('anim--delay-320 anim--in-right');
    });

    galleryControlNext.show();
    galleryControlNext.addClass('anim--delay-320 anim--in-left');
    galleryControlNext.one(animationEvent,function(event) {
      $(this).removeClass('anim--delay-320 anim--in-left');
    });

    galleryControlImage.show();
    galleryControlImage.addClass('anim--delay-160 anim--scale-in');
    galleryControlImage.one(animationEvent,function(event) {
      $(this).removeClass('anim--delay-160 anim--scale-in');
    });

    galleryProjects.show();
    galleryProjects.addClass('anim--in-right anim--delay-320');
    galleryProjects.one(animationEvent,function(event) {
      $(this).removeClass('anim--in-right anim--delay-320');
    });

    gallerySimilar.show();
    gallerySimilar.addClass('anim--in-right anim--delay-320');
    gallerySimilar.one(animationEvent,function(event) {
      $(this).removeClass('anim--in-right anim--delay-320');
    });
  });


  // Close Gallery
  galleryControlClose.click(function() {

    // container
    pageContainer.removeClass('page--fullscreen');
    pageContainer.one(animationEvent,function(event) {
      //galleryContainer.hide();
    });

    setTimeout(function(){
      galleryContainer.hide();
    },1000);

    // intro heading
    introHeading.show();
    introHeading.addClass('anim--delay-320 anim--in-top');
    introHeading.one(animationEvent,function(event) {
      $(this).removeClass('anim--delay-320 anim--in-top');
    });

    // intro subheading
    introSubheading.show();
    introSubheading.addClass('anim--delay-280 anim--in-top');
    introSubheading.one(animationEvent,function(event) {
      $(this).removeClass('anim--delay-280 anim--in-top');
    });

    // Animate in gallery...
    galleryHeading.addClass('anim--delay-80 anim--out-bot');
    galleryHeading.one(animationEvent,function(event) {
      $(this).removeClass('anim--delay-80 anim--out-bot');
      $(this).hide();
    });

    gallerySubheading.addClass('anim--out-bot');
    gallerySubheading.one(animationEvent,function(event) {
      $(this).removeClass('anim--out-bot');
      $(this).hide();
    });

    galleryControlClose.addClass('anim--delay-80 anim--out-bot');
    galleryControlClose.one(animationEvent,function(event) {
      $(this).removeClass('anim--delay-80 anim--out-bot');
      $(this).hide();
    });

    galleryControlPrev.addClass('anim--out-right');
    galleryControlPrev.one(animationEvent,function(event) {
      $(this).removeClass('anim--out-right');
      $(this).hide();
    });

    galleryControlNext.show();
    galleryControlNext.addClass('anim--out-left');
    galleryControlNext.one(animationEvent,function(event) {
      $(this).removeClass('anim--out-left');
      $(this).hide();
    });

    galleryControlImage.addClass('anim--scale-out');
    galleryControlImage.one(animationEvent,function(event) {
      $(this).removeClass('anim--scale-out');
      $(this).hide();
    });

    galleryProjects.addClass('anim--out-right');
    galleryProjects.one(animationEvent,function(event) {
      $(this).removeClass('anim--out-right');
      $(this).hide();
    });

    gallerySimilar.addClass('anim--out-right');
    gallerySimilar.one(animationEvent,function(event) {
      $(this).removeClass('anim--out-right');
      $(this).hide();
    });

  });

}

// mobile navigation
function mobileNavigation() {
  var trigger = $('.js-mobile-button');
  var navigation = $('.js-mobile-navigation');
  var header = $('.js-mobile-header');

  trigger.click(function(){
    header.toggleClass('header-mobile--open');
    navigation.toggleClass('header-mobile__navigation--visible');
  });
}








function textAnimation() {

  // - get content
  // - split content into array
  // - put each character into container div inside a span tag.

  var container = $('.js-text-animation');

  container.each(function(){
    var container = $(this);
    var textCharacters = container.html();
    var textArray = textCharacters.split('');

    // empty container
    container.html("");
    container.addClass('text-animation');
    
    // fill container
    for (var i = 0; i < textArray.length; i++) {
      console.log(textArray[i]);
      //textArray[i] = "<span>"+textArray[i]+"</span>";
      container.append("<span class='ta__text'>"+textArray[i]+"</span>")
    }
  });
}








// smooth scroll
function smoothScroll() {
// smooth scroll
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 200, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
}
