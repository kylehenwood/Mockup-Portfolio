<script data-exec-on-popstate>
  // set view variables
  view.layoutClass = 'layout--standard';
  view.currentPage = 'gallery-post-standalone';
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

<div class="post post--standalone">
  <div class="center center--800">

    <!-- heading-->
    <div class="post__heading js-post-heading">
      <div class="post-heading">
        <h2 class="post-heading__title">
          <?php echo($postTitle); ?>
        </h2>
      </div>
    </div>

    <!-- image -->
    <div class="post__image js-post-image">
      <div class="post-image-placeholder" <?php echo $postColor ?> ></div>
    </div>

    <!-- description -->
    <div class="post__description js-post-description">
      <div class="typography typography--on-dark">
      <?php echo($postDescription) ?>
      </div>
    </div>

  </div>
</div>
