<?php
     require './db.php';
     include_once './cripter_motPass/cr.php';
if(isset($_POST['valid'])){

   if(!empty($_POST['email']) && !empty($_POST['pwd'])){

     $check=$pdo->prepare('SELECT * FROM users WHERE email=?');
     $check->execute(array($_POST['email']));
     if($check->rowCount()>0){
         $s=$check->fetch();
          if($_POST['pwd']==dcrypter($s['mot_passe'])){
              echo $s['rol'];
          }else{
              echo 'email ou mot de passe incorecte';
          }
     }else{
        echo 'email ou mot de passe incorecte';
     }
   }else{
       echo  "Veuillez entrer toutes l'informations";
   }
  }
  else{
      echo 'nothing ';
  }


?>