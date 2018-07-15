<script>
  // bind
  $(document).one('pjax:success',function(){
    $(document).trigger('projects-page-out');
		$(document).trigger('project-overlay-in');
  });
  // unbind
  $(document).one('pjax:beforeReplace', function() {
    $(document).trigger('project-overlay-out');
  });
</script>


<div class="project js-project-container">
  <div class="project__close">
    <div class="center center--1120">
      <a class="project-back-button js-pjax-container" href="index.php?pageID=projects">
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

	<div class="project__section">
		<div class="center center--1120">
			Section1
		</div>
	</div>
</div>
