// Post "Overlay"
var post = {
  container: null,
  heading: null,
  title: null,
  image: null,
  description: null,
  close: null,
  animate: false,
  parent: null
};

// animate in
$(document).on('post-in--animate',function(e){
  postBind();
  postAnimateIn();
});

$(document).on('post-in--instant',function(e){
  postBind();
  postInstantIn();
});

// animate out
$(document).on('post-out--animate',function(e){
  postAnimateOut();
  //scaleCardOut();
});

$(document).on('post-out--instant',function(e){
  //postInstantOut();
});


// Bind || Unbind elements
function postBind() {
  post.container = $('.js-post-container');
  post.heading = $('.js-post-heading');
  post.image = $('.js-post-image');
  post.description = $('.js-post-description');
  post.close = $('.js-post-close');

  post.close.click(function(event){

    $(document).trigger('post-out--animate');

    if (window.history.replaceState) {
       //prevents browser from storing history with each change:
       window.history.replaceState('statedata', 'title', 'http://localhost:8888/Mockup-Portfolio/index.php?pageID=gallery');
    }
  });
}



// Animate in
function postAnimateIn() {
  // show and focus the post container, focus so that on mobile
  // it is easy to scroll instead of requiring a tap to focus.
  //scrollLock(layout.post,layout.wrapper);
  layout.post.show();
  scrollElementLock(post.parent,true);
  scrollElement(layout.post,false);


  // // Animate in gallery...
  // post.heading.addClass('anim--delay-280 anim--in-bot');
  // post.heading.one(animationEvent,function(event) {
  //   $(this).removeClass('anim--delay-280 anim--in-bot');
  // });
  //
  // post.image.addClass('anim--delay-320 anim--in-bot');
  // post.image.one(animationEvent,function(event) {
  //   $(this).removeClass('anim--delay-320 anim--in-bot');
  // });
  //
  // post.description.addClass('anim--delay-360 anim--in-bot');
  // post.description.one(animationEvent,function(event) {
  //   $(this).removeClass('anim--delay-360 anim--in-bot');
  // });

  // post.close.addClass('anim--delay-280 anim--in-bot');
  // post.close.one(animationEvent,function(event) {
  //   $(this).removeClass('anim--delay-280 anim--in-bot');
  // });
}

// Instant In
function postInstantIn() {
  //scrollLock(layout.post,layout.wrapper);
}

// Animate out
function postAnimateOut() {

  // set scroll element back to parent
  scrollElementLock(layout.post,true);
  scrollElement(post.parent,true);
  scrollElementHide(layout.post);

  // // Animate post out...
  // post.heading.addClass('anim--delay-160 anim--out-bot');
  // post.heading.one(animationEvent,function(event) {
  //   $(this).removeClass('anim--delay-160 anim--out-bot');
  //   $(this).addClass('anim--hidden');
  // });
  //
  // post.image.addClass('anim--delay-120 anim--out-bot');
  // post.image.one(animationEvent,function(event) {
  //   $(this).removeClass('anim--delay-120 anim--out-bot');
  //   $(this).addClass('anim--hidden');
  // });
  //
  // post.description.addClass('anim--delay-40 anim--out-bot');
  // post.description.one(animationEvent,function(event) {
  //   $(this).removeClass('anim--delay-40 anim--out-bot');
  //   $(this).addClass('anim--hidden');
  //
  //   scrollElementHide(layout.post);
  //
  // });
}


// Instant out
function postInstantOut() {
  //scrollLockResume(layout.wrapper,layout.post);
}
