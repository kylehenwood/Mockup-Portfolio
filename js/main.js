// javascripts
$(document).ready(function(){
  mobileNavigation();
  smoothScroll();
  textAnimation();
  bindLayout();

  // trigger to listen to for page load
  $(document).trigger('page_load');
  $(document).on('pjax:end', function(){
    $(document).trigger('page_load');
  });
});

// Since the portfolio is powered by PJAX, these containers
// get reused alot, having the ref in one place is helpful
var layout = {
  html: null,
  body: null,
  mobile: null,
  navigation: null,
  content: null,
  footer: null,
  post: null
};

function bindLayout() {
  layout.html = $('.js-html');
  layout.body = $('.js-layout');
  layout.navigation = $('.js-layout-header');
  layout.content = $('.js-layout-content');
  layout.footer = $('.js-layout-footer');
  layout.mobile = $('.js-layout-mobile');

  layout.post = $('.js-overlay-post');
  layout.project = $('.js-overlay-project');
  layout.contact = $('.js-overlay-contact');
}


// mobile navigation
function mobileNavigation() {
  var trigger = $('.js-mobile-button');
  var navigation = $('.js-mobile-navigation');
  var header = $('.js-mobile-header');

  trigger.click(function(){
    header.toggleClass('navigation-mobile--open');
    navigation.toggleClass('navigation-mobile__navigation--visible');
  });
}




function textAnimation() {

  // - get content
  // - split content into array
  // - put each character into container div inside a span tag.

  var container = $('.js-text-animation');

  container.each(function(){
    var container = $(this);
    var textCharacters = container.html();
    var textArray = textCharacters.split('');

    // empty container
    container.html("");
    container.addClass('text-animation');

    // fill container
    for (var i = 0; i < textArray.length; i++) {
      console.log(textArray[i]);
      //textArray[i] = "<span>"+textArray[i]+"</span>";
      container.append("<span class='ta__text'>"+textArray[i]+"</span>")
    }
  });
}








// smooth scroll
function smoothScroll() {
// smooth scroll
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 200, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
}
