// Ensure console is defined
if(typeof console === 'undefined') console = {"log":function(m){}};

// Stops from scrolling to top when clicking gallery items
$.pjax.defaults.scrollTo = false;
// Make sure pjax is used for "OK" connections
$.pjax.defaults.timeout = 2000;
//
$.pjax.defaults.maxCacheLength = 0;

// Pjax links + containers to load content to
$(document).pjax('.js-pjax-container', '#js-pjax-container');
$(document).pjax('.js-pjax-project', '#js-pjax-project');
$(document).pjax('.js-pjax-post', '#js-pjax-post');
$(document).pjax('.js-pjax-contact', '#js-pjax-contact');
