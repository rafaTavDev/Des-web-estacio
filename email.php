<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require 'vendor/autoload.php';


if(isset($_POST["enviar"])){
  $mail = new PHPMailer(true);

  try {
      //Server settings
      $mail->SMTPDebug = SMTP::DEBUG_SERVER; 
      $mail->isSMTP();
      $mail->Host       = 'smtp.titan.email';
      $mail->SMTPAuth   = true;
      $mail->Username   = 'contato@aprovecomingles.com';
      $mail->Password   = '@aprove100';
      $mail->SMTPSecure = 'ssl';            //Enable implicit TLS encryption
      $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

      //Recipients
      $mail->setFrom('contato@aprovecomingles.com', 'Aprove com ingles');
      $mail->addAddress('rafabstavares@gmail.com');     //Add a recipient
      $mail->addReplyTo($_POST["email"], 'Information');


      //Content
      $mail->isHTML(true);                                  //Set email format to HTML
      $mail->Subject = 'Mensagem Cliente via Site';
      $mail->Body    = "Email: " .$_POST["email"]. "<br/>Mensagem: " .$_POST["mensagem"];
      $mail->AltBody = 'Nome: 
      Mensagem: ';

      $mail->send();
      echo 'Message has been sent';
  } catch (Exception $e) {
      echo "Ocorreu o seguinte erro: {$mail->ErrorInfo}";
  }
}


?>

