// Simple function to disable the scroll of the body & html elements,
// but still allow the element passed to be scrollable.
//
// Mobile IOS creates the need for this code.
const scrollLock = {
  scrollPos: null,
  elementPos: null
}

// scrollableElement
// parentElement
// store scrolltop as an attribute on parentelement?


// make the body unscrollable, and the passed element scrollable.
function bodyScrollDisable(element) {
  //console.log('body--locked');
  scrollLock.scrollPos = layout.html.scrollTop() || layout.body.scrollTop();

  layout.wrapper.addClass('layout__wrapper--fixed');
  const scrollOffset = $(window).scrollTop()*-1;

  layout.wrapper.addClass('layout__wrapper--lock');
  layout.wrapper.css({
    'top': scrollOffset
  });

  console.log(scrollOffset);


  // show overlay
  element.show();
  element.addClass('layout__overlay--background');
  element.css({
    'position':'relative',
    'top':0
  });
  //element.addClass('layout__overlay--static');




  // },1);
  // console.log('L:'+layout.html.scrollTop());
  // console.log('B:'+layout.body.scrollTop());
  // console.log('W:'+element.outerHeight());
}

// When overlay transition complete call this function - unfixes overlay and hides content,
// scrolls window to top etc.
function bodyScrollSet(element) {
  //alert('SET');
  //element.removeClass('layout__overlay--scroll-lock');
  //layout.body.addClass('layout--overlay');
}

// make the body scrollable, and the passed element unscrollable.
function bodyScrollEnable(element,wrapper) {
  //alert('ENABLE');
  //console.log('body--scrollable');
  //scrollLock.elementPos = layout.html.scrollTop() || layout.body.scrollTop();
  //element.addClass('layout__overlay--scroll-lock');
  //element.scrollTop(scrollLock.elementPos);
  const scrollOffset = $(window).scrollTop()*-1;

  element.css({
    'position':'fixed',
    'top':scrollOffset
  });
  element.hide();

  //layout.body.removeClass('layout--overlay');
  layout.html.scrollTop(scrollLock.scrollPos);
  layout.body.scrollTop(scrollLock.scrollPos);

  layout.wrapper.removeClass('layout__wrapper--lock');
  layout.wrapper.css({
    'top': 0
  });
}

// function bodyScrollComplete(element) {
//   //alert('COMPLETE');
//   element.scrollTop(0);
//   element.removeClass('layout__overlay--scroll-lock');
//   element.removeClass('layout__overlay--background');
//   element.hide();
// }
