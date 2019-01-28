// variables
var works = {
  page: null,
  cards: null,
}


// Triggers
$(document).on('page-works',function(){
 worksBind();
});

// this is called as soon as the works.php file is loaded
function worksBind() {
  works.page = $('.js-page-works');
  works.cards = $('.js-project-card');

  // remove the fade on all cards
  // -- happens when navigated to via popstate
  works.cards.removeClass('project-card--fade');

  // Animate transition on card click
  works.cards.click(function(e){

    alert('fade');

    var element = $(this);

    works.cards.addClass('project-card--fade');
    element.removeClass('project-card--fade');

  });

  // remove the fade before replaced
  $(document).one('pjax:beforeReplace pjax:popstate',function(){
    //works.cards.removeClass('project-card--fade');
  });
}
