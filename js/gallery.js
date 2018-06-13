// Gallery
var layoutContainer;
var layoutHeader;
var galleryContainer;

// clickables
var thumbnail;
var galleryControlNext;
var galleryControlPrev;
var galleryControlClose;
var galleryControlImage;

// intro
var introHeading;
var introSubheading;

// gallery
var galleryHeading;
var gallerySubheading;
var galleryProjects;
var gallerySimilar;


// on page load
function galleryBind() {
  gallerySetup();
  // gallery controls
  //gallery();
}


// on page leave
function galleryUnbind() {
  //alert('gallery-unbound');
  thumbnail.unbind();
  galleryControlNext.unbind();
  galleryControlPrev.unbind();
  galleryControlClose.unbind();
  galleryControlImage.unbind();
  layoutHeader.unbind();
}



// Gallery Overlay Controls
function gallery() {
  var image = $('.js-gallery-image');
  var next = $('.js-gallery-next');
  var prev = $('.js-gallery-prev');
  var newImage = image.clone();
  var galleryTransitioning = false;

  // event gallerySetupComplete();
  // -- removeClasses associated with this event

  next.click(function(){
    if (galleryTransitioning === true) {return false;}
    // slide out
    galleryTransitioning = true;
    //image.removeClass('anim--out-right anim--in-right anim--in-left');
    image.removeClass('gallery-selected__image--scale-in');

    image.addClass('anim--out-left');
    image.one(animationEvent,function(event) {
      image.removeClass('anim--out-left');
      // slide in
      setTimeout(function(){
        image.addClass('anim--in-right');
      },1);
      image.one(animationEvent,function(event) {
        image.removeClass('anim--in-right');
        galleryTransitioning = false;
      });
    });
  });

  prev.click(function(){
    if (galleryTransitioning === true) {return false;}
    // slide out
    galleryTransitioning = true;
    //image.removeClass('anim--out-left anim--in-left anim--in-right');
    image.removeClass('gallery-selected__image--scale-in');

    image.addClass('anim--out-right');
    image.one(animationEvent,function(event) {
      image.removeClass('anim--out-right');
      // slide in
      setTimeout(function(){
        image.addClass('anim--in-left');
      },1);
      image.one(animationEvent,function(event) {
        image.removeClass('anim--in-left');
        galleryTransitioning = false;
      });
    });
  });
}




// unbind & rebind TLDR page gallery
function gallerySetup() {
  layoutContainer = $('.js-layout');
  layoutHeader = $('.js-layout-header');
  galleryContainer = $('.js-gallery-overlay');

  // clickables
  thumbnail = $('.js-gallery-item');
  galleryControlNext = $('.js-gallery-next');
  galleryControlPrev = $('.js-gallery-prev');
  galleryControlClose = $('.js-gallery-close');
  galleryControlImage = $('.js-gallery-image');

  // intro
  introHeading = $('.js-intro-heading');
  introSubheading = $('.js-intro-subheading');

  // gallery
  galleryHeading = $('.js-gallery-heading');
  gallerySubheading = $('.js-gallery-subheading');
  galleryProjects = $('.js-gallery-projects');
  gallerySimilar = $('.js-gallery-similar');


  // Open Gallery
  thumbnail.click(function(){
    galleryIn();
  });

  // Close Gallery
  galleryControlClose.click(function() {
    galleryOut();
  });
}


// Animate Gallery In && Homepage out
function galleryIn() {
  // container
  layoutContainer.addClass('layout--scroll-lock');

  galleryContainer.show();
  setTimeout(function(){
    galleryContainer.addClass('layout__overlay--in');
  },1);

  // layout header (nav)
  layoutHeader.addClass('anim--out-top');
  layoutHeader.one(animationEvent,function(event) {
    //$(this).removeClass('anim--out-top');
    //$(this).hide();
  });

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
}


// Animate Gallery out && Homepage in
function galleryOut() {

  // container
  layoutContainer.removeClass('layout--scroll-lock');

  // delay because if I hide the layer too quickly the animation end event wont fire and all
  // the elements below will still have their animate out classes attached.
  galleryContainer.removeClass('layout__overlay--in');
  galleryContainer.addClass('layout__overlay--scroll-lock');

  // When animate-out is complete....
  galleryContainer.one(transitionEvent,function(event) {
    $(this).hide();
    galleryContainer.removeClass('layout__overlay--scroll-lock');
  });


  // layout heading (nav)
  layoutHeader.removeClass('anim--out-top');
  layoutHeader.addClass('anim--delay-320 anim--in-top');
  layoutHeader.one(animationEvent,function(event) {
    $(this).removeClass('anim--delay-320 anim--in-top');
  });

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
}