// Simple function to disable the scroll of the body & html elements,
// but still allow the element passed to be scrollable.
//
// Mobile IOS creates the need for this code.
const scrollLock= {
  html: '',
  body: '',
  overlay: '',
  bodyPos: null,
}

// make the body unscrollable, and the passed element scrollable.
function bodyScrollDisable(element) {
  console.log('body--locked');
  //scrollLock.bodyPos = layout.html.scrollTop();
  //layout.html.addClass('html--scroll-lock');
  //layout.html.scrollTop(scrollLock.bodyPos);
  layout.body.addClass('layout--scroll-lock');
  layout.body.ontouchend = (e) => {
      e.preventDefault();
  };

  element.focus;
  element.ontouchstart = null;
  element.ontouchmove = null;
  // call on every scroll?
  element.on('touchmove scroll', function(){
    var allowScroll = isElementScrollMax(element);
    console.log(allowScroll);
    if(allowScroll === true) {
      element.ontouchstart = null;
      element.ontouchmove = null;
    } else {
      element.ontouchstart = (e) => {
        e.preventDefault();
      };
      element.ontouchmove = (e) => {
        e.preventDefault();
      };
    }
  });
}


// on scroll, check to see if at scroll max
function isElementScrollMax(element) {
  // setting the cacluated variables every call is time consuming,
  // look at storing these and updating on resize.
  var amountScrolled = element.scrollTop();
  var elementHeight = element.outerHeight();
  var contentHeight = element.children().outerHeight();
  var scrollMin = 0;
  var scrollMax = Math.round(contentHeight - elementHeight);

  if (amountScrolled === scrollMin || amountScrolled === scrollMax) {
    // prevent default
    // console.log('NOSCROLL');
    return false;
  } else {
    // carry on as normal
    // console.log('SCROLL');
    return true;
  }
  //console.log(amountScrolled+',scrollMax:'+scrollMax);
}


// make the body scrollable, and the passed element unscrollable.
function bodyScrollEnable(element) {
  console.log('body--scrollable');
  element.unbind();

  //layout.html.removeClass('html--scroll-lock');
  //layout.html.scrollTop(scrollLock.bodyPos);
  layout.body.removeClass('layout--scroll-lock');
  layout.body.focus();
  layout.body.ontouchstart = null;
  layout.body.ontouchmove = null;
}
