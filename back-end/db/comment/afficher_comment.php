<?php
require '../db.php';
  if(isset($_GET['id'])){
    if(!empty($_GET['id'])){
        $res=$pdo->prepare("SELECT * FROM commentaire as c,client as cl WHERE c.id_anno=? AND c.id_client=cl.id ORDER BY c.id_anno DESC");
        $res->execute(array($_GET['id']));
      
               /* $r=$res->fetchAll(PDO::FETCH_OBJ);
                $id= $r[0]->id_client;
                $res2=$pdo->prepare("SELECT * FROM client WHERE id=?");
                    $res2->execute(array($id));
                    $a=array_merge($r,$res2->fetchAll(PDO::FETCH_OBJ));*/
                    $a= $res->fetchAll(PDO::FETCH_OBJ);
                    
            
       echo json_encode($a);
    }
  }else{
      echo '......';
  }

?>


