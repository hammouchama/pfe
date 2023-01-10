<?php
   require './db.php';
   if(isset($_POST['valid'])){
     if(!empty($_POST['categorie'])&& !empty($_POST['titre']) 
      && !empty($_POST['description']) && !empty($_POST['numdetelephone'])
      && !empty($_POST['datededebut']) && !empty($_POST['datedefin'])&& !empty($_POST['localisation'])
      && !empty($_FILES['img'])&& !empty($_POST['capacite'])){
             $categorie=htmlspecialchars($_POST['categorie']);
             $titre=htmlspecialchars($_POST['titre']);
             $description=htmlspecialchars($_POST['description']);
             $tarifs=htmlspecialchars($_POST['tarif']);
             $numdetelephone=htmlspecialchars($_POST['numdetelephone']);
             $datededebut=htmlspecialchars($_POST['datededebut']);
             $datedefin=htmlspecialchars($_POST['datedefin']);
             $localisation=htmlspecialchars($_POST['localisation']); 
             $capacite=htmlspecialchars($_POST['capacite']);
             $logo=$_FILES['img']['name'];
              if(is_numeric($tarifs)){
                $tt=explode('.',$logo);
                $imagExt=strtolower(end($tt));
                $allowed=array('jpg','jpeg','png');
                if(in_array($imagExt,$allowed)){
                    $r=$pdo->prepare("SELECT id FROM moderateur WHERE email=?");
                    $r->execute(array($_GET['email']));
                    $r=$r->fetch();
                  $res=$pdo->prepare("INSERT INTO annonce(categorie,titre,description,tarif,num_tele,date_debut,date_fin,local,capacite,imag,id_mod,reserver,reserver_method)VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?)");
                  $res->execute(array($categorie,$titre,$description,$tarifs,$numdetelephone,$datededebut,$datedefin,$localisation,$capacite,$logo,$r['id'],$_POST['reserver'],$_POST['reserver_method']));
                   if($res){
                     echo 'good';
                   }else{
                     echo 'erreur de conection';
                   }
                }else{
                  echo "Veuillez saisirune image";
                }
              }else{
                echo "tarif n'est pas valid";
              }
                }else{
        echo 'Veuillez entrer toutes les informations';
      }
   }else{
       echo 'nothing her';
   }
?>