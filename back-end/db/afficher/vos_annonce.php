<?php
require '../db.php';
  if(isset($_GET['email'])){
      if(!empty($_GET['email'])){
          $result=$pdo->prepare("SELECT a.titre ,a.id_pub as id ,m.id as idm ,a.statut FROM moderateur as m ,annonce as a   WHERE  a.id_mod=m.id AND m.email=?");
          $result->execute(array($_GET['email']));
          if(!$result){
            http_response_code(404);
        }else{
            echo json_encode($result->fetchAll(PDO::FETCH_OBJ));
        }
      }
  }else{
      echo 'hhhhh';
  }
?>