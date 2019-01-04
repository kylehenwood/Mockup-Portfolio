// variables
var works = {
  page: null,
  cards: null,
  animate: false
}


// Triggers
$(document).on('works-in--animate',function(){
  worksAnimateIn();
});
$(document).on('works-out--animate',function(){
  worksAnimateOut();
});
$(document).on('works-in--instant',function(){
  worksInstantIn();
});
$(document).on('works-out--instant',function(){
  worksInstantOut();
});


$(document).on('works-stagger-in',function(){
  worksStaggerIn();
});


// this is called as soon as the works.php file is loaded
function worksBind() {
  works.page = $('.js-page-works');
  works.cards = $('.js-project-card');

  // Animate transition on card click
  works.cards.click(function(e){
    works.animate = true;
    project.animate = true;
    project.maskX = e.pageX;
    project.maskY = e.pageY - $(document).scrollTop();
  });

  // works get mouse click position on card click.


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
  //works.cards.addClass('anim--slide-down');
}
