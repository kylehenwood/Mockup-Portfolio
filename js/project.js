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
    var projectGrid = $('.js-project-grid');
    var gridLeft = projectGrid.offset().left;
    //var gridRight = $(window).width() - (projectGrid.offset().left + projectGrid.outerWidth());

    var cardPosition = $(this).offset();
    var windowScroll = $(document).scrollTop();

    var cardTop = cardPosition.top - windowScroll;
    var cardLeft = cardPosition.left;

    card.css({
      'zindex':80,
      'position':'fixed',
      'left':cardLeft,
      'right':cardLeft+274,
      'top':cardTop,
      'width':'274px',
      'box-shadow':'none',
      'transition':'400ms ease-out'
    });
    card.appendTo(projectsContainer);

    // animate card into banner
    setTimeout(function(){
      card.css({
        'top': 0,
        'left':gridLeft,
        //'right':gridLeft+15,
        'width':'1120px',
        // 'left': 0,
        // 'width':'100%',
        'height':'600px',
        'border-radius':0
      });
    },240);


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
  layoutContainer.addClass('layout--scroll-lock');

  // header
  layoutHeader.addClass('anim--out-top');
  layoutHeader.one(animationEvent,function(){
    $(this).removeClass('anim--out-top');
    $(this).addClass('anim--hidden');
  });


  projectsHeading.addClass('anim--out-top anim--delay-160');
  projectsHeading.one(animationEvent,function(event){
    $(this).removeClass('anim--out-top anim--delay-160');
    $(this).addClass('anim--hidden');
  });


  projectsContainer.show();
  setTimeout(function(){
    projectsContainer.addClass('layout__project--in');
  },1);

}


// Close Project
function projectClose() {

  // remove clone card
  card.remove();

  // container
  layoutHeader.removeClass('anim--hidden');
  layoutHeader.addClass('anim--in-top anim--delay-160');
  layoutHeader.one(animationEvent,function(event){
    $(this).removeClass('anim--in-top anim--delay-160');
  });

  layoutContainer.removeClass('layout--scroll-lock');

  projectsHeading.removeClass('anim--hidden');
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
