// Simple function to disable the scroll of the body & html elements,
// but still allow the element passed to be scrollable.
//

// Lock element scroll
function scrollElementLock(element,inherit) {

  const scrollOffset = layout.html.scrollTop() || layout.body.scrollTop();

  //Fixed element
  element.css({
    'position':'fixed',
    'z-index':50,
    'top': (scrollOffset*-1)

  });
  element.attr({
    'sl-offset':scrollOffset
  });

  //console.log(scrollOffset)
  //if (inherit === true) {
    layout.html.scrollTop(0);
    layout.body.scrollTop(0);
  // } else {
  //   layout.html.scrollTop(scrollOffset);
  //   layout.body.scrollTop(scrollOffset);
  // }
}


// Scrollable Element
// Selected element is set to position relative
function scrollElement(element,inherit) {

  const scrollPreset = element.attr('sl-offset');

  //alert(inherit);

  //element.show();
  element.css({
    'display': 'block',
    'position':'relative',
    'z-index':55,
    'top':0
  });

  //console.log(scrollPreset);

  //if (inherit === false) {
    layout.html.scrollTop(0);
    layout.body.scrollTop(0);
  // } else {
  //   layout.html.scrollTop(scrollPreset);
  //   layout.body.scrollTop(scrollPreset);
  // }
}
