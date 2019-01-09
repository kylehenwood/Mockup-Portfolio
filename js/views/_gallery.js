// Gallery
var gallery = {
  heading: null,
  posts: null,
  subheading: null,
  animate: false,
  grid: null
}


// Bind || Unbind
function galleryBind() {
  gallery.heading = $('.js-gallery-heading');
  gallery.subheading = $('.js-gallery-subheading');
  gallery.posts = $('.js-pjax-post');
  gallery.grid = $('.js-gallery-grid');





  gallery.posts.click(function(){
    post.card = $(this);
    post.animate = true;
    gallery.animate = true;
  });

  setTimeout(function(){
    gallery.grid.removeClass('gallery-grid--animate-in');
    // Fluidbox init
    $('.js-fluidbox').fluidbox();
    $(window).scroll().fluidbox('close');
    $('.js-fluidbox').on('openstart.fluidbox',function(){});
  },480);
}


$(document).on('gallery-out--animate',function(e){
  galleryBind();
  galleryOut();
});
$(document).on('gallery-out--instant',function(e){
  galleryBind();
  galleryOutInstant();
});

$(document).on('gallery-in--animate',function(e){
  galleryBind();
  galleryIn();
});

$(document).on('gallery-in--instant',function(e){
  galleryBind();
  galleryInInstant();
});

// Gallery animate out
function galleryOut() {
  //console.log('gallery--out');
  layout.navigation.addClass('anim--out-top');
  layout.navigation.one(animationEvent,function(event) {
    $(this).removeClass('anim--out-top');
    $(this).hide();
  });

  // intro heading
  gallery.heading.addClass('anim--out-top');
  gallery.heading.one(animationEvent,function(event) {});

  // intro subheading
  gallery.subheading.addClass('anim--delay-40 anim--out-top');
  gallery.subheading.one(animationEvent,function(event) {});
}

function galleryOutInstant() {
  //layout.navigation.hide();
  //layout.content.hide();
}



// Gallery animate in
function galleryIn() {
  //console.log('gallery--in');

  // layout heading (nav)
  layout.navigation.show();
  layout.navigation.addClass('anim--delay-320 anim--in-top');
  layout.navigation.one(animationEvent,function(event) {
    $(this).removeClass('anim--delay-320 anim--in-top');
  });

  // TLDR heading
  //gallery.heading.removeClass('anim--out-top');
  gallery.heading.addClass('anim--delay-320 anim--in-top');
  gallery.heading.one(animationEvent,function(event) {
    $(this).removeClass('anim--delay-320 anim--in-top');
  });

  // TLDR subheading
  //gallery.subheading.removeClass('anim--delay-40 anim--out-top');
  gallery.subheading.addClass('anim--delay-280 anim--in-top');
  gallery.subheading.one(animationEvent,function(event) {
    $(this).removeClass('anim--delay-280 anim--in-top');
  });
}


function galleryInInstant() {
  layout.navigation.removeClass('anim--out-top');
  layout.navigation.show();
  gallery.heading.addClass('anim--in-bot');
  gallery.subheading.addClass('anim--in-bot anim--delay-80');

  gallery.grid.addClass('gallery-grid--animate-in');

}