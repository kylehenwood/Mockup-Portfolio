// clickables
var card = {
  orig: null,
  clone: null,
  styles: null
};


// on page load
function scaleCard(elem) {
  // Open Gallery
  elem.unbind();
  card.orig = elem;
  card.clone = elem.clone();


  var scroll = $(document).scrollTop();
  var cardHeight = card.orig.outerHeight();

  var cardPosition = card.orig.offset();
  var cardTop = cardPosition.top - scroll;
  var cardLeft = cardPosition.left;


  card.styles =  {
    'zindex':80,
    'position':'absolute',
    'left':cardLeft,
    'right':cardLeft+274,
    'top':cardTop,
    'width': card.orig.outerWidth(),
    'height':cardHeight,
    'box-shadow':'none',
    'transition':'400ms ease-out',
    'border-radius':'3px'
  };

  card.clone.css(card.styles);
  card.clone.appendTo(layout.post);
  card.orig.hide();
  // animate card into banner
  setTimeout(function(){
    card.clone.css({
      'top': 0,
      'left':0,
      'width':'auto',
      'max-width':'800px',
      'height':'600px',
      'border-radius':0
    });
  },1);
}


function removeCard() {
  card.clone.remove();
}
