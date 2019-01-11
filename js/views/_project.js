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
  //headerFix(project.fixed,'project__close--scroll');
  console.log('GOOOO');
  projectAnimateIn();
});
$(document).on('project-out--animate',function(){
  //headerUnfix(project.fixed,'project__close--scroll');
  projectAnimateOut();
});

$(document).on('project-in--instant',function(){
  //headerFix(project.fixed,'project__close--scroll');
  projectInstantIn();
});
$(document).on('project-out--instant',function(){
  //headerUnfix(project.fixed,'project__close--scroll');
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

const maskVersion = 1;

// Overlay
function projectAnimateIn() {

  const circle = $('.js-project-mask');

  circle.css({
    'clip-path':'circle('+4+'px at '+project.maskX+'px '+project.maskY+'px)'
  });

  // get the corners of the screen.
  // select farthest.
  let screenPoints = {
    x: null,
    y: null,
    triWidth: null,
    triHeight: null,
    radius: null,
    width: $(window).width(),
    height: $(window).height(),
    left: false,
    right: false,
    top: false,
    bottom: false,
  }
  // get X and Y pos of click
  const clickX = project.maskX;
  const clickY = project.maskY - $(document).scrollTop();

  // What is the fartest screen corner from the click?
  // -- is clickX closer to the right?
  if (clickX <= screenPoints.width/2) {
    screenPoints.x = screenPoints.width;
  } else {
    screenPoints.x = 0;
  }
  // -- is clickY closer to the bottom?
  if (clickY <= screenPoints.height/2) {
    screenPoints.y = screenPoints.height;
  } else {
    screenPoints.y = 0;
  }
  // Calc the distance between click points and farthest points
  screenPoints.triWidth = Math.abs(clickX - screenPoints.x);
  screenPoints.triHieght = Math.abs(clickY - screenPoints.y);


  screenPoints.radius = pythagorean(screenPoints.triWidth, screenPoints.triHeight);
  screenPoints.diameter = screenPoints.radius*2;


  console.log('X:'+screenPoints.x);
  console.log('Y:'+screenPoints.y);
  console.log('R:'+screenPoints.radius);



  setTimeout(function(){
    circle.css({
      'clip-path':'circle('+screenPoints.diameter+'px at '+project.maskX+'px '+project.maskY+'px)'
    });
  },100);

  circle.one(transitionEvent,function(){
    circle.css({
      'clip-path':'none'
    });
  });

  // circle.attr({
  //   'cx':project.maskX,
  //   'cy':project.maskY,
  //   'r':4
  // });
  //
  // setTimeout(function(){
  //   circle.attr({
  //     'r':$(window).width()/3
  //   });
  // },1)

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


function pythagorean(sideA, sideB){
  return Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
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
