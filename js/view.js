// Control JS ran on each page and determine containers for content
// -- also a method to allow pjax caching and scroll position saving without
// -- rebinding a new event listener to every page load

let view = {
  layoutColor: null,
}

$(document).on('page_load',function(event){

  console.log('---------');
  console.log('page-loaded');

  pjaxSetup();

  const currentPage = $(pjaxContainer.current).find('.js-page-class').attr('page-id');
  console.log('current-page: '+currentPage);

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
}

// Hide Navigation
function hideNavigation(show) {
  //alert(show);
  if (show === true) {
    layout.navigation.addClass('layout__header--hidden');
  } else {
    layout.navigation.removeClass('layout__header--hidden');
  }
}
