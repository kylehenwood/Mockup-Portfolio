// variables
let project = {
  open: false,
  container: null,
  page: null,
  animate: false,
  maskX: null,
  maskY: null,
  modal: false,
  posts: null
}


// Triggers
$(document).on('project-in--animate',function(){
  projectBind();
  projectAnimateIn();
});
$(document).on('project-out--animate',function(){
  //alert("out-a")
  //projectAnimateOut();
});

$(document).on('project-in--instant',function(){
  //projectBind();
  //projectInstantIn();
});
$(document).on('project-out--instant',function(){
  //alert("out-i")
  //projectInstantOut();
});



// bindings
function projectBind() {
  project.container = $('.js-project-container');
  project.fixed = $('.js-project-fixed');
  project.navigation = $('.js-project-navigation');
  project.close= $('.js-project-close');
  project.open = true;
  project.posts = $('.js-pjax-post');

  post.parent = $(layout.project);

  project.close.click(function(event){
    // project.open = false;
    // project.animate = true;
    // works.animate = true;
    event.preventDefault();
    scrollElementLock(layout.project);
    scrollElement(layout.wrapper);
    scrollElementHide(layout.project);

  });

  // Navigation background on scroll
  project.color = project.navigation.attr('data-bg');

  let bannerHeight = 600;

  $(window).scroll(function(){
    var scrollOffset = layout.html.scrollTop() || layout.body.scrollTop();
    if (scrollOffset > bannerHeight) {
      project.navigation.addClass("project__navigation--active");
      project.navigation.css({
        'background':project.color,
        'box-shadow':'0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)'
      });
    } else {
      project.navigation.removeClass("project__navigation--active");
      project.navigation.css({
        'background':'none',
        'box-shadow':'none'
      });
    }
  });
}

// need project UNBIND?


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

  scrollElementLock(layout.wrapper,true);
  scrollElement(layout.project,false);

  project.container.addClass('anim--project-in');
  project.container.on(animationEvent,function(event){
    if ($(event.target).hasClass('anim--project-in')) {
      $(this).unbind();
      $(this).removeClass('anim--project-in');
    }
  });
}

function projectAnimateOut() {

  scrollElementLock(layout.project,true);
  scrollElement(layout.wrapper,true);

  project.container.addClass('anim--project-out');
  project.container.on(animationEvent,function(event){
    if ($(event.target).hasClass('anim--project-out')) {
      $(this).unbind();
      $(this).removeClass('anim--project-out');

      scrollElementHide(layout.project);
    }
  });
}


function pythagorean(sideA, sideB){
  return Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
}


function projectInstantIn() {
  //bodyScrollDisable(layout.project);
  layout.project.show();
  //bodyScrollSet(layout.project);
}

function projectInstantOut() {
  //bodyScrollEnable(layout.project);
  layout.project.hide();
}
