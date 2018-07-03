// Ensure console is defined
if(typeof console === 'undefined') console = {"log":function(m){}};


$.pjax.defaults.scrollTo = false;

$(document).pjax('.js-navitem', '#js-pjax-container');
$(document).pjax('.js-pjax-helpLink', '#js-pjax-helpContainer');
$(document).pjax('.js-gallery-item', '#js-pjax-gallery');
