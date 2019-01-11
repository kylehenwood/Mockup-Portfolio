// Post "Overlay"
var post = {
  container: null,
  heading: null,
  title: null,
  image: null,
  description: null,
  close: null,
  animate: false,
  card: null
};

// animate in
$(document).on('post-in--animate',function(e){
  postAnimateIn();
});

$(document).on('post-in--instant',function(e){
  postInstantIn();
});

// animate out
$(document).on('post-out--animate',function(e){
  postAnimateOut();
  //scaleCardOut();
});

$(document).on('post-out--instant',function(e){
  postInstantOut();
});


// Bind || Unbind elements
function postBind() {
  post.container = $('.js-post-container');
  post.heading = $('.js-post-heading');
  post.image = $('.js-post-image');
  post.description = $('.js-post-description');
  post.close = $('.js-post-close');

  post.close.click(function(event){
    post.animate = true;
    gallery.animate = true;
  });
}

function postUnbind() {
  post.heading.unbind();
  post.image.unbind()
  post.description.unbind();
}

// Animate in
function postAnimateIn() {
  // show and focus the post container, focus so that on mobile
  // it is easy to scroll instead of requiring a tap to focus.
  scrollLock(layout.post,layout.wrapper);

  // });

  // Animate in gallery...
  post.heading.addClass('anim--delay-280 anim--in-bot');
  post.heading.one(animationEvent,function(event) {
    $(this).removeClass('anim--delay-280 anim--in-bot');
  });

  post.image.addClass('anim--delay-320 anim--in-bot');
  post.image.one(animationEvent,function(event) {
    $(this).removeClass('anim--delay-320 anim--in-bot');
  });

  post.description.addClass('anim--delay-360 anim--in-bot');
  post.description.one(animationEvent,function(event) {
    $(this).removeClass('anim--delay-320 anim--in-bot');
  });

  // post.close.addClass('anim--delay-280 anim--in-bot');
  // post.close.one(animationEvent,function(event) {
  //   $(this).removeClass('anim--delay-280 anim--in-bot');
  // });
}

// Instant In
function postInstantIn() {
  scrollLock(layout.post,layout.wrapper);
}

// Animate out
function postAnimateOut() {

  // set scroll element back to wrapper
  //bodyScrollComplete(layout.post);
  scrollLockResume(layout.wrapper,layout.post);

  // Animate post out...
  post.heading.addClass('anim--delay-120 anim--out-bot');
  post.heading.one(animationEvent,function(event) {
    $(this).removeClass('anim--delay-120 anim--out-bot');
    $(this).addClass('anim--hidden');
  });

  post.image.addClass('anim--delay-80 anim--out-bot');
  post.image.one(animationEvent,function(event) {
    $(this).removeClass('anim--delay-80 anim--out-bot');
    $(this).addClass('anim--hidden');
  });

  post.description.addClass('anim--delay-40 anim--out-bot');
  post.description.one(animationEvent,function(event) {
    $(this).removeClass('anim--delay-40 anim--out-bot');
  });

  // post.close.addClass('anim--delay-80 anim--out-bot');
  // post.close.one(animationEvent,function(event) {
  //   $(this).removeClass('anim--delay-80 anim--out-bot');
  //   $(this).addClass('anim--hidden');
  // });
}


// Instant out
function postInstantOut() {
  scrollLockResume(layout.wrapper,layout.post);
  //layout.navigation.hide();
  //layout.post.hide();
  //layout.content.show();
}
