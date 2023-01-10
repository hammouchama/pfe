<?php
 require_once '../db.php';
    $resulta=$pdo->query("SELECT * FROM annonce  ORDER BY id_pub DESC");
    if(!$resulta){
        http_response_code(404);
    }else{
        echo json_encode($resulta->fetchAll(PDO::FETCH_OBJ));
    }
?>    