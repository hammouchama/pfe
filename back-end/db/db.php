<?php
        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Headers: *');
        //header('Content-Type: application/json; charset=utf-8');
        header('Access-Control-Allow-Methods: PUT , GET , POST');
        try{
        $pdo=new PDO("mysql:host=localhost;dbname=pfe_scsc",'root','');
        }catch(Exception $e){
        echo 'data not fonde '.$e->getMessage();
        }
?>