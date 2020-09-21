<?php

// Check for empty fields
if(empty($_POST['name']))
{
	echo "No name Provided!";
	return false;
}
if(empty($_POST['email']))
{
	echo "No email Provided!";
	return false;
}
if(empty($_POST['phone']))
{
	echo "No Phone Provided!";
	return false;
}
if(empty($_POST['message']))
{
	echo "No Message Provided!";
	return false;
}

$name = $_POST['name'];
$email_address = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];

require("class.phpmailer.php");
$mail = new PHPMailer();

//ENCABEZADO DEL MAIL
$mail->AddReplyTo($email_address,$name);
$mail->From     = ("info@centrodep.com.ar"); //Dirección desde la que se enviarán los mensajes.
$mail->FromName = $name; 
$mail->AddAddress("info@centrodep.com.ar"); // Dirección a la que llegaran los mensajes.

//DATOS DEL SERVIDOR
$mail->IsSMTP();
$mail->SMTPAuth = true;
$mail->Host       = "mail.centrodep.com.ar"; 
$mail->Port       = "25";                    
$mail->SMTPAuth   = true;                  
$mail->Username   = 'info@centrodep.com.ar'; 
$mail->Password   = 'Infocentrodep10';

//CUERPO DE MAIL
//$mail->	IsHTML(true);
$mail->	Subject = "CentroDep - Nueva consulta web:  $name"; 
$mail->	Body = "CentroDep - Nueva consulta web.\n"."\nNombre: $name\n\nEmail: $email_address\n\nTelefono: $phone\n\nMensaje:\n$message";

//ENVIAR MAIL
$mail->Send();

?>

