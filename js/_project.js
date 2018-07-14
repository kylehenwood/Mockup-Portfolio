// variables
var project = {
  open: false,
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
$(document).on('project-stagger-in',function(){
  projectStaggerIn();
});


// Overlay
function projectOverlayIn() {
  bodyScrollDisable(layout.project);
  layout.project.show();
  project.open = true;
  project.container = $('.js-project-container');
  project.container.addClass('anim--project-in');
  project.container.one(animationEvent,function(event){
    $(this).removeClass('anim--project-in');
    bodyScrollSet(layout.project);
  });
}

function projectOverlayOut() {
  bodyScrollEnable(layout.project);
  layout.project.removeClass('layout__project--background');
  layout.project.addClass('layout__project--scroll-lock');
  project.container.addClass('anim--project-out');
  project.container.one(animationEvent,function(event){
    $(this).removeClass('anim--project-out');
    layout.project.removeClass('layout__project--scroll-lock');
    layout.project.hide();
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
  });
}


// Stagger in
function projectStaggerIn() {
  project.cards = $('.js-project-card');
  project.cards.addClass('anim--slide-down');
}
