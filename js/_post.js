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
  animate: false

};

// animate in
$(document).on('post-in--animate',function(e){
  bodyScrollDisable(layout.post);
  postAnimateIn();
  headerFix(post.close,'post__close--scroll');
  layout.body.addClass('layout--grey');
});
$(document).on('post-in--instant',function(e){
  postInstantIn();
  headerFix(post.close,'post__close--scroll');
  layout.body.addClass('layout--grey');
});

// animate out
$(document).on('post-out--animate',function(e){
  bodyScrollEnable(layout.post);
  postAnimateOut();
  headerUnfix(post.close,'post__close--scroll');
  layout.body.removeClass('layout--grey');
});

$(document).on('post-out--instant',function(e){
  postInstantOut();
  headerUnfix(post.close,'post__close--scroll');
  layout.body.removeClass('layout--grey');
});


// Bind || Unbind elements
function postBind() {
  post.container = $('.js-post-container');
  post.title = $('.js-post-title');
  post.subtitle = $('.js-post-subtitle');
  post.image = $('.js-post-image');
  post.projects = $('.js-post-projects');
  post.similar = $('.js-post-similar');
  post.close = $('.js-post-close');

  post.close.click(function(){
    post.animate = true;
    gallery.animate = true;
  });
}

function postUnbind() {
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
  // PROBLEM these events propogate, and listening for event end on the container is
  // firing multiple times
  post.container.addClass('anim--post-in');
  post.container.on(animationEvent,function(event){
    if ($(event.target).hasClass('anim--post-in')) {
      console.log("container complete");
      $(this).removeClass('anim--post-in');
      $(this).unbind();
      bodyScrollSet(layout.post);
    }
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
  bodyScrollSet(layout.post);
  layout.post.show();
  layout.navigation.hide();
  layout.content.hide();
}

// Animate out
function postAnimateOut() {
  //layout.post.addClass('layout__post--scroll-lock');
  // When animate-out is complete....
  post.container.addClass('anim--post-out');
  post.container.on(animationEvent,function(event){
    if ($(event.target).hasClass('anim--post-out')) {
      $(this).removeClass('anim--post-out');
      $(this).unbind();
      bodyScrollComplete(layout.post);
    }
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
  bodyScrollEnable(layout.post);
  layout.navigation.hide();
  layout.post.hide();
  layout.content.show();
}
