<?php
   require './db.php';
   include_once "./cripter_motPass/cr.php";
   if(isset($_POST['valid'])){
     if(!empty($_POST['nom'])&& !empty($_POST['prenom']) 
      && !empty($_POST['email']) && !empty($_POST['pwd']) && !empty($_POST['pwdc'])
      && !empty($_POST['sexe'])&& !empty($_POST['age']) && !empty($_POST['statut']) && !empty($_POST['adresse'])){
         if($_POST['pwd']==$_POST['pwdc']){
             $d=date("Y");
             $datInser=htmlspecialchars($_POST['age']);
             $nom=htmlspecialchars($_POST['nom']);
             $prenom=htmlspecialchars($_POST['prenom']);
             $email=htmlspecialchars($_POST['email']);
             $passe=htmlspecialchars($_POST['pwd']);
             $pwd=crypter(htmlspecialchars($_POST['pwd']));
             $sexe=htmlspecialchars($_POST['sexe']);
             $age=($d-$datInser);
             $adresse=htmlspecialchars($_POST['adresse']);
             $statut=htmlspecialchars($_POST['statut']); 
             if(strlen($passe)>=4){
                if($age>=7 && $age<100){
                   if($age<=18 && $statut==='fonctionnaire'){
                        echo 'Veuillez entere des information correctes';
                     }else{
                      
                         $check=$pdo->prepare("SELECT * FROM users WHERE email=?");
                         $check->execute(array($email));
                         if($check->rowCount()==0){
                           $res1=$pdo->prepare("INSERT INTO users(email,mot_passe,rol)VALUES(?,?,?)");
                           $res1->execute(array($email,$pwd,'client'));
                       $res=$pdo->prepare("INSERT INTO client(nom,prenom,email,mot_passe,age,sexe,adresse,statut)VALUES(?,?,?,?,?,?,?,?)");
                       $res->execute(array($nom,$prenom,$email,$pwd,$_POST['dn'],$sexe,$adresse,$statut));
                       if($res){
                        echo 'succes';
                       }
                       }else{
                        echo "vous ete dija un compte";
                          }
                }
               
             }else{
               echo "votre Date de Naissance n'est pas valide";
             }
            }else{
               echo "Ce n'est pas un mot de passe fort";
            }
         }else{
          echo "les mots de passe ne correspondent pas";
         }
      }else{
        echo 'Veuillez entrer toutes les information';
      }
   }else{
       echo 'nothing her';
   }
?>