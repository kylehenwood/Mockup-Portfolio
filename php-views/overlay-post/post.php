<script>
  // bind
  $(document).one('pjax:success',function(){
    console.log(post.animateToPost);
    if (post.animateToPost === true) {
      $(document).trigger('gallery-out');
      $(document).trigger('post-in');
    } else {
      console.log('post-in--instant');
      $(document).trigger('post-in--instant');
    }
  });
  // unbind
  $(document).one('pjax:beforeReplace', function() {
    if (post.animateFromPost === true) {
      $(document).trigger('post-out');
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
  <div class="post__heading-fixed js-post-heading">
    <div class="center center--1120">

      <div class="post-heading">
        <h2 class="post-heading__title js-post-title">
          <?php echo($postTitle); ?>
        </h2>
        <div class="post-heading__close js-post-close">
          <div class="post-close">
            <div class="post-close__mobile">
              <a class="post-button-mobile js-pjax-container" href="index.php?pageID=gallery">
                <span class="flat-icon icon--16 icon--cross"></span>
              </a>
            </div>
            <div class="post-close__desktop">
              <a class="post-button-back js-pjax-container" href="index.php?pageID=gallery">
                <div class="post-button-back__icon">
                  <span class="flat-icon icon--16 icon--cross"></span>
                </div>
                <div class="post-button-back__text">Close</div>
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
  <div class="post__image">
    <div class="center center--1120">
      <div class="post-image-placeholder js-post-image"></div>
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
            <a class="gallery-image js-pjax-post" href="index.php?pageID=gallery&postID=3">
              <img src="images/4-3.jpg" width="400" height="300">
            </a>
          </div>
          <div class="gallery-grid__item">
            <a class="gallery-image js-pjax-post" href="index.php?pageID=gallery&postID=3">
              <img src="images/4-3.jpg" width="400" height="300">
            </a>
          </div>
          <div class="gallery-grid__item">
            <a class="gallery-image js-pjax-post" href="index.php?pageID=gallery&postID=3">
              <img src="images/4-3.jpg" width="400" height="300">
            </a>
          </div>
          <div class="gallery-grid__item">
            <a class="gallery-image js-pjax-post" href="index.php?pageID=gallery&postID=3">
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
            <a class="gallery-image js-pjax-post" href="index.php?pageID=gallery&postID=3">
              <img src="images/4-3.jpg" width="400" height="300">
            </a>
          </div>
          <div class="gallery-grid__item">
            <a class="gallery-image js-pjax-post" href="index.php?pageID=gallery&postID=3">
              <img src="images/4-3.jpg" width="400" height="300">
            </a>
          </div>
          <div class="gallery-grid__item">
            <a class="gallery-image js-pjax-post" href="index.php?pageID=gallery&postID=3">
              <img src="images/4-3.jpg" width="400" height="300">
            </a>
          </div>
          <div class="gallery-grid__item">
            <a class="gallery-image js-pjax-post" href="index.php?pageID=gallery&postID=3">
              <img src="images/4-3.jpg" width="400" height="300">
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
</div>
