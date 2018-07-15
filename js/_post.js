// Post "Overlay"
var post = {
  container: null,
  heading: null,
  title: null,
  subheading: null,
  image: null,
  simliar: null,
  related: null,
  close: null,
  animateToPost: false,
  animateFromPost: false
};

// animate in
$(document).on('post-in',function(e){
  post.animateToPost = false;
  postBindElements();
  bodyScrollDisable(layout.post);
  postAnimateIn();
  headerFix(post.heading,'post__heading-fixed--scroll');
});
$(document).on('post-in--instant',function(e){
  postBindElements();
  postInstantIn();
  headerFix(post.heading,'post__heading-fixed--scroll');
});

// animate out
$(document).on('post-out',function(e){
  postBindElements();
  bodyScrollEnable(layout.post);
  postAnimateOut();
  headerUnfix(post.heading,'post__heading-fixed--scroll');
});

$(document).on('post-out--instant',function(e){
  postBindElements();
  postInstantOut();
  headerUnfix(post.heading,'post__heading-fixed--scroll');
});


// Bind || Unbind elements
function postBindElements() {
  post.container = $('.js-post-container');
  post.heading = $('.js-post-heading');
  post.title = $('.js-post-title');
  post.subtitle = $('.js-post-subtitle');
  post.image = $('.js-post-image');
  post.projects = $('.js-post-projects');
  post.similar = $('.js-post-similar');
  post.close = $('.js-post-close');

  post.close.click(function(){
    post.animateFromPost = true;
  });
}

function postUnbindElements() {
  post.heading.unbind();
  post.title.unbind();
  post.subtitle.unbind();
  post.image.unbind()
  post.projects.unbind();
  post.similar.unbind();
  post.close.unbind();
}

// Animate in
function postAnimateIn() {
  // show and focus the post container, focus so that on mobile
  // it is easy to scroll instead of requiring a tap to focus.
  layout.post.show();
  post.container.addClass('anim--post-in');
  post.container.one(animationEvent,function(event){
    $(this).removeClass('anim--post-in');
    bodyScrollSet(layout.post);
  });

  // Animate in gallery...
  post.title.addClass('anim--delay-280 anim--in-bot');
  post.title.one(animationEvent,function(event) {
    $(this).removeClass('anim--delay-280 anim--in-bot');
  });

  post.subtitle.addClass('anim--delay-320 anim--in-bot');
  post.subtitle.one(animationEvent,function(event) {
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

// Instant In
function postInstantIn() {
  layout.post.show();
  layout.navigation.hide();
  layout.content.hide();
}

// Animate out
function postAnimateOut() {
  //layout.post.addClass('layout__post--scroll-lock');
  // When animate-out is complete....
  post.container.addClass('anim--post-out');
  post.container.one(animationEvent,function(event){
    $(this).removeClass('anim--post-out');
    layout.post.removeClass('layout__post--scroll-lock');
    layout.post.hide();
  });


  // Animate in gallery...
  post.title.addClass('anim--delay-80 anim--out-bot');
  post.title.one(animationEvent,function(event) {
    $(this).removeClass('anim--delay-80 anim--out-bot');
    $(this).addClass('anim--hidden');
  });

  post.subtitle.addClass('anim--out-bot');
  post.subtitle.one(animationEvent,function(event) {
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


// Instant out
function postInstantOut() {
  layout.navigation.hide();
  layout.post.hide();
  layout.content.show();
}
