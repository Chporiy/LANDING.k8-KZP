<?php
$user_name    = $_POST['user_name'];
$user_phone   = $_POST['user_phone'];

$to = "K8direkt@yandex.ru";
$subject = "Заявка на обратный звонок";
$message = '
	Пользователь оставил свои данные <br>
 <b>Имя:</b> ' . $user_name  . ' <br>
 <b>Телефон:</b> ' . $user_phone  . '';
$headers = "From: K8direkt@yandex.ru" . "\r\n" .
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
mail($to,$subject,$message,$headers);






