<?php
   require './db.php';
   include_once './cripter_motPass/cr.php';
   if(isset($_POST['valid'])){
     if(!empty($_POST['nom'])&& !empty($_POST['prenom']) 
      && !empty($_POST['email']) && !empty($_POST['pwd']) && !empty($_POST['pwdc'])
      && !empty($_POST['sexe']) && !empty($_POST['nomducentre'])){
         if($_POST['pwd']==$_POST['pwdc']){
            
             $nom=htmlspecialchars($_POST['nom']);
             $prenom=htmlspecialchars($_POST['prenom']);
             $email=htmlspecialchars($_POST['email']);
             $pwd=crypter(htmlspecialchars($_POST['pwd']));
             $sexe=htmlspecialchars($_POST['sexe']);
             $passe=htmlspecialchars($_POST['pwd']);
             $Nomducentre=htmlspecialchars($_POST['nomducentre']); 
             if(strlen($passe)>=4){
                $check=$pdo->prepare("SELECT * FROM users WHERE email=?");
                $check->execute(array($email));
                if($check->rowCount()==0){
                  $res1=$pdo->prepare("INSERT INTO users(email,mot_passe,rol)VALUES(?,?,?)");
                  $res1->execute(array($email,$pwd,'moderateur'));
                  $res=$pdo->prepare("INSERT INTO moderateur(nom,prenom,email,mot_passe,nom_centre,sexe)VALUES(?,?,?,?,?,?)");
                  $res->execute(array($nom,$prenom,$email,$pwd,$Nomducentre,$sexe));
                 if($res){
                  echo "succes";
                 }
                }else{
                    echo "vous avez deja un compte";
                }
               }else{
                  echo "Ce n'est pas un mot de passe fort";
               }
         }else{
          echo "les mots de passe ne correspondent pas";
         }
      }else{
        echo 'Veuillez entrer toutes les informations';
      }
   }else{
       echo 'nothing her';
   }
?>