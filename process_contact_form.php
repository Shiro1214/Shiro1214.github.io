<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  // Set the recipient email address
  $to = 'shiroinhawai@go.byuh.edu';

  // Set the email subject
  $subject = 'New message from your website';

  // Set the email message body
  $body = "Name: $name\nEmail: $email\nMessage: $message";

  // Set the email headers
  $headers = "From: $name <$email>" . "\r\n" .
             "Reply-To: $email" . "\r\n" .
             "X-Mailer: PHP/" . phpversion();

  // Send the email using MailCatcher
  $smtp_server = 'localhost';
  $smtp_port = 1025;

  ini_set('SMTP', $smtp_server);
  ini_set('smtp_port', $smtp_port);
  ini_set('sendmail_from', $email);

  if (mail($to, $subject, $body, $headers)) {
    header('thank_you.html');
  } else {
    echo 'Error sending message.';
  }
}
?>
