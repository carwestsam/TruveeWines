<?php

$json = file_get_contents('php://input');
$obj=json_decode($json);

$message="Name/Email :\t$obj->firstName $obj->lastName ( $obj->email )\r\nSubject :\t$obj->subject \r\nMessage :\t$obj->message";

$recipient='willie.chiu@thoriumdigital.com';
$subject='Truvee Wines Contact Us Form';
$headers='From:Truvee Wines Website <info@truveewines.com>' . "\r\n";


mail( $recipient, $subject, $message, $headers);

echo "success"

?>
