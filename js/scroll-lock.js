// Simple function to disable the scroll of the body & html elements,
// but still allow the element passed to be scrollable.
//

// Mobile IOS creates the need for this code.
let scrollLockx = {
  scrollPos: null,
  elementPos: null
}

// scrollableElement
// parentElement
// store scrolltop as an attribute on parentelement?


// make the body unscrollable, and the passed element scrollable.
function scrollLock(elementScroll,elementFixed) {

  scrollLockx.scrollPos = layout.html.scrollTop() || layout.body.scrollTop();
  const scrollOffset = scrollLockx.scrollPos;

  //Fixed element
  elementFixed.css({
    'position':'fixed',
    'top': scrollOffset*-1
  });
  elementFixed.attr({
    'sl-position':'fixed',
    'sl-offset':scrollOffset
  });

  //Scrollable Element
  elementScroll.show();
  //elementScroll.addClass('layout__overlay--background');
  elementScroll.css({
    'display': 'block',
    'position':'relative',
    'top':0
  });

  // scroll body to top (fixed element in the background looks as if page is still scrolled)
  layout.html.scrollTop(0);
  layout.body.scrollTop(0);

  console.log(1);
}


function scrollLockResume(elementScroll,elementFixed) {

  scrollLockx.scrollPos = layout.html.scrollTop() || layout.body.scrollTop();
  const scrollOffset = scrollLockx.scrollPos;

  let data = {
    scrollOffset: elementScroll.attr('sl-offset'),
    position: elementScroll.attr('sl-position')
  }

  //scrollableElement
  elementScroll.css({
    'position':'relative',
    'top':0
  });

  //Fixed element
  elementFixed.css({
    'display': 'none',
    'position':'fixed',
    'top': scrollOffset,
  });
  elementFixed.attr({
    'sl-position':'fixed',
    'sl-offset':scrollOffset,
  });


  // scroll page to where it should be.
  layout.html.scrollTop(data.scrollOffset);
  layout.body.scrollTop(data.scrollOffset);

  console.log(data.scrollOffset);
  console.log(2);
}
