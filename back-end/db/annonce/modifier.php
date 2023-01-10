<?php
  require '../db.php';
  if(isset($_POST['valid']) && isset($_GET['id'])){
    if(!empty($_POST['categorie'])&& !empty($_POST['titre']) 
     && !empty($_POST['description']) && !empty($_POST['tarif']) && !empty($_POST['numdetelephone'])
     && !empty($_POST['datededebut']) && !empty($_POST['datedefin'])&& !empty($_POST['localisation'])
     && !empty($_POST['capacite'])){
            $categorie=htmlspecialchars($_POST['categorie']);
            $titre=htmlspecialchars($_POST['titre']);
            $description=nl2br(htmlspecialchars($_POST['description']));
            $tarifs=htmlspecialchars($_POST['tarif']);
            $numdetelephone=htmlspecialchars($_POST['numdetelephone']);
            $datededebut=htmlspecialchars($_POST['datededebut']);
            $datedefin=htmlspecialchars($_POST['datedefin']);
            $localisation=htmlspecialchars($_POST['localisation']); 
            $capacite=htmlspecialchars($_POST['capacite']);
             if(is_numeric($tarifs)){
                 if(!empty($_FILES['img'])){
                    $logo=$_FILES['img']['name'];
                    $tt=explode('.',$logo);
                    $imagExt=strtolower(end($tt));
                    $allowed=array('jpg','jpeg','png');
                    if(in_array($imagExt,$allowed)){
                        $res=$pdo->prepare("UPDATE  annonce SET categorie=?,titre=?,description=?,tarif=?,num_tele=?,date_debut=?,date_fin=?,local=?,capacite=?,imag=? , statut=? WHERE id_pub=?");
                        $res->execute(array($categorie,$titre,$description,$tarifs,$numdetelephone,$datededebut,$datedefin,$localisation,$capacite,$logo,0,$_GET['id']));
                        if($res){
                            echo 'good';
                        }else{
                            echo 'erreur de conection';
                        }
                    }else{
                        echo "Veuillez saisirune image";
                       
               }
                 }else{
                    $res=$pdo->prepare("UPDATE  annonce SET categorie=?,titre=?,description=?,tarif=?,num_tele=?,date_debut=?,date_fin=?,local=?,capacite=?,statut=? WHERE id_pub=?");
                    $res->execute(array($categorie,$titre,$description,$tarifs,$numdetelephone,$datededebut,$datedefin,$localisation,$capacite,0,$_GET['id']));
                     if($res){
                        echo 'good';
                    }else{
                        echo 'erreur de conection';
                    }
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