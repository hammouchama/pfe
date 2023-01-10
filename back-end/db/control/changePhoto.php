<?php
require_once('../db.php');
//require '../db.php';
if(isset($_GET['id'])){
     if(!empty($_GET['id'])){
         $id=$_GET['id'];
         $tt=explode('.',$_POST['img']);
         $imagExt=strtolower(end($tt));
         $allowed=array('jpg','jpeg','png');
         if(in_array($imagExt,$allowed)){
         if($_POST['role']==="client"){
            $res=$pdo->query("SELECT * FROM client WHERE id=$id");
            if($res->rowCount()>0){
                $res=$pdo->prepare("UPDATE client SET image =? WHERE id=?");
                $res->execute(array($_POST['img'],$id));
            }
         }else{
            $res=$pdo->query("SELECT * FROM moderateur WHERE id=$id");
            if($res->rowCount()>0){
                $res=$pdo->prepare("UPDATE moderateur SET image =? WHERE id=?");
                $res->execute(array($_POST['img'],$id));
            }
         }
        }
        
     }
}else{

}



?>