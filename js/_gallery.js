// Gallery
var gallery = {
  heading: null,
  posts: null,
  subheading: null,
  animateFromPost: false
}


// Bind || Unbind
function galleryBind() {
  gallery.heading = $('.js-intro-heading');
  gallery.subheading = $('.js-intro-subheading');
}

$(document).on('gallery-out',function(e){
  gallery.animateFromPost = true;
  galleryBind();
  galleryOut();
});

$(document).on('gallery-in',function(e){
  galleryBind();
  galleryIn();
});

// Gallery animate out
function galleryOut() {
  console.log('gallery--out');

  layout.navigation.addClass('anim--out-top');
  layout.navigation.one(animationEvent,function(event) {});

  // intro heading
  gallery.heading.addClass('anim--out-top');
  gallery.heading.one(animationEvent,function(event) {});

  // intro subheading
  gallery.subheading.addClass('anim--delay-40 anim--out-top');
  gallery.subheading.one(animationEvent,function(event) {});
}


// Gallery animate in
function galleryIn() {
  console.log('gallery--in');

  // layout heading (nav)
  layout.navigation.removeClass('anim--out-top');
  layout.navigation.addClass('anim--delay-320 anim--in-top');
  layout.navigation.one(animationEvent,function(event) {
    $(this).removeClass('anim--delay-320 anim--in-top');
  });

  // TLDR heading
  gallery.heading.removeClass('anim--out-top');
  gallery.heading.addClass('anim--delay-320 anim--in-top');
  gallery.heading.one(animationEvent,function(event) {
    $(this).removeClass('anim--delay-320 anim--in-top');
  });

  // TLDR subheading
  gallery.subheading.removeClass('anim--delay-40 anim--out-top');
  gallery.subheading.addClass('anim--delay-280 anim--in-top');
  gallery.subheading.one(animationEvent,function(event) {
    $(this).removeClass('anim--delay-280 anim--in-top');
  });
}
