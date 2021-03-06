// Post "Overlay"
var post = {
  container: null,
  heading: null,
  subheading: null,
  image: null,
  simliar: null,
  related: null,
  close: null
};

// animate in
$(document).on('post-in',function(e){
  bodyScrollDisable(layout.post);
  postAnimateIn();
});

// animate out
$(document).on('post-out',function(e){
  bodyScrollEnable(layout.post);
  postAnimateOut();
});


// Bind || Unbind elements
function postBindElements() {
  post.container = $('.js-post-container');
  post.heading = $('.js-gallery-heading');
  post.subheading = $('.js-gallery-subheading');
  post.image = $('.js-gallery-image');
  post.projects = $('.js-gallery-projects');
  post.similar = $('.js-gallery-similar');
  post.close = $('.js-gallery-close');
}

function postUnbindElements() {
  post.heading.unbind();
  post.subheading.unbind();
  post.image.unbind()
  post.projects.unbind();
  post.similar.unbind();
  post.close.unbind();
}

// Animate in
function postAnimateIn() {
  postBindElements();

  // show and focus the post container, focus so that on mobile
  // it is easy to scroll instead of requiring a tap to focus.
  layout.post.show();
  post.container.addClass('anim--post-in');
  post.container.one(animationEvent,function(event){
    $(this).removeClass('anim--post-in');
    bodyScrollSet(layout.post);
  });

  // Animate in gallery...
  post.heading.addClass('anim--delay-280 anim--in-bot');
  post.heading.one(animationEvent,function(event) {
    $(this).removeClass('anim--delay-280 anim--in-bot');
  });

  post.subheading.addClass('anim--delay-320 anim--in-bot');
  post.subheading.one(animationEvent,function(event) {
    $(this).removeClass('anim--delay-320 anim--in-bot');
  });

  post.close.addClass('anim--delay-280 anim--in-bot');
  post.close.one(animationEvent,function(event) {
    $(this).removeClass('anim--delay-280 anim--in-bot');
  });

  post.image.addClass('anim--delay-160 anim--scale-in');
  post.image.one(animationEvent,function(event) {
    $(this).removeClass('anim--delay-160 anim--scale-in');
  });

  post.projects.addClass('anim--in-top anim--delay-280');
  post.projects.one(animationEvent,function(event) {
    $(this).removeClass('anim--in-top anim--delay-280');
  });

  post.similar.addClass('anim--in-top anim--delay-280');
  post.similar.one(animationEvent,function(event) {
    $(this).removeClass('anim--in-top anim--delay-280');
  });
}

// Animate out
function postAnimateOut() {
  postBindElements();

  //layout.post.addClass('layout__post--scroll-lock');
  // When animate-out is complete....
  post.container.addClass('anim--post-out');
  post.container.one(animationEvent,function(event){
    $(this).removeClass('anim--post-out');
    layout.post.removeClass('layout__post--scroll-lock');
    layout.post.hide();
  });


  // Animate in gallery...
  post.heading.addClass('anim--delay-80 anim--out-bot');
  post.heading.one(animationEvent,function(event) {
    $(this).removeClass('anim--delay-80 anim--out-bot');
    $(this).addClass('anim--hidden');
  });

  post.subheading.addClass('anim--out-bot');
  post.subheading.one(animationEvent,function(event) {
    $(this).removeClass('anim--out-bot');
    $(this).addClass('anim--hidden');
  });

  post.close.addClass('anim--delay-80 anim--out-bot');
  post.close.one(animationEvent,function(event) {
    $(this).removeClass('anim--delay-80 anim--out-bot');
    $(this).addClass('anim--hidden');
  });

  post.image.addClass('anim--scale-out');
  post.image.one(animationEvent,function(event) {
    $(this).removeClass('anim--scale-out');
    $(this).addClass('anim--hidden');
  });

  post.projects.addClass('anim--out-top');
  post.projects.one(animationEvent,function(event) {
    $(this).removeClass('anim--out-top');
    $(this).addClass('anim--hidden');
  });

  post.similar.addClass('anim--out-top');
  post.similar.one(animationEvent,function(event) {
    $(this).removeClass('anim--out-top');
    $(this).addClass('anim--hidden');
  });
}
