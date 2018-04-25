<?php

$frm_name  = "Заявка!";
$recepient = "melana309@gmail.com, nosha309@mail.ru, nosha_bobruysk@mail.ru, fedorov.sergey82@mail.ru";
$sitename  = "Ремонт квартир под ключ";
$subject   = "Новая заявка с сайта \"$sitename\"";
$email     = "info@bobrmama.by";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$formname = trim($_POST["formname"]);

$message = "
Форма: $formname <br>
Имя: $name <br>
Телефон: $phone
";

mail($recepient, $subject, $message, "From: $frm_name <$email>" . "\r\n" . "Reply-To: $email" . "\r\n" . "X-Mailer: PHP/" . phpversion() . "\r\n" . "Content-type: text/html; charset=\"utf-8\"");
