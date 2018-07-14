// variables
var project = {
  open: false,
  container: null,
  page: null,
  cards: null
}


// Triggers
$(document).on('project-overlay-in',function(){
  projectBind();
  projectOverlayIn();
});
$(document).on('project-overlay-out',function(){
  projectBind();
  projectOverlayOut();
});
$(document).on('projects-page-in',function(){
  projectBind();
  projectsPageIn();
});
$(document).on('projects-page-out',function(){
  projectBind();
  projectsPageOut();
});
$(document).on('project-stagger-in',function(){
  projectBind();
  projectStaggerIn();
});


// bindings
function projectBind() {
  project.page = $('.js-page-projects');
  project.cards = $('.js-project-card');
  project.container = $('.js-project-container');
}


// Overlay
function projectOverlayIn() {
  bodyScrollDisable(layout.project);
  layout.project.show();
  project.open = true;
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
  project.page.addClass('anim--project-container-in');
  project.page.one(animationEvent,function(event){
    $(this).removeClass('anim--project-container-in');
  });
}
function projectsPageOut() {
  project.page.addClass('anim--project-container-out');
  project.page.one(animationEvent,function(event){
    $(this).removeClass('anim--project-container-out');
  });
}


// Stagger in
function projectStaggerIn() {
  project.cards.addClass('anim--slide-down');
}
