<?php
require '../db.php';
  if(isset($_GET['id'])){
    if(!empty($_GET['id'])){
        $res=$pdo->prepare("SELECT * FROM annonce as a , moderateur as m WHERE a.id_mod=m.id AND id_pub=?");
        $res->execute(array($_GET['id']));
        echo json_encode($res->fetchAll(PDO::FETCH_OBJ));
    }
  }else{
      echo '......';
  }

?>
