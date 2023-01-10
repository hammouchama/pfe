<?php
     require '../db.php';
     if(isset($_GET['limit'])){
        $resulta=$pdo->query("SELECT * FROM annonce WHERE statut=1 ORDER BY id_pub DESC LIMIT 0,6");
        if(!$resulta){
            http_response_code(404);
        }else{
            echo json_encode($resulta->fetchAll(PDO::FETCH_OBJ));
        }
     }else{
        $resulta=$pdo->query("SELECT * FROM annonce WHERE statut=1 ORDER BY id_pub DESC");
        if(!$resulta){
            http_response_code(404);
        }else{
            echo json_encode($resulta->fetchAll(PDO::FETCH_OBJ));
        }
     }
            
?>