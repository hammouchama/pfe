<?php
  require_once '../db.php';
  require_once '../cripter_motPass/cr.php';
  if(isset($_POST['nom']) && isset($_POST['email']) && isset($_POST['prenom'])){
    if(!empty($_POST['nom']) && !empty($_POST['prenom']) && !empty($_POST['email'])){
        $nom=htmlspecialchars($_POST['nom']);
        $prenom=htmlspecialchars($_POST['prenom']);
        $email=htmlspecialchars($_POST['email']);
        $check=$pdo->prepare("SELECT * FROM users WHERE email=?");
        $check->execute(array($email));
        if($check->rowCount()>0){
            $user=$check->fetch();
            if($user['rol']==='client'){
                $pass=$pdo->prepare("SELECT * FROM client WHERE email=? AND nom=? AND prenom=?");
                $pass->execute(array($email,$nom,$prenom));
                if($pass->rowCount()>0){
                    $pass=$pass->fetch();
                    echo dcrypter($pass['mot_passe']).'/scscgood';
                }else{
                     echo 'les information incorecte';
                }
            }else if($user['rol']==='modetateur'){
                $pass=$pdo->prepare("SELECT * FROM moderateur WHERE email=? AND nom=? AND prenom=?");
                $pass->execute(array($nom,$prenom));
                if($pass->rowCount()>0){
                    $pass=$pass->fetch();
                    echo dcrypter($pass['mot_passe']).'/scscgood';
                }else{
                     echo 'les information incorecte';
                }
            }
           
        }
        else{
            echo 'email incorecte';
        }
    }else{
        echo 'Veuillez entrer toutes les information';
    }
  }else{
      echo 'error 404';
  }


?>