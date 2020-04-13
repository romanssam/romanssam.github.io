<?php
	$email = $_POST['email'];
	$name = $_POST['names'];
	$phone = $_POST['phone'];

	$subject = "=?utf-8?B?".based64_encode('Сообщение с сайта: ')."?=";
	$headers = "Сообщение от: $email\r\n\Переслать: $email\r\n\Content-type: text/html;";

	$success = mail('uarenotalone@yandex.ru', $subject, $headers);
	echo $success;
?>