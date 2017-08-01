<?php
    header("Content-type:application/json; charset=utf-8");

    require_once('db.php');

    if($link){

    	$newsTitle=$_POST['newsTitle'];
    	$newsType=$_POST['newsType'];
    	$newsImg=$_POST['newsImg'];
    	$newsTime=$_POST['newsTime'];
        $newsid=$_POST['id'];

    	$sql = "UPDATE `news` SET `newsTitle`='{$newsTitle}',`newsType`
        ='{$newsType}',`newsImg`='{$newsImg}',`newsTime`='{$newsTime}' WHERE `id`={$newsid}";


    	mysqli_query($link,"SET NAMES utf8");
    	$result = mysqli_query($link,$sql);

    	echo json_encode(array('success'=>'ok'));
    }

    mysqli_close();
?>