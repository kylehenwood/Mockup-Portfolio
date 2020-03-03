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
  animate: false,
  card: null
};

// animate in
$(document).on('post-in--animate',function(e){
  bodyScrollDisable(layout.post);
  postAnimateIn();
  headerFix(post.close,'post__close--scroll');
  layout.body.addClass('layout--grey');

  // scaleCard
  scaleCard(post.card);
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
  scaleCardOut();
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
  post.extras = $('.js-post-extras');
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
      //console.log("container complete");
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

  post.extras.addClass('anim--in-bot anim--delay-240');
  post.extras.one(animationEvent,function(event) {
    $(this).removeClass('anim--in-bot anim--delay-240');
  });
}

// Instant In
function postInstantIn() {
  bodyScrollSet(layout.post);
  layout.post.show();
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

  post.extras.addClass('anim--out-bot');
  post.extras.one(animationEvent,function(event) {
    $(this).removeClass('anim--out-bot');
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
