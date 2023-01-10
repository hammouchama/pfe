<?php
require_once '../db.php';
if(isset($_GET['id'])){
   if(!empty($_GET['id'])){
    if($_GET['cat']=='client'){
        $esult=$pdo->prepare("DELETE FROM reservation WHERE id_client=?");
        $esult->execute(array($_GET['id']));
        $esult=$pdo->prepare("DELETE FROM commentaire WHERE id_client=?");
        $esult->execute(array($_GET['id']));
        $esult=$pdo->prepare("DELETE FROM client WHERE id=?");
        $esult->execute(array($_GET['id']));
        if($esult){
            echo 'good';
        }
    }else  if($_GET['cat']=='moderateur'){
       
        $esult=$pdo->prepare("DELETE FROM annonce WHERE id_mod=?");
        $esult->execute(array($_GET['id']));
        $esult=$pdo->prepare("DELETE FROM moderateur WHERE id=?");
        $esult->execute(array($_GET['id']));
        if($esult){
            echo 'good';
        }
    }
    
   }
}





?>