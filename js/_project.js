// variables
var project = {
  open: false,
  container: null,
  page: null,
  cards: null,
  fixed: null
}


// Triggers
$(document).on('project-overlay-in',function(){
  projectBind();
  projectOverlayIn();
  headerFix(project.fixed,'project__close--scroll');
});
$(document).on('project-overlay-out',function(){
  projectBind();
  projectOverlayOut();
  headerUnfix(project.fixed,'project__close--scroll');
});

$(document).on('projects-page-in',function(){
  projectBind();
  projectsPageIn();
});
$(document).on('projects-page-out',function(){
  projectBind();
  projectsPageOut();
});

$(document).on('projects-stagger-in',function(){
  projectBind();
  projectsStaggerIn();
});


// bindings
function projectBind() {
  project.page = $('.js-page-projects');
  project.cards = $('.js-project-card');
  project.container = $('.js-project-container');
  project.fixed = $('.js-project-fixed');
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
function projectsStaggerIn() {
  project.cards.addClass('anim--slide-down');
}
