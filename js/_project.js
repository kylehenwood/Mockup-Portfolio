// variables
var project = {
  open: false,
  container: null,
  page: null,
  animate: false
}


// Triggers
$(document).on('project-in--animate',function(){
  headerFix(project.fixed,'project__close--scroll');
  projectAnimateIn();
});
$(document).on('project-out--animate',function(){
  headerUnfix(project.fixed,'project__close--scroll');
  projectAnimateOut();
});

$(document).on('project-in--instant',function(){
  headerFix(project.fixed,'project__close--scroll');
  projectInstantIn();
});
$(document).on('project-out--instant',function(){
  headerUnfix(project.fixed,'project__close--scroll');
  projectInstantOut();
});



// bindings
function projectBind() {
  project.container = $('.js-project-container');
  project.fixed = $('.js-project-fixed');
  project.close = $('.js-project-close');

  project.close.click(function(){
    console.log('close clicked');
    project.animate = true;
    works.animate = true;
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
    bodyScrollComplete(layout.project);
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
