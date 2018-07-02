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

  $galleryFolder = "php-thumbnails";
  $galleryItems = array_diff(scandir($galleryFolder), array('..', '.'));
  $galleryArray = array();

  foreach ($galleryItems as $galleryItem) {
    $thumbDir = './'.$galleryFolder.'/'.$galleryItem;
    $galleryConstruct = $thumbDir.'/_construct.php';

    // include construct file inside each thumbnail
    // that then pushed that folders content to the $galleryArray
    include $galleryConstruct;
  }


  // OK, so I have all the image information from the thumbnails stored in $galleryArray
  echo('<pre>');
  //print_r($galleryArray);

  // get thumbnail URLS
  foreach($galleryArray as $galleryFolder) {
    $thumbnailURL = $galleryFolder['thumb'];
    echo('<img src="'.$thumbnailURL.'"/>');
  }
  echo('</pre>');




  include 'banner.php';
  include 'content.php';
?>
