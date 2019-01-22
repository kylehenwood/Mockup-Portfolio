// Ensure console is defined
let pjaxContainer = {
  isAnimating: false,
  primary: '#js-pjax-content-1',
  secondary: '#js-pjax-content-2',
  current: '#js-pjax-content-1',
  direction: 'horizontal'
}


// Set some pjax defaults
// --
// if(typeof console === 'undefined') console = {"log":function(m){}};
// Stops from scrolling to top when clicking gallery items
$.pjax.defaults.scrollTo = true; //true;
// Make sure pjax is used for "OK" connections
$.pjax.defaults.timeout = 2000;
// Set cache to 0, otherwise PJAX will remember the state of the previous action
// -- setting to 1 allows the cache to remember the scroll position of the window.
$.pjax.defaults.maxCacheLength = 0;


// bind pjax events
function pjaxBind() {

  // trigger to listen to for page load
  $(document).trigger('page_load');


  // on popstate make sure the inline scripts are ran
  $(window).on('popstate',function(event){
    console.log('pjax-popstate');

    pjaxTransition();
    $(document).trigger('page_load');
  });

  // run page load on both pop and success from pjax
  $(document).on('pjax:success',function() {
    $(document).trigger('page_load');
  });
}


// Setup
function pjaxSetup() {
  // alternate which container content is loaded into when a .js-pjax-link is clicked.
  $('.js-pjax-link').unbind();
  $('.js-pjax-link').click(function(event){
    event.preventDefault();
    const url = $(this).attr('href');
    if (pjaxContainer.current === pjaxContainer.primary) {
      $.pjax({url: url, container: pjaxContainer.secondary});
      pjaxTransition();
    } else {
      $.pjax({url: url, container: pjaxContainer.primary});
      pjaxTransition();
    }
  });


  // back buttons
  $('.js-pjax-back').click(function(event){
    event.preventDefault();
    window.history.back();
  });


  // delay click
  $('.js-pjax-link-delay').unbind();
  $('.js-pjax-link-delay').click(function(event){
    var element = $(this);
    var others = $('.js-pjax-link-delay');

    others.css({'opacity':0.4});
    element.css({'opacity':1});

    event.preventDefault();
    const url = $(this).attr('href');
    setTimeout(function(){
      if (pjaxContainer.current === pjaxContainer.primary) {
        $.pjax({url: url, container: pjaxContainer.secondary});
        pjaxTransition();
      } else {
        $.pjax({url: url, container: pjaxContainer.primary});
        pjaxTransition();
      }
    },200);
  });
}



// alternate pjax load containers on page loads
function pjaxTransition() {

  // decide which container to place content into
  // -- then trigger the animation in
  if (pjaxContainer.current === pjaxContainer.secondary) {
    pjaxContainer.current = pjaxContainer.primary;
    const containerIn = $('#js-pjax-content-1');
    const containerOut = $('#js-pjax-content-2');
    transitionAnimation(containerIn,containerOut)

  } else {
    pjaxContainer.current = pjaxContainer.secondary;
    const containerIn = $('#js-pjax-content-2');
    const containerOut = $('#js-pjax-content-1');
    transitionAnimation(containerIn,containerOut)
  }
  //console.log('container-in is '+pjaxContainer.current);
}


// Transition one container in, while transitioning the other out.
function transitionAnimation(containerIn,containerOut) {

  // lock the animating out container and fix its position.
  scrollElementLock(containerOut);
  scrollElement(containerIn);



  if (pjaxContainer.isAnimating === false) {
    pjaxContainer.isAnimating = true;
    containerIn.css({
      'opacity':0
    });

    setTimeout(function(){
      contentOut(containerOut);
    },1);

    containerOut.addClass('anim--fade-out');
    containerOut.one(animationEvent,function(){
      if (pjaxContainer.isAnimating === true) {
        containerOut.removeClass('anim--fade-out');
        containerOut.hide();
        containerOut.unbind();
        contentStopAnimation();
        containerIntro(containerIn);
      }
    });
  } else {

    contentStopAnimation();

    pjaxContainer.isAnimating = false;

    containerOut.removeClass('anim--fade-out');
    containerOut.removeClass('anim--fade-in');
    //containerOut.html('');
    containerOut.hide();
    containerOut.unbind();

    containerIn.removeClass('anim--fade-out');
    containerIn.removeClass('anim--fade-in');
    containerIn.css({
      'opacity':1
    });
  }
}


// animate X container into viewport
function containerIntro(containerIn) {
  containerIn.css({
    'opacity':1
  });
  // Animate new page in
  setTimeout(function(){
    contentIn(containerIn);
  },1);
  containerIn.addClass('anim--fade-in');
  containerIn.one(animationEvent,function(event){

    // if event was triggered by container
    // -- unbind event listener
    // -- proceed
    // console.log(containerIn);
    containerIn.removeClass('anim--fade-in');
    pjaxContainer.isAnimating = false;
  });
}


// Load URL (called after a setTimeout)
// -- used when the need arises to delay the page transition
// -- for an animation or visual purposes.
function pjaxDelay(url) {
  $.pjax({url: url, container: pjaxContainer.current})
  console.log(pjaxContainer.current);
}


// Form Submission
// -- submit a form using pjax
function pjaxForm(event) {
  $.pjax.submit(event, pjaxContainer.current);
}






// Animation Controller
// -- animate sections of content in
function contentIn(container,direction) {
  console.log('content--in');
  const z1 = container.find('.js-anim-z1');
  const z2 = container.find('.js-anim-z2');
  const z3 = container.find('.js-anim-z3');
  const z4 = container.find('.js-anim-z4');
  const z5 = container.find('.js-anim-z5');

  var direction = 'vertical';
  z5.attr({'found':'yep'});

  if (direction === 'vertical') {
    z1.addClass('anim--in-y1');
    z2.addClass('anim--in-y2');
    z3.addClass('anim--in-y3');
    z4.addClass('anim--in-y4');
    z5.addClass('anim--in-y5');
  } else {
    z1.addClass('anim--in-z1');
    z2.addClass('anim--in-z2');
    z3.addClass('anim--in-z3');
    z4.addClass('anim--in-z4');
    z5.addClass('anim--in-z5');
  }

  // remove animation classes
  // -- forseeable issue with caching on next/previous quick clicks.
  // -- eg adding in a page thats animating out
  z1.one(animationEvent,function(){
    z1.removeClass('anim--in-y1 anim--in-z1');
  });
  z2.one(animationEvent,function(){
    z2.removeClass('anim--in-y2 anim--in-z2');
  });
  z3.one(animationEvent,function(){
    z3.removeClass('anim--in-y3 anim--in-z3');
  });
  z4.one(animationEvent,function(){
    z4.removeClass('anim--in-y5 anim--in-z5');
  });
  z5.one(animationEvent,function(){
    z5.removeClass('anim--in-y5 anim--in-z5');
  });
}

// -- animate sections of content out
function contentOut(container,direction) {
  console.log('content--out');
  const z1 = container.find('.js-anim-z1');
  const z2 = container.find('.js-anim-z2');
  const z3 = container.find('.js-anim-z3');
  const z4 = container.find('.js-anim-z4');
  const z5 = container.find('.js-anim-z5');

  var direction = 'vertical';

  if (direction === 'vertical') {
    z1.addClass('anim--out-y1');
    z2.addClass('anim--out-y2');
    z3.addClass('anim--out-y3');
    z4.addClass('anim--out-y4');
    z5.addClass('anim--out-y5');
  } else {
    z1.addClass('anim--out-z1');
    z2.addClass('anim--out-z2');
    z3.addClass('anim--out-z3');
    z4.addClass('anim--out-z4');
    z5.addClass('anim--out-z5');
  }

  // remove animation classes
  // -- forseeable issue with caching on next/previous quick clicks.
  // -- eg adding in a page thats animating out
  z1.one(animationEvent,function(){
    z1.removeClass('anim--out-y1 anim--out-z1');
  });
  z2.one(animationEvent,function(){
    z2.removeClass('anim--out-y2 anim--out-z2');
  });
  z3.one(animationEvent,function(){
    z3.removeClass('anim--out-y3 anim--out-z3');
  });
  z4.one(animationEvent,function(){
    z4.removeClass('anim--out-y5 anim--out-z5');
  });
  z5.one(animationEvent,function(){
    z5.removeClass('anim--out-y5 anim--out-z5');
  });
}

// remove all z-animation classes in the DOM
function contentStopAnimation() {
  // const z1 = $('.js-anim-z1');
  // const z2 = $('.js-anim-z2');
  // const z3 = $('.js-anim-z3');
  // const z4 = $('.js-anim-z4');
  // const z5 = $('.js-anim-z5');
  //
  // z1.removeClass('anim--out-y1 anim--out-z1 anim--in-y1 anim--in-z1');
  // z2.removeClass('anim--out-y2 anim--out-z2 anim--in-y2 anim--in-z2');
  // z3.removeClass('anim--out-y3 anim--out-z3 anim--in-y3 anim--in-z3');
  // z4.removeClass('anim--out-y4 anim--out-z4 anim--in-y4 anim--in-z4');
  // z5.removeClass('anim--out-y5 anim--out-z5 anim--in-y5 anim--in-z5');
}
