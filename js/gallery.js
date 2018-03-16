
// gallery
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
