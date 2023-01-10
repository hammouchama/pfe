<?php
require_once '../db.php';
if(isset($_GET['id'])){
   if(!empty($_GET['id'])){
    $esult=$pdo->prepare("DELETE FROM commentaire WHERE id_c=?");
    $esult->execute(array($_GET['id']));
    if($esult){
        echo 'good';
    }
   }
}





?>