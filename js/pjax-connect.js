// Ensure console is defined
if(typeof console === 'undefined') console = {"log":function(m){}};

// Stops from scrolling to top when clicking gallery items
$.pjax.defaults.scrollTo = false;
// Make sure pjax is used for "OK" connections
$.pjax.defaults.timeout = 2000;

// Pjax links + containers to load content to
$(document).pjax('.js-navitem', '#js-pjax-container');
$(document).pjax('.js-pjax-container', '#js-pjax-container');
$(document).pjax('.js-pjax-helpLink', '#js-pjax-helpContainer');
$(document).pjax('.js-gallery-item', '#js-pjax-gallery');
