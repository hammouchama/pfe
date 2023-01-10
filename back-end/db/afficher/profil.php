<?php
   require '../db.php';
   if(isset($_GET['cat']) && isset($_GET['email'])){
      if($_GET['cat']=='modetateur'){
         $resulta=$pdo->prepare("SELECT * FROM moderateur WHERE email=?");
         $resulta->execute(array($_GET['email']));
         echo json_encode($resulta->fetchAll(PDO::FETCH_OBJ));
      }else{
          if($_GET['cat']==='client'){
            $resulta=$pdo->prepare("SELECT * FROM client WHERE email=?");
         $resulta->execute(array($_GET['email']));
         echo json_encode($resulta->fetchAll(PDO::FETCH_OBJ));
          }else{
             echo 'error';
          }
    }
   }else{
      echo '666';
   }
   
?>