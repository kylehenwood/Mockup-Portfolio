<script>
  // bind
  $(document).one('page_load',function(){
		$(document).trigger('project-overlay-in');
    $(document).trigger('projects-page-out');
  });
  // unbind
  $(document).one('pjax:beforeReplace', function() {
    $(document).trigger('project-overlay-out');
  });
</script>


<div class="project js-project-container">
	<div class="project__banner">
		<h1 class="heading-1 text-white">AIBEK</h1>
	</div>

	<div class="project__description">
    <div class="center center--1120 typography">
  		<a class="js-pjax-container" href="index.php?pageID=projects">
        back
      </a>
    </div>
	</div>

	<div class="project__section">
		<div class="center center--1120">
			Section1
		</div>
	</div>
</div>
