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
  <div class="center center--800">

    <div class="post__heading">
      <div class="post-heading">
        <h2 class="post-heading__title js-post-title">
        <?php echo($postTitle); ?>
        </h2>
        <div class="post-heading__close">
          <a class="post-button-back js-post-close js-pjax-container" href="index.php?pageID=gallery">
            <span class="flat-icon icon--16 icon--cross"></span>
          </a>
        </div>
      </div>
    </div>

    <div class="post__image js-post-image-container">
      <div class="post-image-placeholder js-post-image" <?php echo $postColor ?>></div>
    </div>

    <div class="post__description">
      <div class="typography">
      <?php echo($postDescription) ?>
      </div>
    </div>

  </div>
</div>
