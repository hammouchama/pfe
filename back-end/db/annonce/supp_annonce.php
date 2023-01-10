<?php
require_once '../db.php';
if(isset($_GET['id'])){
   if(!empty($_GET['id'])){
    $esult=$pdo->prepare("DELETE FROM reservation WHERE id_anno=?");
    $esult->execute(array($_GET['id']));
    $esult=$pdo->prepare("DELETE FROM commentaire WHERE id_anno=?");
    $esult->execute(array($_GET['id']));
    $esult=$pdo->prepare("DELETE FROM annonce WHERE id_pub=?");
    $esult->execute(array($_GET['id']));
    if($esult){
        echo 'good';
    }
   }
}





?>