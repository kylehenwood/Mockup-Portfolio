// variables
let project = {
  open: false,
  container: null,
  page: null,
  animate: false,
  maskX: null,
  maskY: null
}


// Triggers
$(document).on('project-in--animate',function(){
  headerFix(project.fixed,'project__close--scroll');
  console.log('GOOOO');
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
    project.animate = true;
    works.animate = true;
  });
}


// Overlay
function projectAnimateIn() {

  const circle = $('.js-circle-mask');

  // console.log(project.maskY);
  // console.log(project.maskX);

  circle.attr({
    'cx':project.maskX,
    'cy':project.maskY,
    'r':4
  });

  setTimeout(function(){
    circle.attr({
      'r':$(window).width()/3
    });
  },1)

  bodyScrollDisable(layout.project);
  layout.project.show();
  project.container.addClass('anim--project-in');
  project.container.on(animationEvent,function(event){
    if ($(event.target).hasClass('anim--project-in')) {
      $(this).unbind();
      $(this).removeClass('anim--project-in');
      bodyScrollSet(layout.project);
    }
  });
}

function projectAnimateOut() {
  bodyScrollEnable(layout.project);
  project.container.addClass('anim--project-out');
  project.container.on(animationEvent,function(event){
    if ($(event.target).hasClass('anim--project-out')) {
      $(this).unbind();
      $(this).removeClass('anim--project-out');
      bodyScrollComplete(layout.project);
    }
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
