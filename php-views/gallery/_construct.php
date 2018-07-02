<script>
  // bind
  $(document).one('page_load',function(){
    //currentPage = 'gallery';
    // alert('bind-gallery');
    galleryBind();
  });

  // unbind
  $(document).one('pjax:beforeReplace', function() {
    //alert('unbind-gallery');
    galleryUnbind();
  });
</script>

<?php

  $dir = "php-thumbnails";
  $galleryItems = array_diff(scandir($dir), array('..', '.'));
  //$galleryItems = scandir($dir,0);

  $galleryArray = array();

  foreach ($galleryItems as $galleryItem) {
    $galleryDir = './'.$dir.'/'.$galleryItem;
    $thumbConstruct = $galleryDir.'/_construct.php';

    include $thumbConstruct;
    //$galleryThumbnails.push($this);

    // Get the variables / array from easy construct.
    // Place in another array.
    // on Gallery page, loop through array=>img
  }





  include 'banner.php';
  include 'content.php';
?>
