// Simple function to disable the scroll of the body & html elements,
// but still allow the element passed to be scrollable.
//
// Mobile IOS creates the need for this code.
const scrollLock= {
  bodyPos: null,
}

// make the body unscrollable, and the passed element scrollable.
function bodyScrollDisable(element) {
  console.log('body--locked');
  scrollLock.bodyPos = layout.html.scrollTop();
  layout.body.addClass('layout--scroll-lock');
  layout.body.ontouchend = (e) => {
      e.preventDefault();
  };

  element.removeClass('layout__overlay--scroll-lock')
  element.focus();
  element.ontouchstart = null;
  element.ontouchmove = null;
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

  layout.navigation.show();
  layout.content.show();
  layout.footer.show();

  layout.body.removeClass('layout--scroll-lock');
  layout.body.focus();
  layout.body.ontouchstart = null;
  layout.body.ontouchmove = null;

  layout.html.scrollTop(scrollLock.bodyPos);
}
