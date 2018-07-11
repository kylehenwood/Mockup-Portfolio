// Post "Overlay"
var post = {
  heading: null,
  subheading: null,
  image: null,
  simliar: null,
  related: null,
  close: null
};

// animate in
$(document).on('post-in',function(e){
  postAnimateIn();
});

// animate out
$(document).on('post-out',function(e){
  postAnimateOut();
});


// Bind || Unbind elements
function postBindElements() {
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
  console.log('post-in');
  layout.container.addClass('layout--scroll-lock');

  // show and focus the post container, focus so that on mobile
  // it is easy to scroll instead of requiring a tap to focus.
  layout.post.show();
  layout.post.focus();
  setTimeout(function(){
    layout.post.addClass('layout__overlay--in');
    layout.post.scrollTop(0);
  },1);

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
  console.log('post-out');
  layout.container.removeClass('layout--scroll-lock');
  layout.container.focus();

  // delay because if I hide the layer too quickly the animation end event wont fire and all
  // the elements below will still have their animate out classes attached.
  layout.post.removeClass('layout__overlay--in');
  layout.post.addClass('layout__overlay--scroll-lock');

  // When animate-out is complete....
  layout.post.one(transitionEvent,function(event) {
    $(this).removeClass('layout__overlay--scroll-lock');
    $(this).hide();
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
