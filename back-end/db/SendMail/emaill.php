<?php
   use PHPMailer\PHPMailer\PHPMailer;
      
   
   require 'vendor/autoload.php';
   $mail = new PHPMailer();
 //  $mail->SMTPDebug =2;									
	$mail->isSMTP();											
	$mail->Host	 = 'smtp.gmail.com;';					
	$mail->SMTPAuth = true;							
	$mail->Username = 'hmoussama2001@gmail.com';				
	$mail->Password = 'oussama2020';						
	$mail->SMTPSecure = 'tls';							
	$mail->Port	 = 587;
  /*  $mail->SMTPDebug = 2;                   // Enable verbose debug output
    $mail->isSMTP();                        // Set mailer to use SMTP
    $mail->Host       = 'smtp.gfg.com;';    // Specify main SMTP server
    $mail->SMTPAuth   = true;               // Enable SMTP authentication
    $mail->Username   = 'user@gfg.com';     // SMTP username
    $mail->Password   = 'password';         // SMTP password
    $mail->SMTPSecure = 'tls';              // Enable TLS encryption, 'ssl' also accepted
    $mail->Port       = 587;   
   */


?>