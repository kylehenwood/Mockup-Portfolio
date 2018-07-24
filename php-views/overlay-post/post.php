<script>
  //--
  // In
  $(document).one('pjax:success',function(){
    postBind();
    if (post.animate === true) {
      post.animate = false;
      $(document).trigger('post-in--animate');
    } else {
      $(document).trigger('post-in--instant');
    }
  });
  //--
  // Out
  $(document).one('pjax:beforeReplace', function() {
    if (post.animate === true) {
      post.animate = false;
      $(document).trigger('post-out--animate');
    } else {
      $(document).trigger('post-out--instant');
    }
  });
</script>

<?php
  if (isset($_GET['postID'])) {
    $postID = $_GET['postID'];

    //find post data based on ID
    $postArray = $_SESSION['gallery'];
    $findPost = array_search($postID, array_column($postArray, 'id'));
    $post = $postArray[$findPost];


    // content
    $postTitle = $post['title'];
    $postSubtitle = $post['subtitle'];
    $postDescription = $post['desc'];
    $postProject = $post['project'];
    $postTags = $post['tags'];
    $postImage = $post['image'];
    $postColor = "style=background-color:".$post['color'];

  } else {
    // POST NOT FOUND CONDITION
     $postTitle = 'POST NOT FOUND';
    // $postSubtitle = 'Subtitle';
    // $postDescription = 'Description';
    // $postProject = 'ProjectName';
    // $postTags = 'TagsArray';
    // $postImage = '#';
  }
?>

<div class="post js-post-container">

  <div class="post__close js-post-close">
    <a class="post-button-mobile js-pjax-container" href="index.php?pageID=gallery">
      <span class="flat-icon icon--16 icon--cross"></span>
    </a>
  </div>

  <div class="post__heading">
    <div class="center center--1120">

      <div class="post-heading">
        <h2 class="post-heading__title js-post-title">
          <?php echo($postTitle); ?>
        </h2>
        <div class="post-heading__close">
          <a class="post-button-back js-post-close js-pjax-container" href="index.php?pageID=gallery">
            <div class="post-button-back__icon">
              <span class="flat-icon icon--16 icon--cross"></span>
            </div>
            <div class="post-button-back__text">Close</div>
          </a>
        </div>
      </div>

    </div>
  </div>
  <div class="post__image">
    <div class="center center--1120">
      <div class="post-image-placeholder js-post-image" <?php echo $postColor ?> ></div>
    </div>
  </div>
  <div class="post__description">
    <div class="center center--1120">
      <div class="typography">
        <?php echo($postDescription) ?>
      </div>
    </div>
  </div>
  <div class="post__project js-post-projects">
    <div class="center center--1120">
      <div class="tile-select">
      <div class="tile-select__heading">
        <h2 class="heading-3 text-white">More from this project</h2>
      </div>
      <div class="tile-select__tiles">
        <div class="gallery-grid clearfix">
          <div class="gallery-grid__item">
            <a class="gallery-image js-pjax-post" <?php echo $postColor ?> href="index.php?pageID=gallery&postID=1">
              <img src="images/4-3.jpg" width="400" height="300">
            </a>
          </div>
          <div class="gallery-grid__item">
            <a class="gallery-image js-pjax-post" <?php echo $postColor ?> href="index.php?pageID=gallery&postID=2">
              <img src="images/4-3.jpg" width="400" height="300">
            </a>
          </div>
          <div class="gallery-grid__item">
            <a class="gallery-image js-pjax-post" <?php echo $postColor ?> href="index.php?pageID=gallery&postID=3">
              <img src="images/4-3.jpg" width="400" height="300">
            </a>
          </div>
          <div class="gallery-grid__item">
            <a class="gallery-image js-pjax-post" <?php echo $postColor ?> href="index.php?pageID=gallery&postID=4">
              <img src="images/4-3.jpg" width="400" height="300">
            </a>
          </div>
        </div>
      </div>
    </div></div>
    </div>
  <div class="post__similar js-post-similar">
    <div class="center center--1120">
      <div class="tile-select">
      <div class="tile-select__heading">
        <h2 class="heading-3 text-white">More from this project</h2>
      </div>
      <div class="tile-select__tiles">
        <div class="gallery-grid clearfix">
          <div class="gallery-grid__item">
            <a class="gallery-image js-pjax-post" href="index.php?pageID=gallery&postID=5">
              <img src="images/4-3.jpg" width="400" height="300">
            </a>
          </div>
          <div class="gallery-grid__item">
            <a class="gallery-image js-pjax-post" href="index.php?pageID=gallery&postID=6">
              <img src="images/4-3.jpg" width="400" height="300">
            </a>
          </div>
          <div class="gallery-grid__item">
            <a class="gallery-image js-pjax-post" href="index.php?pageID=gallery&postID=7">
              <img src="images/4-3.jpg" width="400" height="300">
            </a>
          </div>
          <div class="gallery-grid__item">
            <a class="gallery-image js-pjax-post" href="index.php?pageID=gallery&postID=8">
              <img src="images/4-3.jpg" width="400" height="300">
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
</div>
