<?php
require '../db.php';
if(isset($_GET['id']) && isset($_GET['email'])){
    $d=date("Y-m-d h:i:s");
    if(!empty($_GET['id']) && !empty($_GET['email'])){
        $email =$_GET['email'];
        if($_POST['rol']==='client'){
        $user=$pdo->prepare("SELECT * FROM client WHERE email=?");
        $user->execute(array($email));
        $r=$user->fetch();
        $user1=$pdo->prepare("SELECT * FROM commentaire WHERE id_client=? AND id_anno=?");
        $user1->execute(array($r['id'],$_GET['id']));
        if($user1->rowCount()>0){
        echo 'Vous avez déjà ajoutre une avis'; 
        }else{
            $esult=$pdo->prepare("INSERT INTO commentaire(id_anno,id_client,contenu,date_de_pub)VALUES(?,?,?,?)");
            $esult->execute(array($_GET['id'],$r['id'],$_POST['comment'],$d));
            if($esult){
                echo 'good';
            }
        }
      
    }
    }else{
        echo "0000000000";
    }
}else{
    echo '000000000';
}






?>