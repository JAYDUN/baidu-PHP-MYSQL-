<?php
    header("Content-type:application/json; charset=utf-8");

    require_once('db.php');

    if($link){

    	$newsTitle=$_POST['newsTitle'];
    	$newsType=$_POST['newsType'];
    	$newsImg=$_POST['newsImg'];
    	$newsTime=$_POST['newsTime'];

    	$sql = "INSERT INTO `news`(`newsTitle`,`newsType`,`newsImg`,`newsTime`)
    			VALUES ('{$newsTitle}','{$newsType}','{$newsImg}','{$newsTime}')";


    	mysqli_query($link,"SET NAMES utf8");
    	$result = mysqli_query($link,$sql);

    	echo json_encode(array('success'=>'ok'));
    }

    mysqli_close();
?>