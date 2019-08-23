<?php 
// $s3_url = '//songwritingchallenge.s3.amazonaws.com/avatars/';
function s3_avatar_image($size,$name) {
 	return '//songwritingchallenge.s3.amazonaws.com/avatars/' . $size . '/' . $name;
}
function s3_mp3($name) {
	return '//songwritingchallenge.s3.amazonaws.com/mp3s/' . $name;
}
?>