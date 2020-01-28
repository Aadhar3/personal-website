<?php
// Check for empty fields
// if(empty($_POST['name'])      ||
//    empty($_POST['email'])     ||
//    empty($_POST['subject'])   ||
//    empty($_POST['message'])   ||
//    !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
//    {
//       echo "No arguments Provided!";
//       return false;
//    }
   
// $name = strip_tags(htmlspecialchars($_POST['name']));
// $email_address = strip_tags(htmlspecialchars($_POST['email']));
// $subject = strip_tags(htmlspecialchars($_POST['subject']));
// $message = strip_tags(htmlspecialchars($_POST['message']));
   
// // Create the email and send the message
// $to = 'aadhar@umich.edu'; // Add your email address
// $email_subject = "Website Contact Form:  $subject";
// $email_body = "You have received a new message from your website contact form.\n\n"."Here are the details:\n\nName: $name\n\nEmail: $email_address\n\nMessage:\n$message";
// $headers = "From: aadhar98@yahoo.com" ."\r\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
// $headers .= "Reply-To: $email_address";
// mail($to,$email_subject,$email_body,$headers);
// return true;    
$email  = "aadhar@umich.edu"; 
$title   = "My subject"; 
$message = "Text message !"; 
mail($email, $title, $message); 
?>     