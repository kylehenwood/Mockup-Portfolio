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
    $postColor = "style=background-color:".$post['color'];

  } else {
     $postTitle = 'POST NOT FOUND';
  }
?>

<div class="post">

  <!-- heading start -->
  <div class="post__heading">
    <div class="center center--1120">
      <div class="post-heading">
        <div class="post-heading__title">
          <h1 class="heading-1 text-white"><?php echo($postTitle); ?></h1>
        </div>
      </div>
    </div>
  </div>
  <!-- heading end -->

  <!-- image start -->
  <div class="post__image">
    <div class="center center--1120">
      <div class="post-image-placeholder js-post-image" <?php echo $postColor ?> ></div>
    </div>
  </div>
  <!-- image end -->

  <!-- project start -->
  <div class="post__project">
    <div class="center center--1120">
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
  </div>
  <!-- project end -->

  <!-- similar start -->
  <div class="post__similar">
    <div class="center center--1120">
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
  <!-- similar end -->

</div>
