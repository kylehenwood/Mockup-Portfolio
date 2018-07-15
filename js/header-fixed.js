// Simple function to fix a specified header element
const headerFixed = {
  scrollMin: 5,
  scrolled: null
}

// Fix the specified header element
function headerFix(element,fixedClass) {
  $(window).on('touchmove scroll', function(){
    console.log('FIRING');
    headerFixed.scrolled = layout.html.scrollTop() || layout.body.scrollTop();
    if (headerFixed.scrolled < headerFixed.scrollMin) {
      console.log('fixed - no');
      element.removeClass(fixedClass);
    } else {
      console.log('fixed - yes');
      element.addClass(fixedClass);
    }
  });
}

function headerUnfix(element,fixedClass) {
  element.removeClass(fixedClass);
  $(window).unbind();
}
