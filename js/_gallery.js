// Gallery
var gallery = {
  heading: null,
  posts: null,
  subheading: null,
}


// Bind || Unbind
function galleryBind() {
  gallery.heading = $('.js-gallery-heading');
  gallery.subheading = $('.js-gallery-subheading');
  gallery.posts = $('.js-pjax-post');

  gallery.posts.click(function(){
    post.animateToPost = true;
    console.log('ANIMATE TO POST');
  });
}

$(document).on('gallery-out',function(e){
  galleryBind();
  galleryOut();
});
$(document).on('gallery-out--instant',function(e){
  galleryBind();
  galleryOutInstant();
});

$(document).on('gallery-in',function(e){
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
  layout.navigation.hide();
  layout.content.hide();
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
  gallery.heading.removeClass('anim--out-top');
  gallery.subheading.removeClass('anim--delay-40 anim--out-top');
}
