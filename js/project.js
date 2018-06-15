// clickables
var projectCard;
var projectContainer;
var projectsHeading;
var card;

// on page load
function projectBind() {
  layoutContainer = $('.js-layout');
  layoutHeader = $('.js-layout-header');

  // clickables
  projectCard = $('.js-project-card');
  projectsContainer = $('.js-projects-container');
  projectsHeading = $('.js-projects-heading');

  // Open Gallery
  projectCard.click(function(){
    projectReveal();

    card = $(this).clone();
    var cardPosition = $(this).offset();
    var windowScroll = $(document).scrollTop();

    var cardTop = cardPosition.top - windowScroll;
    var cardLeft = cardPosition.left;

    //alert(cardTop+' '+cardLeft);

    card.css({
      'zindex':80,
      'position':'fixed',
      'left':cardLeft,
      'top':cardTop,
      'width':'274px',
      'box-shadow':'none',
      'transition':'800ms ease-in-out',
      'transiton-delay':'160ms'
    });
    card.appendTo(projectsContainer);

    // animate card into banner
    setTimeout(function(){
      card.css({
        'top': 0,
        'left': 0,
        'width':'100%',
        'height':'600px',
        'border-radius':0
      });
    },1);


  });


  // Close Gallery
  projectsContainer.click(function() {
    projectClose();
  });
}


// on page leave
function projectUnbind() {
  projectCard.unbind();
  projectsContainer.unbind();
}


// Reveal Project
function projectReveal() {
  // container
  //layoutContainer.addClass('layout--scroll-lock');
  layoutHeader.addClass('anim--out-top');
  layoutContainer.addClass('layout--scroll-lock');

  projectsHeading.addClass('anim--out-top anim--delay-160');
  projectsHeading.one(animationEvent,function(event){
    $(this).removeClass('anim--out-top');
    $(this).hide();
  });


  projectsContainer.show();
  setTimeout(function(){
    projectsContainer.addClass('layout__project--in');
  },1);

}


// Animate Gallery out && Homepage in
function projectClose() {

  card.remove();

  // container
  layoutHeader.removeClass('anim--out-top');
  layoutHeader.addClass('anim--in-top');
  layoutContainer.removeClass('layout--scroll-lock');

  projectsHeading.show();
  projectsHeading.addClass('anim--in-top');
  projectsHeading.one(animationEvent,function(event){
    $(this).removeClass('anim--in-top');
  });


  projectsContainer.addClass('layout__project--scroll-lock');
  projectsContainer.removeClass('layout__project--in');

  projectsContainer.one(transitionEvent,function(event){
    projectsContainer.hide();
    projectsContainer.removeClass('layout__project--scroll-lock');
  });
}
