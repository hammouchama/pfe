<?php
require_once '../db.php';
require_once '../cripter_motPass/cr.php';
    if(!empty($_GET['email'])){
        $qury=$pdo->prepare("SELECT * FROM moderateur WHERE email=?");
        $qury->execute(array($_GET['email']));
        $r=$qury->fetch();
        $nom=htmlspecialchars($_POST['nom']);
        $prenom=htmlspecialchars($_POST['prenom']);
        $email=htmlspecialchars($_POST['email']);
        $pwd=htmlspecialchars($_POST['npwd']);
        $sexe=htmlspecialchars($_POST['sexe']);
        if($_POST['pwd']===dcrypter($r['mot_passe'])){
            $res1=$pdo->prepare("UPDATE users SET email=?, mot_passe=? WHERE email=?");
            $res1->execute(array($email,crypter($pwd),$r['email']));
            $res=$pdo->prepare("UPDATE moderateur SET nom=?,prenom=?,email=?,mot_passe=?,sexe=? WHERE id=?");
            $res->execute(array($nom,$prenom,$email,crypter($pwd),$sexe,$r['id']));
                        if($res){
                            echo 'good';
                        }
        }else{
          echo 'Mot de passe incorecte';
        }
    }
?>