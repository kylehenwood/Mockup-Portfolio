// Ensure console is defined
let pjaxContainer = {
  isAnimating: false,
  primary: '#js-pjax-content-1',
  secondary: '#js-pjax-content-2',
  current: '#js-pjax-content-1',
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
$.pjax.defaults.maxCacheLength = 1;


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
    containerOut.addClass('anim--out-left');
    containerOut.one(animationEvent,function(){
      if (pjaxContainer.isAnimating === true) {
        containerOut.removeClass('anim--out-left');
        containerOut.hide();
        containerOut.unbind();
        containerIntro(containerIn);
      }
    });
  } else {
    pjaxContainer.isAnimating = false;

    containerOut.removeClass('anim--out-left');
    containerOut.removeClass('anim--in-right');
    containerOut.hide();
    containerOut.unbind();

    containerIn.removeClass('anim--out-left');
    containerIn.removeClass('anim--in-right');
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
  containerIn.addClass('anim--in-right');
  containerIn.one(animationEvent,function(event){

    // if event was triggered by container
    // -- unbind event listener
    // -- proceed
    // console.log(containerIn);
    containerIn.removeClass('anim--in-right');
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
