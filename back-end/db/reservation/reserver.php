<?php
 require '../db.php';
  if(isset($_GET['id']) && isset($_GET['email'])){
    if(!empty($_GET['id']) && !empty($_GET['email'])){
        $email =$_GET['email'];
           $re=$pdo->prepare("SELECT sum(n_place) as NOR ,id_client FROM reservation WHERE id_anno=?");
            $re->execute(array($_GET['id']));
            if($re->rowCount()<0){
                if(isset($_POST['date']) && ! empty($_POST['date'])){
                    $user=$pdo->prepare("SELECT * FROM client WHERE email=?");
                    $user->execute(array($email));
                    $r=$user->fetch();
                    $esult=$pdo->prepare("INSERT INTO reservation(id_anno,id_client,n_phone,n_place,date_r)VALUES(?,?,?,?,?)");
                    $esult->execute(array($_GET['id'],$r['id'],$_POST['phon'],$_POST['place'],$_POST['date']));
                    if($esult){
                        echo 'good';
                    }
                }else{
                    $user=$pdo->prepare("SELECT * FROM client WHERE email=?");
                    $user->execute(array($email));
                    $r=$user->fetch();
                    $esult=$pdo->prepare("INSERT INTO reservation(id_anno,id_client,n_phone,n_place)VALUES(?,?,?,?)");
                    $esult->execute(array($_GET['id'],$r['id'],$_POST['phon'],$_POST['place']));
                    if($esult){
                        echo 'good';
                    }
                }
            }else{ 
                $user=$pdo->prepare("SELECT * FROM client WHERE email=?");
                        $user->execute(array($email));
                        $r=$user->fetch();
                $r1=$pdo->prepare("SELECT * FROM reservation WHERE id_anno=? AND id_client=?");
                $r1->execute(array($_GET['id'],$r['id']));
                if($r1->rowCount()>0){
                    echo 'Vous avez déjà réservé !';
                }else{
                    $rs=$pdo->prepare("SELECT capacite FROM annonce WHERE id_pub=?");
                    $rs->execute(array($_GET['id']));
                    if(($rs->fetch()['capacite']-$re->fetch()['NOR'])<$_POST['place']){
                        echo "Le nombre de places n'est  pas suffisant pour ce nombre";
                    }else{ 
                        if(isset($_POST['date'])){
                            $esult=$pdo->prepare("INSERT INTO reservation(id_anno,id_client,n_phone,n_place,date_r)VALUES(?,?,?,?,?)");
                            $esult->execute(array($_GET['id'],$r['id'],$_POST['phon'],$_POST['place'],$_POST['date']));
                            if($esult){
                                echo 'good';
                            }
                        }else{
                            $esult=$pdo->prepare("INSERT INTO reservation(id_anno,id_client,n_phone,n_place)VALUES(?,?,?,?)");
                            $esult->execute(array($_GET['id'],$r['id'],$_POST['phon'],$_POST['place']));
                            if($esult){
                                echo 'good';
                            }
                        }
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