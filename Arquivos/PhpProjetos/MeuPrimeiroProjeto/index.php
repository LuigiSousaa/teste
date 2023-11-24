<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Programação</title>
</head>
<body>
<h1>Olá Alunos!!! Vamos Aprender PHP????</h1>
<?php
  $number1 = 1;
  $number2 = 2;

  if($number2 > $number1) {
    $a = 'Número 2 é maior que número 1';
  } else {
    $b = 'Número 2 não é maior que número 1';
  }

  $ternario = ($number2 > $number1) ?
  'Número 2 é maior que número 1' : 'Número 2 não é maior que número 1';

  echo $ternario; // Número 2 é maior que número 1
?>
</body>
</html>