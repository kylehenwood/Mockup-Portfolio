// Simple function to disable the scroll of the body & html elements,
// but still allow the element passed to be scrollable.
//
// Mobile IOS creates the need for this code.
const scrollLock= {
  bodyPos: null,
  shell: null
}

// make the body unscrollable, and the passed element scrollable.
function bodyScrollDisable(element) {
  console.log('body--locked');
  scrollLock.bodyPos = layout.html.scrollTop();


  layout.body.addClass('layout--scroll-lock');
  layout.body.ontouchend = (e) => {
      e.preventDefault();
  };
  element.removeClass('layout__overlay--scroll-lock');

  scrollLock.shell = element.children();
  scrollLock.shell.removeClass('shell--scroll-lock');
  scrollLock.shell.focus();

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
    scrollLock.shell.scrollTop(0);
    scrollLock.shell.focus();
  });
}

function bodyScrollSet(element) {
  // Since setting scroll top on mobile does not seem to work....
  // layout.navigation.hide();
  // layout.content.hide();
  // layout.footer.hide();

  element.addClass('layout__overlay--background')
}

// make the body scrollable, and the passed element unscrollable.
function bodyScrollEnable(element) {
  console.log('body--scrollable');
  element.unbind();
  element.removeClass('layout__overlay--background')
  element.addClass('layout__overlay--scroll-lock');
  scrollLock.shell.addClass('shell--scroll-lock');

  layout.navigation.show();
  layout.content.show();
  layout.footer.show();

  layout.body.removeClass('layout--scroll-lock');
  layout.body.focus();
  layout.body.ontouchstart = null;
  layout.body.ontouchmove = null;

  layout.html.scrollTop(scrollLock.bodyPos);
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
}
