// variables
var works = {
  page: null,
  cards: null,
  animate: false
}


// Triggers
$(document).on('works-animate-in',function(){
  worksAnimateIn();
});
$(document).on('works-animate-out',function(){
  worksAnimateOut();
});
$(document).on('works-instant-in',function(){
  worksInstantIn();
});
$(document).on('works-instant-out',function(){
  worksInstantOut();
});


$(document).on('works-stagger-in',function(){
  worksStaggerIn();
});


// this is called as soon as the works.php file is loaded
function worksBind() {
  works.page = $('.js-page-works');
  works.cards = $('.js-project-card');
  works.cards.click(function(){
    works.animate = true;
  });
}

// Animations
function worksAnimateIn() {
  works.page.addClass('anim--works-in');
  works.page.one(animationEvent,function(event){
    $(this).removeClass('anim--works-in');
  });
}
function worksAnimateOut() {
  works.page.addClass('anim--works-out');
  works.page.one(animationEvent,function(event){
    $(this).removeClass('anim--works-out');
  });
}

function worksInstantIn() {
  // works.page.addClass('anim--works-in');
  // works.page.one(animationEvent,function(event){
  //   $(this).removeClass('anim--works-in');
  // });
}
function worksInstantOut() {
  // works.page.addClass('anim--works-out');
  // works.page.one(animationEvent,function(event){
  //   $(this).removeClass('anim--works-out');
  // });
}


// Stagger in
function worksStaggerIn() {
  works.cards.addClass('anim--slide-down');
}
