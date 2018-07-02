<?php
function constructThumb($path){
  // Information
  $title = 'TLDR Image Test';
  $subtitle = 'This is just a test';
  $description = 'This description isnt very relevant because this is only a test';

  // Related / Grouping
  $project = 'projectName';
  //$tags = array('UI','UX','Design','Creative');

  // Sources PictureFrame
  $thumbnail = 'thumbnail.jpg';
  $image = 'image.jpg';

    $array = array(
      "title" => $title,
      "subtitle" => $subtitle,
      "desc" => $description,
      "project" => $project,
      //"tags" => $tags,
      "thumb" => $path.$thumbnail,
      "image" => $path.$image
    );
    return $array;
  }

  $newArray = constructThumb($galleryDir);
  echo('<pre>');
  print_r($newArray);
  echo('</pre>');


  // push this to Gallery Array
  array_push($galleryArray,$newArray);

?>
