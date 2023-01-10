<?php
use PHPMailer\PHPMailer\Exception;
    require './emaill.php';
try {
	$mail->setFrom('hmoussama2001@gmail.com', 'oussama');		
	$mail->addAddress('oussama.hammouchama@etu.uae.ac.ma');
	//$mail->addAddress('receiver2@gfg.com', 'Name');
	
	$mail->isHTML(true);								
	$mail->Subject = 'php test mail';
	$mail->Body = 'HTML message body in <b>bold</b> ';
	$mail->AltBody = 'Body in plain text for non-HTML mail clients';
	$mail->send();
	//echo "Mail has been sent successfully!";
} catch (Exception $e) {
	echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}

/*
$to = "oussa.h@yahoo.com";
$sub = "Mail";
$msg="Hello.";
if (mail($to,$sub,$msg))
	echo "Your Mail is sent successfully.";
else
	echo "Your Mail is not sent. Try Again.";*/

?>
