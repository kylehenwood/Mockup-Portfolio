<?php
  if (isset($_GET['projectID'])) {
    $projectID = $_GET['projectID'];
    $backurl = 'index.php?pageID=work&projectID='.$projectID;
  }

  if (isset($_GET['subpageID'])) {
    $postID = $_GET['subpageID'];

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

<div class="post js-post-container js-page-class" page-id="gallery-post">
  <div class="center center--1120">

    <div class="post__heading js-post-heading js-anim-z1">
      <div class="post-heading">
        <h2 class="post-heading__title">
        <?php echo($postTitle); ?>
        </h2>
        <div class="post-heading__close">
          <a class="post-button-back js-post-close js-pjax-link" href="<?php echo($backurl) ?>#<?php echo($postID) ?>">
            <span class="flat-icon icon--16 icon--cross"></span>
          </a>
        </div>
      </div>
    </div>

    <div class="post__image js-post-image js-anim-z3">
      <div class="post-image-placeholder" <?php echo $postColor ?>></div>
    </div>

    <div class="post__description js-post-description js-anim-z1">
      <div class="typography typography--on-dark">
      <?php echo($postDescription) ?>
      </div>
    </div>

  </div>
</div>