<?php
 require_once '../db.php';
    $resulta=$pdo->query("SELECT * FROM annonce as a , moderateur as m WHERE m.id=a.id_mod AND a.statut=0");
    if(!$resulta){
        http_response_code(404);
    }else{
        echo json_encode($resulta->fetchAll(PDO::FETCH_OBJ));
    }
?>    