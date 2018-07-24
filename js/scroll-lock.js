// Simple function to disable the scroll of the body & html elements,
// but still allow the element passed to be scrollable.
//
// Mobile IOS creates the need for this code.
const scrollLock= {
  scrollPos: null,
  elementPos: null
}

// make the body unscrollable, and the passed element scrollable.
function bodyScrollDisable(element) {
  //console.log('body--locked');
  scrollLock.scrollPos = layout.html.scrollTop() || layout.body.scrollTop();

  // animate in element - make element FIXED untill transition complete
  element.show();
  element.addClass('layout__overlay--scroll-lock');
  // console.log('L:'+layout.html.scrollTop());
  // console.log('B:'+layout.body.scrollTop());
  // console.log('W:'+element.outerHeight());
}

// When overlay transition complete call this function - unfixes overlay and hides content,
// scrolls window to top etc.
function bodyScrollSet(element) {
  //alert('SET');
  element.removeClass('layout__overlay--scroll-lock');
  layout.html.scrollTop(0);
  layout.body.scrollTop(0);

  layout.navigation.hide();
  layout.content.hide();
  layout.footer.hide();
}

// make the body scrollable, and the passed element unscrollable.
function bodyScrollEnable(element) {
  //alert('ENABLE');
  //console.log('body--scrollable');
  //scrollLock.elementPos = layout.html.scrollTop() || layout.body.scrollTop();
  element.addClass('layout__overlay--scroll-lock');
  element.scrollTop(scrollLock.elementPos);

  layout.navigation.show();
  layout.content.show();
  layout.footer.show();
  layout.html.scrollTop(scrollLock.scrollPos);
  layout.body.scrollTop(scrollLock.scrollPos);
}

function bodyScrollComplete(element) {
  //alert('COMPLETE');
  element.scrollTop(0);
  element.removeClass('layout__overlay--scroll-lock');
  element.hide();
}
