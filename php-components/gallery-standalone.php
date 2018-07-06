<script>
  // bind
  $(document).one('page_load',function(){
    //galleryBind();
    //$(document).trigger('gallery-open');
  });
</script>

<?php
  if (isset($_GET['postID'])) {
    $postID = $_GET['postID'];

    //find post data based on ID
    $galleryArray = $_SESSION['gallery'];
    $findPost = array_search($postID, array_column($galleryArray, 'id'));
    $post = $galleryArray[$findPost];


    // content
    $postTitle = $post['title'];
    $postSubtitle = $post['subtitle'];
    $postDescription = $post['desc'];
    $postProject = $post['project'];
    $postTags = $post['tags'];
    $postImage = $post['image'];

  } else {
     $postTitle = 'POST NOT FOUND';
  }
?>

<div class="layout__post">
<div class="center center--1120">
<div class="gallery">
  <div class="gallery__heading">
    <div class="gallery-heading">
      <div class="gallery-heading__title js-gallery-heading">
        <h1 class="heading-1 text-white"><?php echo($postTitle); ?></h1>
      </div>
      <div class="gallery-heading__subheading js-gallery-subheading">
        <h4 class="heading-subtitle text-white"><?php echo($postSubtitle); ?></h4>
      </div>
    </div>
  </div>

  <div class="gallery__image">
    <div class="gallery-selected">
      <div class="gallery-selected__image js-gallery-image">
        <div class="gallery-image-container"></div>
      </div>
    </div>
  </div>


  <div class="gallery__project js-gallery-projects">
    <div class="tile-select">
      <div class="tile-select__heading">
        <h2 class="heading-3 text-white">More from this project</h2>
      </div>
      <div class="tile-select__tiles">
        <div class="gallery-grid clearfix">
          <div class="gallery-grid__item">
            <div class="gallery-image">
              <img src="images/4-3.jpg" width="400" height="300">
            </div>
          </div>
          <div class="gallery-grid__item">
            <div class="gallery-image">
            <img src="images/4-3.jpg" width="400" height="300"></div>
          </div>
          <div class="gallery-grid__item">
            <div class="gallery-image">
            <img src="images/4-3.jpg" width="400" height="300"></div>
          </div>
          <div class="gallery-grid__item">
            <div class="gallery-image">
            <img src="images/4-3.jpg" width="400" height="300"></div>
          </div>
        </div>
      </div>
    </div>
  </div>


  <div class="gallery__similar js-gallery-similar">
    <div class="tile-select">
      <div class="tile-select__heading">
        <h2 class="heading-3 text-white">Similar things</h2>
      </div>
      <div class="tile-select__tiles">
        <div class="gallery-grid clearfix">
          <div class="gallery-grid__item">
            <div class="gallery-image">
              <img src="images/4-3.jpg" width="400" height="300">
            </div>
          </div>
          <div class="gallery-grid__item">
            <div class="gallery-image">
            <img src="images/4-3.jpg" width="400" height="300"></div>
          </div>
          <div class="gallery-grid__item">
            <div class="gallery-image">
            <img src="images/4-3.jpg" width="400" height="300"></div>
          </div>
          <div class="gallery-grid__item">
            <div class="gallery-image">
            <img src="images/4-3.jpg" width="400" height="300"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</div>
