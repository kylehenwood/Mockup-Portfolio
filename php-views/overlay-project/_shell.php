<div class="layout__overlay js-overlay-project">
  <!-- create an svg circle mask that masks the project div here
  place the circle where the mouse was clicked
  expand the circle mask -->

  <svg width="0" height="0" style="display:block;">
    <defs>
      <clipPath id="projectMask">
        <circle class="js-circle-mask project-mask__circle"cx="100" cy="100" r="40" />
      </clipPath>
    </defs>
  </svg>

  <div id="js-pjax-project" class="project-mask"></div>
</div>
