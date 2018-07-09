// variables
var project = {
  open: false,
  overlay: null,
  container: null,
  cards: null
}


// Triggers
$(document).on('project-overlay-in',function(){
  projectOverlayIn();
});
$(document).on('project-overlay-out',function(){
  projectOverlayOut();
});
$(document).on('projects-page-in',function(){
  projectsPageIn();
});
$(document).on('projects-page-out',function(){
  projectsPageOut();
});



// Overlay
function projectOverlayIn() {

  layout.container.addClass('layout--scroll-lock');

  project.open = true;
  project.container = $('.js-project-container');
  project.overlay = $('.js-project-overlay');
  project.overlay.show();

  project.container.addClass('anim--project-in');
  project.container.one(animationEvent,function(event){
    $(this).removeClass('anim--project-in');
    layout.content.removeClass('anim--hidden');
  });
}

function projectOverlayOut() {
  layout.container.removeClass('layout--scroll-lock');

  project.overlay.addClass('layout__project--scroll-lock');
  project.container.addClass('anim--project-out');
  project.container.one(animationEvent,function(event){
    $(this).removeClass('anim--project-out');
    project.overlay.removeClass('layout__project--scroll-lock');
    project.overlay.hide();
  });
}


// Page
function projectsPageIn() {
  layout.content.addClass('anim--project-container-in');
  layout.content.one(animationEvent,function(event){
    $(this).removeClass('anim--project-container-in');
  });
}
function projectsPageOut() {
  layout.content.addClass('anim--project-container-out');
  layout.content.one(animationEvent,function(event){
    $(this).removeClass('anim--project-container-out');
    $(this).addClass('anim--hidden');
  });
}
