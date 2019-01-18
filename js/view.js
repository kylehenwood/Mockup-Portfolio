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

// run inline scripts on page load
// $(document).on("pjax:popstate", function() {
//   alert('RUN SCRIPT 1');
//   $(document).one("pjax:end", function(event) {
//
//     alert('RUN SCRIPT 2');
//
//     $(event.target).find("script[data-exec-on-popstate]").each(function() {
//       $.globalEval(this.text || this.textContent || this.innerHTML || '');
//
//       alert('RUN SCRIPT 3');
//     });
//   });
// });

$(document).on('page_load',function(event){

  // My current issue is that the function called onpop state calls the last known function
  // rather than the one presented inline.
  // -- eg
  // -- gallery-post
  // -- back button
  // -- gallery page in
  // -- gallery-post still set at page.
  //viewSetup();
  // $(document).find("script[data-exec-on-popstate]").each(function() {
  //   $.globalEval(this.text || this.textContent || this.innerHTML || '');
  // });
  // console.log(event);
  // console.log(view.currentPage);

  // dont run page transition on first load
  // if (view.firstLoad === false) {
  //   pjaxSetup();
  //   //pjaxTransition();
  // } else {
  //   view.firstLoad = false;
  //   pjaxSetup();
  // }

  pjaxSetup();

  // check if popstate (back|| foward history state)
  // -- problem with inline scripts not being ran if navigated to via history
  // if (view.runScripts === true) {
  //   console.log('running scripts in ' + pjaxContainer.current);
  //
  //   $(pjaxContainer.current).attr({'TESTING':'SUCCESS'})
  //   $(pjaxContainer.current).find("script[data-exec-on-popstate]").each(function() {
  //     $.globalEval(this.text || this.textContent || this.innerHTML || '');
  //   });
  // }

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
