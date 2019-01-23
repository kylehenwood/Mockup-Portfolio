// Control JS ran on each page and determine containers for content
// -- also a method to allow pjax caching and scroll position saving without
// -- rebinding a new event listener to every page load

let view = {
  layoutColor: null,
}

$(document).on('page_load',function(event){

  console.log('---------');
  console.log('page-loaded');

  const currentPage = $(pjaxContainer.current).find('.js-page-class').attr('page-id');

  // Run page specific JS
  // -- God I hope this work.
  // switch(view.currentPage) {
  switch(currentPage) {
    case 'gallery':
      view.layoutColor = '#424242';
      hideNavigation(false);
      $(document).trigger('x');
      break;
    case 'gallery-post':
      view.layoutColor = '#424242';
      hideNavigation(true);
      $(document).trigger('x');
      break;
    case 'gallery-post-standalone':
      view.layoutColor = '#424242';
      hideNavigation(false);
      $(document).trigger('x');
      break;
    case 'work':
      view.layoutColor = '#424242';
      hideNavigation(false);
      $(document).trigger('x');
      break;
    case 'work-project':
      findProject();
      hideNavigation(true);
      $(document).trigger('x');
      break;
    case 'work-project-standalone':
      findProject();
      hideNavigation(false);
      $(document).trigger('x');
      break;
    case 'about':
      view.layoutColor = '#424242';
      hideNavigation(false);
      $(document).trigger('x');
      break;

    default:
      view.layoutColor = '#424242';
      // do nothing
  }

  pjaxSetup();

  console.log('current-page: '+currentPage);

  // Sets the background color on page layout/body
  layout.body.css({'background':view.layoutColor});


  console.log('---------');
});


// project switch
function findProject() {
  const currentProject = $(pjaxContainer.current).find('.js-project').attr('project-id');

  console.log(currentProject);

  switch(currentProject) {

    case 'project-aibek':
      view.layoutColor = '#3D325A';
      break;
    case 'project-raygun':
      view.layoutColor = '#1E88E5';
      break;
    case 'project-siteshot':
      view.layoutColor = '#00897B';
      break;
    case 'project-shnappy':
      view.layoutColor = '#E91E63';
      break;
    case 'project-mindscape':
      view.layoutColor = '#7B1FA2';
      break;
    case 'project-vanimator':
      view.layoutColor = '#7B1FA2';
      break;
    case 'project-hunchbuzz':
      view.layoutColor = '#FB8C00';
      break;
    default:
      view.layoutColor = '#424242';
      // do nothing
  }

  // project button test
  var button = $(pjaxContainer.current).find('.js-project-back');

  button.attr({
    'sl-scroll': scrollLock.offset
  });
  scrollLock.offset = null;

  button.click(function(){
    scrollLock.scrollTo = button.attr('sl-scroll');
    scrollTo();
  });

}

// // Hide Navigation
// function hideNavigation(show) {
//   //alert(show);
//   if (show === true) {
//     layout.navigation.addClass('anim--in-y1');
//   } else {
//     layout.navigation.addClass('anim--out-y1');
//   }
//
//   // remove animation classes
//   layout.navigation.one(animationEvent,function(){
//     $(this).removeClass('anim--in-y1 anim--out-y1');
//   });
// }
// Hide Navigation
function hideNavigation(show) {
  //alert(show);
  if (show === true) {
    layout.navigation.addClass('layout__header--hidden');
  } else {
    layout.navigation.removeClass('layout__header--hidden');
  }
}
