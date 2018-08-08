// clickables
var card = {
  orig: null,
  clone: null,
  styles: null,
  grid: null
};

var image = {
  orig: null,
  container: null
}

// on page load
function scaleCard(elem) {
  console.log('-----');
  // Open Gallery
  elem.unbind();
  card.orig = elem;

  // set
  image.orig = $('.js-post-image');
  image.container = $('.js-post-image-container');

  // post card
  var scroll = $(document).scrollTop();
  var cardHeight = card.orig.outerHeight();
  var cardWidth = card.orig.outerWidth();
  var cardPosition = card.orig.offset();
  var cardTop = cardPosition.top - scroll;
  var cardLeft = cardPosition.left;

  // console.log(cardTop);
  // console.log('scroll:'+scroll);

  // get the values of the post image before changing it for calculations
  var imageHeight = image.orig.outerHeight();
  var imageWidth = image.orig.outerWidth();
  var containerHeight = image.container.outerHeight();

  image.container.css({
    'min-height':containerHeight
  });
  image.orig.css({
    'width':cardWidth,
    'height':cardHeight
  });
  // post image
  var imagePosition = image.orig.offset();
  var imageTop = imagePosition.top - scroll;
  var imageLeft = imagePosition.left;

  console.log('imgtop:'+imageTop);

  // positions
  var offsetTop = cardTop - imageTop;
  var offsetLeft = cardLeft - imageLeft;

  console.log(imageTop);
  console.log('offset:'+offsetTop);

  image.orig.css({
    'left': offsetLeft,
    'top':offsetTop
  });

  // hide clicked hard from visible
  card.orig.css({
    'opacity':0
  });

  card.styles = {
    'left': offsetLeft,
    'top':offsetTop,
    'width': cardWidth,
    'height':cardHeight,
    'opacity': 0
  };

  setTimeout(function(){
    image.orig.css({
      'transition':'480ms ease-out',
      'top': 0,
      'left':0,
      'width':'800px',
      'height':'600px'
    });
  },1);
}

function scaleResize() {
  // container
}

function scaleCardOut() {
  image.orig.css(card.styles);
}
