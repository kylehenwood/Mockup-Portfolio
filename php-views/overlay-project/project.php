<script>
  //--
  // In
  $(document).one('pjax:success',function(){
    projectBind();
    project.open = true;
    // works => project

    //console.log(1);

    if (layout.project.is(":visible")) {
      console.log(2);
      return false;
    }

    if (project.animate === true) {
      project.animate = false;
      $(document).trigger('project-in--animate');
    } else {
      $(document).trigger('project-in--instant');
    }
  });
  //--
  // Out
  $(document).one('pjax:beforeReplace', function() {
    //project.open = false;
    // project => works
    if (project.animate === true) {
      project.animate = false;
      $(document).trigger('project-out--animate');
    } else {
      $(document).trigger('project-out--instant');
    }

    // animate project => project
    // if (project.open === true){}
  });
</script>


<div class="project js-project-container">
  <div class="project__close js-project-fixed">
    <div class="center center--1120">
      <a class="project-back-button js-project-close js-pjax-container" href="index.php?pageID=projects">
        <div class="project-back-button__icon">
          <span class="flat-icon icon--16 icon--arrow-left"></span>
        </div>
        <div class="project-back-button__text">All Projects</div>
      </a>
    </div>
  </div>
	<div class="project__banner">
    <div class="center center--1120">
      <div class="project-banner">
        <div class="project-banner__content">
		        <h1 class="heading-1 text-white">AIBEK</h1>
        </div>
      </div>
    </div>
	</div>

	<div class="project__description">
    <div class="center center--1120 typography">
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent molestie nulla magna, nec auctor massa tempus eget. Integer ac arcu sed ante venenatis lacinia. Aenean eleifend ornare finibus. Vestibulum at nunc nulla. Nulla facilisi. Phasellus quis nulla ut sapien suscipit mollis in a mauris. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus et lacus vel lacus interdum venenatis. Suspendisse tincidunt vitae libero et laoreet. Nulla facilisi. Nunc venenatis ex ipsum, eu rhoncus nisl lobortis non.</p>
    </div>
	</div>


  <div class="project__gallery">
    <div class="center center--1120">
      <ul class="scroll-list">
        <li class="scroll-list__item">
          <div class="scroll-card"></div>
        </li>
        <li class="scroll-list__item">
          <div class="scroll-card"></div>
        </li>
        <li class="scroll-list__item">
          <div class="scroll-card"></div>
        </li>
        <li class="scroll-list__item">
          <div class="scroll-card"></div>
        </li>
        <li class="scroll-list__item">
          <div class="scroll-card"></div>
        </li>
        <li class="scroll-list__item">
          <div class="scroll-card"></div>
        </li>
      </ul>
    </div>
  </div>

	<div class="project__section">
		<div class="center center--1120">
			Section1
		</div>
	</div>
</div>
