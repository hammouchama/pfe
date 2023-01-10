<?php
 require_once '../db.php';
   if($_GET['cat']=='client'){
    $resulta=$pdo->query("SELECT * FROM client");
    if(!$resulta){
        http_response_code(404);
    }else{
        echo json_encode($resulta->fetchAll(PDO::FETCH_OBJ));
    }
   }else{
    $resulta=$pdo->query("SELECT * FROM moderateur");
    if(!$resulta){
        http_response_code(404);
    }else{
        echo json_encode($resulta->fetchAll(PDO::FETCH_OBJ));
    }
   }




?>