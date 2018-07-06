// Gallery
var animateFromPost = false;
var gallery = {
  heading: null,
  subheading: null
}

// Bind || Unbind
function galleryBind() {
  gallery.heading = $('.js-intro-heading');
  gallery.subheading = $('.js-intro-subheading');
}
function galleryUnbind() {
  gallery.heading.unbind();
  gallery.subheading.unbind();
}


$(document).on('gallery-animate-to-post',function(e){
  galleryAnimateToPost();
});

$(document).on('gallery-animate-from-post',function(e){
  galleryAnimateFromPost();
});



// Gallery animate out
function galleryAnimateToPost () {
  console.log('tldr--out');

  layout.navigation.one(animationEvent,function(event) {
    $(this).removeClass('anim--out-top');
    $(this).addClass('anim--hidden');
  });

  // intro heading
  gallery.heading.addClass('anim--out-top');
  gallery.heading.one(animationEvent,function(event) {
    $(this).removeClass('anim--out-top');
  });

  // intro subheading
  gallery.subheading.addClass('anim--delay-40 anim--out-top');
  gallery.subheading.one(animationEvent,function(event) {
    $(this).removeClass('anim--delay-40 anim--out-top');
  });
}


// Gallery animate in
function galleryAnimateFromPost() {
  console.log('tldr--in');

  // layout heading (nav)
  layout.navigation.removeClass('anim--hidden');
  layout.navigation.addClass('anim--delay-320 anim--in-top');
  layout.navigation.one(animationEvent,function(event) {
    console.log('working');
    $(this).removeClass('anim--delay-320 anim--in-top');
  });

  // TLDR heading
  gallery.heading.addClass('anim--delay-320 anim--in-top');
  gallery.heading.one(animationEvent,function(event) {
    $(this).removeClass('anim--delay-320 anim--in-top');
  });

  // TLDR subheading
  gallery.subheading.addClass('anim--delay-280 anim--in-top');
  gallery.subheading.one(animationEvent,function(event) {
    $(this).removeClass('anim--delay-280 anim--in-top');
  });
}
