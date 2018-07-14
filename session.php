<?php

session_start();

// get all gallery content into an array
$galleryFolder = "php-thumbnails";
$galleryItems = array_diff(scandir($galleryFolder), array('..', '.'));
$galleryArray = array();

foreach ($galleryItems as $galleryItem) {
  $thumbDir = './'.$galleryFolder.'/'.$galleryItem;
  $galleryConstruct = $thumbDir.'/_construct.php';

  // include construct file inside each thumbnail
  include $galleryConstruct;

  // Push folder data to array
  $tempArray = array(
    "id" => $id,
    "title" => $title,
    "subtitle" => $subtitle,
    "desc" => $description,
    "project" => $project,
    "tags" => $tags,
    "thumb" => $thumbDir.'/'.$thumbnail,
    "image" => $thumbDir.'/'.$image
  );

  // that then pushed that folders content to the $galleryArray
  array_push($galleryArray,$tempArray);
  unset($tempArray);
}

$_SESSION['gallery'] = $galleryArray;
unset($galleryArray);

?>
