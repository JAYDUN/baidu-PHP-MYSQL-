<?php
    header("Content-type:application/json; charset=utf-8");

    require_once('db.php');

    if($link){

    	$newsid=$_POST['newsid'];
    	

    	$sql = "DELETE FROM `news` WHERE  `news`. `id`={$newsid}";


    	mysqli_query($link,"SET NAMES utf8");
    	mysqli_query($link,$sql);

    	echo json_encode(array('删除状态'=>'success'));
    }

    mysqli_close();
?>