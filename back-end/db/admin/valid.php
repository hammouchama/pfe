<?php

    require_once '../db.php';
  if(isset($_GET['id'])){
    $rs=$pdo->prepare("UPDATE  annonce SET statut=? WHERE id_pub=?");
    $rs->execute(array($_POST['statut'],$_GET['id']));
    if($rs){
        echo 'good';
    }
  }



?>