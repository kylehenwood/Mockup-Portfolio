// Ensure console is defined
let pjaxContainer = {
  bool: true,
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



let switchContainer = true;

// Setup
function pjaxSetup() {
  // set links to load content into container 2 first
  $('.js-pjax-link').click(function(event){
    event.preventDefault();
    const url = $(this).attr('href');
    if (switchContainer === true) {
      switchContainer = false;
      //pjaxContainer.current = pjaxContainer.secondary;
      $.pjax({url: url, container: pjaxContainer.secondary});
    } else {
      switchContainer = true;
      //pjaxContainer.current = pjaxContainer.primary;
      $.pjax({url: url, container: pjaxContainer.primary});
    }
  });


  // Pjax links + containers to load content to
  // $(document).pjax('.js-pjax-link-1', pjaxContainer.primary);
  // $(document).pjax('.js-pjax-link-2', pjaxContainer.secondary);
}



// alternate pjax load containers on page loads
function pjaxTransition() {

  // bool
  if (pjaxContainer.bool === true) {
    pjaxContainer.bool = false;
    pjaxContainer.current = pjaxContainer.primary;
    // $('.js-pjax-link').removeClass('js-pjax-link-2');
    // $('.js-pjax-link').addClass('js-pjax-link-1');

    const containerIn = $('#js-pjax-content-2');
    const containerOut = $('#js-pjax-content-1');
    transitionAnimation(containerIn,containerOut)

  } else {
    pjaxContainer.bool = true;
    pjaxContainer.current = pjaxContainer.secondary;
    // $('.js-pjax-link').removeClass('js-pjax-link-1');
    // $('.js-pjax-link').addClass('js-pjax-link-2');

    const containerIn = $('#js-pjax-content-1');
    const containerOut = $('#js-pjax-content-2');
    transitionAnimation(containerIn,containerOut)

  }
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
        //containerOut.html('');
        containerOut.unbind();
        $(document).trigger('container-in');
      }
    });

    $(document).one('container-in',function() {
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
    });
  } else {
    pjaxContainer.isAnimating = false;

    containerOut.removeClass('anim--out-left');
    containerOut.removeClass('anim--in-right');
    containerOut.hide();
    //containerOut.html('');
    containerOut.unbind();

    containerIn.removeClass('anim--out-left');
    containerIn.removeClass('anim--in-right');
    containerIn.css({
      'opacity':1
    });
  }
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
