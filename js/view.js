// Control JS ran on each page and determine containers for content
// -- also a method to allow pjax caching and scroll position saving without
// -- rebinding a new event listener to every page load

let view = {
  firstLoad: true,
  currentPage: null,
  lastPage: null,
  layoutClass: null,
  runScripts: false //run inline scripts
}



$(document).on('page_load',function(event){

  console.log('page-loaded');


  pjaxSetup();


  // change the background-color of the page based on an inline script with color.
  layoutClass();
  // Run page specific JS
  // -- God I hope this works.
  switch(view.currentPage) {
    case 'gallery':
      hideNavigation(false);
      $(document).trigger('x');
      break;
    case 'gallery-post':
      hideNavigation(true);
      $(document).trigger('x');
      break;
    case 'work':
      hideNavigation(false);
      $(document).trigger('x');
      break;
    case 'work-project':
      hideNavigation(true);
      $(document).trigger('x');
      break;
    case 'about':
      hideNavigation(false);
      $(document).trigger('x');
      break;


    case 'project-aibek':
      $(document).trigger('x');
      break;

    default:
      // do nothing
  }
});


// View altering functions


// Hide Navigation
function hideNavigation(show) {
  //alert(show);
  if (show === true) {
    layout.navigation.addClass('layout__header--hidden');
  } else {
    layout.navigation.removeClass('layout__header--hidden');
  }
}


// Sets the background color on page layout/body based on a variable set
// by inline scripts on each page
function layoutClass() {
  //console.log(view.layoutClass);

  if (view.layoutClass === 'layout--standard' || view.layoutClass === null) {
    view.layoutClass = '#424242';
  }
  // layout.body.removeClass(view.layoutClass);
  // layout.body.addClass(view.layoutClass);
  layout.body.css({'background':view.layoutClass});
}
