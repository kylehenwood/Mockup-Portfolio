// Ensure console is defined
let pjaxContainer = {
  bool: true,
  isAnimating: false,
  primary: '#js-pjax-content-1',
  secondary: '#js-pjax-content-2',
  current: '#js-pjax-content-1'
}


$(document).ready(function(){

  if(typeof console === 'undefined') console = {"log":function(m){}};

  // Stops from scrolling to top when clicking gallery items
  $.pjax.defaults.scrollTo = true; //true;
  // Make sure pjax is used for "OK" connections
  $.pjax.defaults.timeout = 2000;
  // Set cache to 0, otherwise PJAX will remember the state of the previous action
  // -- setting to 1 allows the cache to remember the scroll position of the window.
  $.pjax.defaults.maxCacheLength = 0;

  //let selectedContainer = pcontainer.current;

  // alternate pjax load containers on page loads
  $(document).on('pjax:success',function(){
    if (pjaxContainer.bool === true) {
      pjaxContainer.bool = false;
      pjaxContainer.current = pjaxContainer.primary;
      $('.js-pjax-container').removeClass('js-pjax-container-2');
      $('.js-pjax-container').addClass('js-pjax-container-1');

      const containerIn = $('#js-pjax-content-2');
      const containerOut = $('#js-pjax-content-1');
      transitionAnimation(containerIn,containerOut)

    } else {
      pjaxContainer.bool = true;
      pjaxContainer.current = pjaxContainer.secondary;
      $('.js-pjax-container').removeClass('js-pjax-container-1');
      $('.js-pjax-container').addClass('js-pjax-container-2');


      const containerIn = $('#js-pjax-content-1');
      const containerOut = $('#js-pjax-content-2');
      transitionAnimation(containerIn,containerOut)

    }
  });

  // set links to load content into container 2 first
  $('.js-pjax-container').addClass('js-pjax-container-2');

  // Pjax links + containers to load content to
  $(document).pjax('.js-pjax-container-1', pjaxContainer.primary);
  $(document).pjax('.js-pjax-container-2', pjaxContainer.secondary);

});


function transitionAnimation(containerIn,containerOut) {

  scrollElementLock(containerOut);
  scrollElement(containerIn);

  containerIn.attr({
    'data':'active'
  });
  containerOut.attr({
    'data':'inactive'
  });

  if (pjaxContainer.isAnimating === false) {
    pjaxContainer.isAnimating = true;
    containerIn.css({
      'opacity':0
    });
    containerOut.addClass('anim--out-left');
    containerOut.one(animationEvent,function(){
      if (pjaxContainer.isAnimating === true) {
        containerOut.hide();
        containerOut.removeClass('anim--out-left');
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
    containerOut.unbind();

    containerIn.removeClass('anim--out-left');
    containerIn.removeClass('anim--in-right');
    containerIn.css({
      'opacity':1
    });
  }
}

// Load URL (called after a setTimeout)
function pjaxDelay(url) {
  // if (pjaxContainer.bool === true) {
  //   pjaxContainer.bool = false;
  //   pjaxContainer.current = pjaxContainer.primary;
  // } else {
  //   pjaxContainer.bool = true;
  //   pjaxContainer.current = pjaxContainer.secondary;
  // }
  $.pjax({url: url, container: pjaxContainer.current})
  console.log(pjaxContainer.current);
}


// Form Submission
function pjaxForm(event) {
  $.pjax.submit(event, pjaxContainer.current);
}
