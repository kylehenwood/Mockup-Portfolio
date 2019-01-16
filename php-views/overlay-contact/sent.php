<script>
//--
// In
$(document).one('page_load',function(){
  $(document).trigger('post-in--animate');
});
//--
// Out
$(document).on('pjax:beforeReplace', function() {
  //$(document).trigger('post-out--animate');
});
</script>

<?php
// if (isset($_GET['postID'])) {
//   $postID = $_GET['postID'];
//
//   //find post data based on ID
//   $postArray = $_SESSION['gallery'];
//   $findPost = array_search($postID, array_column($postArray, 'id'));
//   $post = $postArray[$findPost];
//
//
//   // content
//   $postTitle = $post['title'];
//   $postSubtitle = $post['subtitle'];
//   $postDescription = $post['desc'];
//   $postProject = $post['project'];
//   $postTags = $post['tags'];
//   $postImage = $post['image'];
//   $postColor = "style=background-color:".$post['color'];
//
// } else {
//   // POST NOT FOUND CONDITION
//    $postTitle = 'POST NOT FOUND';
//   // $postSubtitle = 'Subtitle';
//   // $postDescription = 'Description';
//   // $postProject = 'ProjectName';
//   // $postTags = 'TagsArray';
//   // $postImage = '#';
// }
?>

<div class="page-contact js-post-container">
  <div class="center center--640">




    <div class="module module--white">
      <div class="module__body">

        <h1 class="heading-1 text-black text-center">Form submitted!</h1>

      </div>
    </div>

  </div>
</div>
