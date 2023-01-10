<?php
require '../db.php';
  if(isset($_GET['id'])){
      if(!empty($_GET['id'])){
          $r=$pdo->prepare("SELECT * FROM reservation  WHERE id_client=? ");
          $r->execute(array($_GET['id']));
          if($r->rowCount()>0){
            $result=$pdo->prepare("SELECT * FROM reservation as r , annonce as a WHERE  r.id_client= ? AND r.id_anno=a.id_pub");
             $result->execute(array($_GET['id']));
                    if(!$result){
                        http_response_code(404);
                    }else{
                        echo json_encode($result->fetchAll(PDO::FETCH_OBJ));
                    }
          }else{
            echo json_encode($r->fetchAll(PDO::FETCH_OBJ));
          }
          
      }
  }else{
      echo 'hhhhh';
  }
?>