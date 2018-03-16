// Ensure console is defined
if(typeof console === 'undefined') console = {"log":function(m){}};


$(document).pjax('.js-navitem', '#js-pjax-container');
$(document).pjax('.js-pjax-helpLink', '#js-pjax-helpContainer');
