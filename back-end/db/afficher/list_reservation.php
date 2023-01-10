<?php
require '../db.php';
  if(isset($_GET['id'])){
    if(!empty($_GET['id'])){
        $res=$pdo->prepare("SELECT c.nom , c.prenom ,c.email ,r.n_place , r.date_r ,r.n_phone FROM reservation as r, client as c WHERE r.id_anno=? AND c.id=r.id_client");
        $res->execute(array($_GET['id']));
        echo json_encode($res->fetchAll(PDO::FETCH_OBJ));
    }
  }else{
      echo '......';
  }

?>
