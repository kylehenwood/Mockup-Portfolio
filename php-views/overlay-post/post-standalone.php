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

<div class="post post--standalone">
  <div class="center center--800">
    <!-- heading start -->
    <div class="post__heading">
        <div class="post-heading">
          <h2 class="post-heading__title">
            <?php echo($postTitle); ?>
          </h2>
        </div>
      </div>
    <!-- heading end -->

    <!-- image start -->
    <div class="post__image">
      <div class="post-image-placeholder js-post-image" <?php echo $postColor ?> ></div>
    </div>
    <!-- image end -->
  </div>
</div>
