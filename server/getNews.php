<?php
    header("Content-type:application/json; charset=utf-8");
    // $link=mysqli_connect('localhost','root','root','baiduNews',8889);
	require_once('db.php');

    if($link){
    	if($_GET['newsType']){
    		$newsType=$_GET['newsType'];
    		$sql="SELECT * FROM `news` WHERE `newsType`='{$newsType}'";
	    	mysqli_query($link,"set NAMES utf8");
	    	$result=mysqli_query($link,$sql);

	    	$senddata=array();
	    	while($row = mysqli_fetch_assoc($result)){
	    		array_push($senddata,array(
	    									'id'=>$row['id'],
	    									'newsType'=>$row['newsType'],
	    									'newsTitle'=>$row['newsTitle'],
	    									'newsImg'=>$row['newsImg'],
	    									'newsTime'=>$row['newsTime']

	    			));
	    	}
	    	echo json_encode($senddata);
    	}else{
    		$sql="SELECT * FROM `news` ";
	    	mysqli_query($link,"set NAMES utf8");
	    	$result=mysqli_query($link,$sql);

	    	$senddata=array();
	    	while($row = mysqli_fetch_assoc($result)){
	    		array_push($senddata,array(
	    									'id'=>$row['id'],
	    									'newsType'=>$row['newsType'],
	    									'newsTitle'=>$row['newsTitle'],
	    									'newsImg'=>$row['newsImg'],
	    									'newsTime'=>$row['newsTime']

	    			));
	    	}
	    	echo json_encode($senddata);
    	}
    	
    }else{
        echo json_encode(array('connection' =>"failed"));
    }

    mysqli_close($link);
?>

