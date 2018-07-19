// variables
var project = {
  open: false,
  container: null,
  page: null,
  animateToProject: false,
  animateFromProject: false
}


// Triggers
$(document).on('project-animate-in',function(){
  project.open = true;
  headerFix(project.fixed,'project__close--scroll');
  projectAnimateIn();
});
$(document).on('project-animate-out',function(){
  project.open = false;
  headerUnfix(project.fixed,'project__close--scroll');
  projectAnimateOut();
});

$(document).on('project-instant-in',function(){
  project.open = true;
  headerFix(project.fixed,'project__close--scroll');
  projectInstantIn();
});
$(document).on('project-instant-out',function(){
  project.open = false;
  headerUnfix(project.fixed,'project__close--scroll');
  projectInstantOut();
});



// bindings
function projectBind() {
  project.container = $('.js-project-container');
  project.fixed = $('.js-project-fixed');
  project.close = $('.js-project-close');

  project.close.click(function(){
    project.open = false;
    project.animateFromProject = true;
  });
}


// Overlay
function projectAnimateIn() {
  bodyScrollDisable(layout.project);
  layout.project.show();
  project.container.addClass('anim--project-in');
  project.container.one(animationEvent,function(event){
    $(this).removeClass('anim--project-in');
    bodyScrollSet(layout.project);
  });
}

function projectAnimateOut() {
  bodyScrollEnable(layout.project);
  project.container.addClass('anim--project-out');
  project.container.one(animationEvent,function(event){
    $(this).removeClass('anim--project-out');
    layout.project.hide();
  });
}


function projectInstantIn() {
  bodyScrollDisable(layout.project);
  layout.project.show();
  bodyScrollSet(layout.project);
}

function projectInstantOut() {
  bodyScrollEnable(layout.project);
  layout.project.hide();
}
