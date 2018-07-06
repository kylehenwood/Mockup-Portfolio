var layoutContainer;

// Post "Overlay"
var postElements = {
  heading: null,
  subheading: null,
  image: null,
  simliar: null,
  related: null,
  close: null
};

// animate in
$(document).on('post-in',function(e){
  console.log('post--in');
  postBindElements();
  postAnimateIn();
});

// animate out
$(document).on('post-out',function(e){
  console.log('post--out');
  postAnimateOut();
  postUnbindElements();
});


// Bind || Unbind elements
function postBindElements() {
  postElements.heading = $('.js-gallery-heading');
  postElements.subheading = $('.js-gallery-subheading');
  postElements.image = $('.js-gallery-image');
  postElements.projects = $('.js-gallery-projects');
  postElements.similar = $('.js-gallery-similar');
  postElements.close = $('.js-gallery-close');
}

function postUnbindElements() {
  postElements.heading.unbind();
  postElements.subheading.unbind();
  postElements.image.unbind()
  postElements.projects.unbind();
  postElements.similar.unbind();
  postElements.close.unbind();
}


// Animate in
function postAnimateIn() {

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
  postElements.heading.addClass('anim--delay-280 anim--in-bot');
  postElements.heading.one(animationEvent,function(event) {
    $(this).removeClass('anim--delay-280 anim--in-bot');
  });

  postElements.subheading.addClass('anim--delay-320 anim--in-bot');
  postElements.subheading.one(animationEvent,function(event) {
    $(this).removeClass('anim--delay-320 anim--in-bot');
  });

  postElements.close.addClass('anim--delay-280 anim--in-bot');
  postElements.close.one(animationEvent,function(event) {
    $(this).removeClass('anim--delay-280 anim--in-bot');
  });

  postElements.image.addClass('anim--delay-160 anim--scale-in');
  postElements.image.one(animationEvent,function(event) {
    $(this).removeClass('anim--delay-160 anim--scale-in');
  });

  postElements.projects.addClass('anim--in-top anim--delay-280');
  postElements.projects.one(animationEvent,function(event) {
    $(this).removeClass('anim--in-top anim--delay-280');
  });

  postElements.similar.addClass('anim--in-top anim--delay-280');
  postElements.similar.one(animationEvent,function(event) {
    $(this).removeClass('anim--in-top anim--delay-280');
  });
}

// Animate out
function postAnimateOut() {

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
  postElements.heading.addClass('anim--delay-80 anim--out-bot');
  postElements.heading.one(animationEvent,function(event) {
    $(this).removeClass('anim--delay-80 anim--out-bot');
    $(this).addClass('anim--hidden');
  });

  postElements.subheading.addClass('anim--out-bot');
  postElements.subheading.one(animationEvent,function(event) {
    $(this).removeClass('anim--out-bot');
    $(this).addClass('anim--hidden');
  });

  postElements.close.addClass('anim--delay-80 anim--out-bot');
  postElements.close.one(animationEvent,function(event) {
    $(this).removeClass('anim--delay-80 anim--out-bot');
    $(this).addClass('anim--hidden');
  });

  postElements.image.addClass('anim--scale-out');
  postElements.image.one(animationEvent,function(event) {
    $(this).removeClass('anim--scale-out');
    $(this).addClass('anim--hidden');
  });

  postElements.projects.addClass('anim--out-top');
  postElements.projects.one(animationEvent,function(event) {
    $(this).removeClass('anim--out-top');
    $(this).addClass('anim--hidden');
  });

  postElements.similar.addClass('anim--out-top');
  postElements.similar.one(animationEvent,function(event) {
    $(this).removeClass('anim--out-top');
    $(this).addClass('anim--hidden');
  });
}
