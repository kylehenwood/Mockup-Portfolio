<?php
  // Information
  $title = 'TLDR Image Test';
  $subtitle = 'This is just a test';
  $description = 'This description isnt very relevant because this is only a test';

  // Related / Grouping
  $project = 'projectName';
  $tags = array('UI','UX','Design','Creative');

  // Sources PictureFrame
  $thumbnail = '4-3.jpg';
  $image = 'image.jpg';


  // Push folder data to array
  // ---
  $tempArray = array(
    "title" => $title,
    "subtitle" => $subtitle,
    "desc" => $description,
    "project" => $project,
    "tags" => $tags,
    "thumb" => $thumbDir.'/'.$thumbnail,
    "image" => $thumbDir.'/'.$image
  );
  array_push($galleryArray,$tempArray);
  unset($tempArray);
?>
